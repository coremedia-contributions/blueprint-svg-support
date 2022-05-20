import contentTypeLocalizationRegistry from "@coremedia/studio-client.cap-base-models/content/contentTypeLocalizationRegistry";
import SVGPluginDocTypes_properties from "./SVGPluginDocTypes_properties";
import typeIcon from "./icons/type-svg.svg";

contentTypeLocalizationRegistry.addLocalization("CMSVG", {
  displayName: SVGPluginDocTypes_properties.CMSVG_displayName,
  description: SVGPluginDocTypes_properties.CMSVG_description,
  svgIcon: typeIcon,
  properties: {
    data: {
      displayName: SVGPluginDocTypes_properties.CMSVG_data_displayName,
      description: SVGPluginDocTypes_properties.CMSVG_data_description,
    },
    dataUrl: {
      displayName: SVGPluginDocTypes_properties.CMSVG_dataUrl_displayName,
      description: SVGPluginDocTypes_properties.CMSVG_dataUrl_description,
      emptyText: SVGPluginDocTypes_properties.CMSVG_dataUrl_emptyText,
    },
    inlineCode: {
      displayName: SVGPluginDocTypes_properties.CMSVG_inlineCode_displayName,
      description: SVGPluginDocTypes_properties.CMSVG_inlineCode_description,
    },
  },
});
