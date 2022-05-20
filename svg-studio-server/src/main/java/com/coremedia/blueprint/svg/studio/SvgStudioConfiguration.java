package com.coremedia.blueprint.svg.studio;

import com.coremedia.blueprint.svg.validators.CMSVGImageMapValidator;
import com.coremedia.blueprint.svg.validators.CMSVGValidator;
import com.coremedia.cap.common.CapConnection;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.undoc.common.spring.CapRepositoriesConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import edu.umd.cs.findbugs.annotations.NonNull;
import edu.umd.cs.findbugs.annotations.Nullable;
import org.springframework.context.annotation.Import;

import java.util.Objects;

@Configuration
@Import(CapRepositoriesConfiguration.class)
public class SvgStudioConfiguration {

  @Bean
  @ConditionalOnProperty(name = "validator.enabled.cm-svg-validator.cm-svg", matchIfMissing = true)
  public CMSVGValidator cmsvgValidator(@NonNull CapConnection connection) {
    return new CMSVGValidator(type(connection, "CMSVG"), true);
  }

  @Bean
  @ConditionalOnProperty(name = "validator.enabled.cm-imagemap-validator.cm-svg-picture", matchIfMissing = true)
  public CMSVGImageMapValidator cmsvgImageMapValidator(@NonNull CapConnection connection) {
    return new CMSVGImageMapValidator(type(connection, "CMImageMap"), true);
  }

  @NonNull
  private static ContentType type(@NonNull CapConnection connection, @Nullable String typeStr) {
    return Objects.requireNonNull(typeStr != null ?
            connection.getContentRepository().getContentType(typeStr) :
            connection.getContentRepository().getDocumentContentType());
  }

}
