package com.coremedia.blueprint.svg;

import com.coremedia.blueprint.svg.view.SvgInlineMarkupView;
import com.coremedia.objectserver.view.View;
import com.coremedia.springframework.customizer.Customize;
import com.coremedia.springframework.xml.ResourceAwareXmlBeanDefinitionReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ImportResource;

import java.util.HashMap;
import java.util.Map;

@ImportResource(value = {
        "classpath:/META-INF/coremedia/svg-contentbeans.xml",
        "classpath:/com/coremedia/cae/view-services.xml"
}, reader = ResourceAwareXmlBeanDefinitionReader.class)

public class SvgCaeConfiguration {

  @Bean
  public SvgInlineMarkupView svgMarkupView() {
    return new SvgInlineMarkupView();
  }

  @Bean
  @Customize(value = "programmedViews", mode = Customize.Mode.APPEND)
  public Map<String, View> svgProgrammedViews(SvgInlineMarkupView svgInlineMarkupView) {
    Map<String, View> viewMap = new HashMap();
    viewMap.put("com.coremedia.blueprint.common.contentbeans.CMSVG#inline", svgInlineMarkupView);
    return viewMap;
  }

}
