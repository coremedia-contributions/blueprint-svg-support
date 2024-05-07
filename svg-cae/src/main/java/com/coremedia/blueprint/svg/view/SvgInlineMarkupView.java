package com.coremedia.blueprint.svg.view;

import com.coremedia.blueprint.common.contentbeans.CMSVG;
import com.coremedia.cap.common.Blob;
import com.coremedia.objectserver.view.TextView;
import edu.umd.cs.findbugs.annotations.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.charset.StandardCharsets;

/**
 * Programmed view that renders a given {@link CMSVG} as inline SVG code.
 *
 * Note that this programmed view can only work on {@link CMSVG} with a valid SVG blob uploaded to the "data" property.
 * The view will not render anything for {@link CMSVG} with an external "dataUrl".
 */
public class SvgInlineMarkupView implements TextView<CMSVG> {

  private static final Logger LOG = LoggerFactory.getLogger(SvgInlineMarkupView.class);

  @Override
  public void render(CMSVG bean, String view, Writer out,
                     @NonNull HttpServletRequest request, @NonNull HttpServletResponse response) {
    Blob data = bean.getData();
    if (data != null) {
      try {
        String svg = new String(data.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
        out.write(svg);
        out.append("\n");
        out.flush();
      } catch (IOException e) {
        LOG.error("Unable to write SVG markup to response.", e);
      }
    }
  }

}
