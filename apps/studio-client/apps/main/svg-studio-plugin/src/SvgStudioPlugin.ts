import Validators_properties
  from "@coremedia/studio-client.ext.errors-validation-components/validation/Validators_properties";
import RichTextArea from "@coremedia/studio-client.main.ckeditor4-components/RichTextArea";
import AddCKEditorPluginsPlugin
  from "@coremedia/studio-client.main.ckeditor4-components/plugins/AddCKEditorPluginsPlugin";
import CopyResourceBundleProperties
  from "@coremedia/studio-client.main.editor-components/configuration/CopyResourceBundleProperties";
import StudioPlugin from "@coremedia/studio-client.main.editor-components/configuration/StudioPlugin";
import AddTabbedDocumentFormsPlugin
  from "@coremedia/studio-client.main.editor-components/sdk/plugins/AddTabbedDocumentFormsPlugin";
import TabbedDocumentFormDispatcher
  from "@coremedia/studio-client.main.editor-components/sdk/premular/TabbedDocumentFormDispatcher";
import Config from "@jangaroo/runtime/Config";
import ConfigUtils from "@jangaroo/runtime/ConfigUtils";
import resourceManager from "@jangaroo/runtime/l10n/resourceManager";
import SVGPluginValidation_properties from "./SVGPluginValidation_properties";
import CMSVGForm from "./forms/CMSVGForm";

interface SvgStudioPluginConfig extends Config<StudioPlugin> {
}

class SvgStudioPlugin extends StudioPlugin {
  declare Config: SvgStudioPluginConfig;

  static readonly xtype: string = "com.coremedia.blueprint.svg.studio.config.svgStudioPlugin";

  constructor(config: Config<SvgStudioPlugin> = null) {
    super(ConfigUtils.apply(Config(SvgStudioPlugin, {

      rules: [

        Config(TabbedDocumentFormDispatcher, {
          plugins: [
            Config(AddTabbedDocumentFormsPlugin, {
              documentTabPanels: [
                Config(CMSVGForm, { itemId: "CMSVG" }),
              ],
            }),
          ],
        }),

        Config(RichTextArea, {
          plugins: [
            Config(AddCKEditorPluginsPlugin, { plugins: ["cmsvgsupport"] }),
          ],
        }),

      ],

      configuration: [
        new CopyResourceBundleProperties({
          destination: resourceManager.getResourceBundle(null, Validators_properties),
          source: resourceManager.getResourceBundle(null, SVGPluginValidation_properties),
        }),
      ],

    }), config));
  }
}

export default SvgStudioPlugin;
