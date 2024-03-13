package com.coremedia.blueprint.svg.validators;

import com.coremedia.cap.common.Blob;
import com.coremedia.cap.content.Content;
import com.coremedia.rest.cap.validation.ContentTypeValidatorBase;
import com.coremedia.rest.validation.Issues;
import com.coremedia.rest.validation.Severity;
import org.apache.commons.lang3.StringUtils;

/**
 * Validator for CMSVG content.
 * <p>
 * Performs the following checks:
 * - Check if either data or dataUrl is set
 * - Check if data is set when the inlineCode equals true
 */
public class CMSVGValidator extends ContentTypeValidatorBase {

  @Override
  public void validate(Content content, Issues issues) {
    Blob data = content.getBlob("data");
    String dataUrl = content.getString("dataUrl");
    boolean asInlineCode = content.getBoolean("inlineCode");

    if (data == null && StringUtils.isBlank(dataUrl)) {
      issues.addIssue(Severity.ERROR, "data", "data_and_datUrl_empty");
      issues.addIssue(Severity.ERROR, "dataUrl", "data_and_datUrl_empty");
    }

    if (data == null && asInlineCode) {
      issues.addIssue(Severity.WARN, "inlineCode", "inlineCode_with_empty_data");
    }

  }
}
