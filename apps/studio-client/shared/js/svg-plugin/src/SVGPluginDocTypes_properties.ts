interface SVGPluginDocTypes_properties {
  CMSVG_displayName: string;
  CMSVG_description: string;
  CMSVG_data_displayName: string;
  CMSVG_data_description: string;
  CMSVG_dataUrl_displayName: string,
  CMSVG_dataUrl_description: string,
  CMSVG_dataUrl_emptyText: string,
  CMSVG_inlineCode_displayName: string;
  CMSVG_inlineCode_description: string;
}

const SVGPluginDocTypes_properties: SVGPluginDocTypes_properties = {
  CMSVG_displayName: "Vector Graphic",
  CMSVG_description: "Editorial Vector Graphic",
  CMSVG_data_displayName: "Graphic",
  CMSVG_data_description: "Binary graphic data",
  CMSVG_dataUrl_displayName: "External Graphic Reference (URL)",
  CMSVG_dataUrl_description: "External reference for the graphic",
  CMSVG_dataUrl_emptyText: "Enter the external graphic reference here.",
  CMSVG_inlineCode_displayName: "Render vector graphic as inline code",
  CMSVG_inlineCode_description: "Renders the vector graphic as inline code",
};

export default SVGPluginDocTypes_properties;
