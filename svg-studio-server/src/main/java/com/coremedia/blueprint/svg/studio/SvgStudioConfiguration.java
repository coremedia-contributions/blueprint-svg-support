package com.coremedia.blueprint.svg.studio;

import com.coremedia.blueprint.svg.validators.CMSVGImageMapValidator;
import com.coremedia.blueprint.svg.validators.CMSVGValidator;
import com.coremedia.cap.common.CapConnection;
import com.coremedia.rest.cap.CapRestServiceConfiguration;
import edu.umd.cs.findbugs.annotations.NonNull;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(CapRestServiceConfiguration.class)
public class SvgStudioConfiguration {

  @Bean
  public CMSVGValidator cmsvgValidator(@NonNull CapConnection connection) {
    CMSVGValidator SVGvalidator = new CMSVGValidator();
    SVGvalidator.setContentType("CMSVG");
    SVGvalidator.setValidatingSubtypes(true);
    SVGvalidator.setConnection(connection);
    return SVGvalidator;
  }

  @Bean
  public CMSVGImageMapValidator cmsvgImageMapValidator(@NonNull CapConnection connection) {
    CMSVGImageMapValidator imageMapValidator = new CMSVGImageMapValidator();
    imageMapValidator.setContentType("CMImageMap");
    imageMapValidator.setValidatingSubtypes(true);
    imageMapValidator.setConnection(connection);
    return imageMapValidator;
  }

}
