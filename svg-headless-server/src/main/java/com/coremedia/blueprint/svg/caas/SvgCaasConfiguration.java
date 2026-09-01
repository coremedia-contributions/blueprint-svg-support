package com.coremedia.blueprint.svg.caas;

import com.coremedia.caas.config.DoctypeConfigurationProperties;
import com.coremedia.caas.headless_server.plugin_support.extensionpoints.mediacontroller.BlobResolver;
import com.coremedia.caas.media.TransformationService;
import com.coremedia.caas.web.controller.DefaultBlobResolver;
import com.coremedia.cap.common.Blob;
import jakarta.activation.MimeType;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import java.io.IOException;
import java.util.Arrays;
import java.util.Optional;

@AutoConfiguration
public class SvgCaasConfiguration {

  /**
   * Mime type of SVG blobs. These must never be routed through the image transformation service.
   */
  private static final String SVG_MIME_TYPE = "image/svg+xml";

  @Bean
  @Qualifier("graphqlSchemaResource")
  public Resource SVGSchemaResource() throws IOException {
    PathMatchingResourcePatternResolver loader = new PathMatchingResourcePatternResolver();
    return Arrays.stream(loader.getResources("classpath*:svg-support-schema.graphql"))
            .findFirst()
            .orElseThrow(() -> new IOException("GraphQl schema resource 'svg-support-schema.graphql' not found."));
  }

  /**
   * Custom {@link BlobResolver} that overrides the default one from {@code MediaControllerAutoConfiguration}
   * (registered with {@link ConditionalOnMissingBean}).
   * <p>
   * Background: {@code CMSVG} is modelled as a subtype of {@code CMPicture} with an {@code image/svg+xml} data
   * blob. The {@code DefaultBlobResolver} therefore treats an SVG as a transformable image. When the media URL
   * ends with a filename (e.g. {@code .../data/{hash}/logo-1.svg}), the {@code MediaController} derives the
   * requested target format {@code svg} from the file extension and asks the (ImageMagick-based) transformation
   * service to convert to {@code svg}, which it does not support. The resulting
   * {@code UnsupportedOperationException} is turned into an HTTP 400 by the {@code MediaController}.
   * <p>
   * This resolver short-circuits for SVG blobs and always returns the original, untransformed blob, so SVG
   * assets are delivered regardless of whether the URL carries a trailing filename.
   */
  @Bean
  @ConditionalOnMissingBean
  public BlobResolver svgAwareBlobResolver(TransformationService transformationService,
                                           DoctypeConfigurationProperties doctypeConfigurationProperties) {
    BlobResolver delegate = new DefaultBlobResolver(transformationService, doctypeConfigurationProperties);
    return (media, propertyPath, fileExtension, cropName, width) -> {
      Blob blob = media.getBlob(propertyPath);
      if (blob != null && isSvg(blob.getContentType())) {
        // Never transform SVG - deliver the original blob as-is.
        return Optional.of(blob);
      }
      return delegate.resolveBlob(media, propertyPath, fileExtension, cropName, width);
    };
  }

  private static boolean isSvg(MimeType mimeType) {
    return mimeType != null && SVG_MIME_TYPE.equalsIgnoreCase(mimeType.getBaseType());
  }

}
