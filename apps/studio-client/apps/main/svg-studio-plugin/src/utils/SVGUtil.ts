import Content from "@coremedia/studio-client.cap-rest-client/content/Content";
import Struct from "@coremedia/studio-client.cap-rest-client/struct/Struct";
import editorContext from "@coremedia/studio-client.main.editor-components/sdk/editorContext";

class SVGUtil {

  /**
   * Registers a content initializer for the CMSVG content type.
   */
  static registerInitializer(): void {
    editorContext._.registerContentInitializer("CMSVG", SVGUtil.#initSVG);
  }

  static #initSVG(content: Content): void {
    const localSettings: Struct = content.getProperties().get("localSettings");
    // make sure cropping is disabled on SVGs
    localSettings.getType().addBooleanProperty("disableCropping", true);
  }

}

export default SVGUtil;
