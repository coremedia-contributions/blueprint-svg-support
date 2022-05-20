import ResourceBundleUtil from "@jangaroo/runtime/l10n/ResourceBundleUtil";
import SVGPluginDocTypes_properties from "./SVGPluginDocTypes_properties";

/**
 * Overrides of ResourceBundle "SVGPluginDocTypes_properties" for locale "de".
 * @see SVGPluginDocTypes_properties
 */
ResourceBundleUtil.override(SVGPluginDocTypes_properties, {
  CMSVG_displayName: "Vektorgrafik",
  CMSVG_data_displayName: "Grafik",
  CMSVG_data_description: "Binäre Grafikdaten",
  CMSVG_dataUrl_displayName: "Externer Grafikverweis (URL)",
  CMSVG_dataUrl_description: "Externe Referenz für die Grafik",
  CMSVG_dataUrl_emptyText: "Geben Sie hier die externe Grafikreferenz ein.",
  CMSVG_inlineCode_displayName: "Vektorgrafik als Inline-Code rendern",
  CMSVG_inlineCode_description: "Rendert die Vektorgrafik als Inline-Code",
});
