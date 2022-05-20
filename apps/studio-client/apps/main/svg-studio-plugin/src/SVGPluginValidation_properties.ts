interface SVGPluginValidation_properties {
  Validator_data_and_datUrl_empty_text: string;
  Validator_inlineCode_with_empty_data_text: string;
  Validator_cmsvg_not_supported_as_imagemap_picture_text: string;
}

const SVGPluginValidation_properties: SVGPluginValidation_properties = {
  Validator_data_and_datUrl_empty_text: "Either a graphic must be uploaded or an external reference must be set.",
  Validator_inlineCode_with_empty_data_text: "Inline code rendering will only work if graphic data is not empty.",
  Validator_cmsvg_not_supported_as_imagemap_picture_text: "Vector Graphics cannot be used for image maps. Use a Picture instead.",
};

export default SVGPluginValidation_properties;
