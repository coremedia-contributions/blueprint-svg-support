import ResourceBundleUtil from "@jangaroo/runtime/l10n/ResourceBundleUtil";
import SVGPluginValidation_properties from "./SVGPluginValidation_properties";

/**
 * Overrides of ResourceBundle "SVGPluginValidation_properties" for locale "ja".
 * @see SVGPluginValidation_properties
 */
ResourceBundleUtil.override(SVGPluginValidation_properties, {
  Validator_data_and_datUrl_empty_text: "グラフィックまたは外部リファレンスを設定する必要があります。",
  Validator_inlineCode_with_empty_data_text: "インラインコード描画は、グラフィックデータが空でない場合のみ機能します。",
  Validator_cmsvg_not_supported_as_imagemap_picture_text: "ベクターグラフィックはイメージマップに使用できません。代わりにPictureを使用してください。",
});
