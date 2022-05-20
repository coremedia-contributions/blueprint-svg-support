import ResourceBundleUtil from "@jangaroo/runtime/l10n/ResourceBundleUtil";
import SVGPluginValidation_properties from "./SVGPluginValidation_properties";

/**
 * Overrides of ResourceBundle "SVGPluginValidation_properties" for locale "de".
 * @see SVGPluginValidation_properties
 */
ResourceBundleUtil.override(SVGPluginValidation_properties, {
  Validator_data_and_datUrl_empty_text: "Es muss entweder eine Grafik hochgeladen oder externe Referenz gesetzt werden.",
  Validator_inlineCode_with_empty_data_text: "Das Rendering von Inline-Code funktioniert nur, wenn eine Grafik hochgeladen wird.",
  Validator_cmsvg_not_supported_as_imagemap_picture_text: "Vektorgrafiken können nicht für Image Maps verwendet werden. Verwenden Sie stattdessen ein Bild.",
});
