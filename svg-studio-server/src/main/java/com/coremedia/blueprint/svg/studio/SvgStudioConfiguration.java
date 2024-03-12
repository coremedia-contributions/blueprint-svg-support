package com.coremedia.blueprint.svg.studio;

import com.coremedia.blueprint.svg.validators.CMSVGImageMapValidator;
import com.coremedia.blueprint.svg.validators.CMSVGValidator;
import com.coremedia.cap.common.CapConnection;
import com.coremedia.cap.content.ContentType;
//import com.coremedia.cap.undoc.common.spring.CapRepositoriesConfiguration;
//import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import com.coremedia.rest.cap.CapRestServiceConfiguration;
import com.coremedia.rest.cap.config.StudioConfigurationProperties;
import com.coremedia.springframework.xml.ResourceAwareXmlBeanDefinitionReader;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import edu.umd.cs.findbugs.annotations.NonNull;
import edu.umd.cs.findbugs.annotations.Nullable;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;

import java.util.Objects;

/*                "classpath:/com/coremedia/blueprint/base/multisite/bpbase-multisite-services.xml",
                  "classpath:/com/coremedia/blueprint/base/links/bpbase-links-services.xml",
                  "classpath:/com/coremedia/cap/transform/transform-services.xml",
                  "classpath:/com/coremedia/blueprint/base/pagegrid/impl/bpbase-pagegrid-services.xml"*/
@Configuration
//@Import(CapRepositoriesConfiguration.class)
@ImportResource(
        value = {
                "classpath:com/coremedia/cap/common/uapi-services.xml",
                "classpath:com/coremedia/mimetype/mimetype-service.xml",
                "classpath:/com/coremedia/cap/transform/transform-services.xml",
        },
        reader = ResourceAwareXmlBeanDefinitionReader.class)
@Import(CapRestServiceConfiguration.class)
@EnableConfigurationProperties(StudioConfigurationProperties.class)
public class SvgStudioConfiguration {

  @Bean
  //@ConditionalOnProperty(name = "validator.enabled.cm-svg-validator.cm-svg", matchIfMissing = true)
  public CMSVGValidator cmsvgValidator(@NonNull CapConnection connection) {
    CMSVGValidator SVGvalidator = new CMSVGValidator(type(connection, "CMSVG"), true);
    SVGvalidator.setContentType("CMSVG");
    SVGvalidator.setValidatingSubtypes(true);
    SVGvalidator.setConnection(connection);
    return SVGvalidator;
  }

  @Bean
  //@ConditionalOnProperty(name = "validator.enabled.cm-imagemap-validator.cm-svg-picture", matchIfMissing = true)
  public CMSVGImageMapValidator cmsvgImageMapValidator(@NonNull CapConnection connection) {
    CMSVGImageMapValidator imageMapValidator = new CMSVGImageMapValidator(type(connection, "CMImageMap"), true);
    imageMapValidator.setContentType("CMImageMap");
    imageMapValidator.setValidatingSubtypes(true);
    imageMapValidator.setConnection(connection);
    return imageMapValidator;
  }

  @NonNull
  private static ContentType type(@NonNull CapConnection connection, @Nullable String typeStr) {
    return Objects.requireNonNull(typeStr != null ?
            connection.getContentRepository().getContentType(typeStr) :
            connection.getContentRepository().getDocumentContentType());
  }

}
