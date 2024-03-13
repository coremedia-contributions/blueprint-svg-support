package com.coremedia.blueprint.svg.validators;

import com.coremedia.cap.content.Content;
import com.coremedia.rest.cap.validation.ContentTypeValidatorBase;
import com.coremedia.rest.validation.Issues;
import com.coremedia.rest.validation.Severity;

/**
 * Validator form CMImageMaps.
 * <p>
 * The validator checks if the picture property of the image map is set to an CMSVG since this is not supported for now.
 */
public class CMSVGImageMapValidator extends ContentTypeValidatorBase {

  @Override
  public void validate(Content content, Issues issues) {
    Content linkedPicture = content.getLink("pictures");

    if (linkedPicture != null && linkedPicture.getType().isSubtypeOf("CMSVG")) {
      issues.addIssue(Severity.ERROR, "pictures", "cmsvg_not_supported_as_imagemap_picture");
    }

  }
}
