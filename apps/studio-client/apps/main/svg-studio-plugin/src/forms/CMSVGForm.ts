import BlueprintTabs_properties from "@coremedia-blueprint/studio-client.main.blueprint-forms/BlueprintTabs_properties";
import CustomLabels_properties from "@coremedia-blueprint/studio-client.main.blueprint-forms/CustomLabels_properties";
import CategoryDocumentForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/CategoryDocumentForm";
import CollapsibleStringPropertyForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/CollapsibleStringPropertyForm";
import DetailsDocumentForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/DetailsDocumentForm";
import MetaDataWithoutSearchableForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/MetaDataWithoutSearchableForm";
import MultiLanguageDocumentForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/MultiLanguageDocumentForm";
import SEOForm from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/SEOForm";
import ValidityDocumentForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/ValidityDocumentForm";
import ViewTypeSelectorForm
  from "@coremedia-blueprint/studio-client.main.blueprint-forms/forms/containers/ViewTypeSelectorForm";
import SVGPluginDocTypes_properties from "@coremedia-blueprint/studio-client.svg-plugin/SVGPluginDocTypes_properties";
import DocumentForm from "@coremedia/studio-client.main.editor-components/sdk/premular/DocumentForm";
import DocumentTabPanel from "@coremedia/studio-client.main.editor-components/sdk/premular/DocumentTabPanel";
import PropertyFieldGroup from "@coremedia/studio-client.main.editor-components/sdk/premular/PropertyFieldGroup";
import BooleanPropertyField
  from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/BooleanPropertyField";
import StringPropertyField
  from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/StringPropertyField";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import ExtendedBlobPropertyField from "../fields/ExtendedBlobPropertyField";

interface CMSVGFormConfig extends Config<DocumentTabPanel> {

}

class CMSVGForm extends DocumentTabPanel {

  declare Config: CMSVGFormConfig;

  static readonly COPYRIGHT_FORM_ITEM_ID: string = "copyrightFormItemId";

  static readonly EXTRAS_TAB_ITEM_ID: string = "extrasTab";

  constructor(config: Config<CMSVGForm> = null) {
    super(ConfigUtils.apply(Config(CMSVGForm, {
      items: [
        Config(DocumentForm, {
          title: BlueprintTabs_properties.Tab_content_title,
          itemId: "contentTab",
          items: [
            Config(PropertyFieldGroup, {
              itemId: "graphic",
              title: SVGPluginDocTypes_properties.CMSVG_displayName,
              items: [
                Config(ExtendedBlobPropertyField, {
                  itemId: "extendedDataField",
                  propertyName: "data",
                  hideLabel: true,
                  fieldLabel: "",
                }),
                Config(BooleanPropertyField, {
                  itemId: "inlineCode",
                  propertyName: "inlineCode",
                }),
              ],
            }),
            Config(CollapsibleStringPropertyForm, {
              propertyName: "dataUrl",
              collapsed: true,
            }),
            Config(DetailsDocumentForm, { itemId: "detailsForm" }),
            Config(ViewTypeSelectorForm),
            Config(ValidityDocumentForm),
          ],
        }),
        Config(DocumentForm, {
          title: BlueprintTabs_properties.Tab_extras_title,
          itemId: CMSVGForm.EXTRAS_TAB_ITEM_ID,
          items: [
            Config(CategoryDocumentForm),
            Config(PropertyFieldGroup, {
              collapsed: false,
              itemId: CMSVGForm.COPYRIGHT_FORM_ITEM_ID,
              title: CustomLabels_properties.PropertyGroup_Description_label,
              forceReadOnlyValueExpression: config.forceReadOnlyValueExpression,
              items: [
                Config(StringPropertyField, {
                  propertyName: "alt",
                  itemId: "alt",
                }),
                Config(StringPropertyField, {
                  propertyName: "copyright",
                  itemId: "copyright",
                }),
              ],
            }),
            Config(SEOForm, { bindTo: config.bindTo }),
          ],
        }),
        Config(MultiLanguageDocumentForm),
        Config(MetaDataWithoutSearchableForm),
      ],
    }), config));
  }

}

export default CMSVGForm;
