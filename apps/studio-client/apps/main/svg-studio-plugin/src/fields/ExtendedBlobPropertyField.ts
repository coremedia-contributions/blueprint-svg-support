import Blob from "@coremedia/studio-client.client-core/data/Blob";
import ObjectUtils from "@coremedia/studio-client.client-core/util/ObjectUtils";
import BlobPropertyField from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/BlobPropertyField";
import BlobPropertyFieldBase
  from "@coremedia/studio-client.main.editor-components/sdk/premular/fields/BlobPropertyFieldBase";
import { as } from "@jangaroo/runtime";
import Config from "@jangaroo/runtime/Config";

interface ExtendedBlobPropertyFieldConfig extends Config<BlobPropertyField> {

}

class ExtendedBlobPropertyField extends BlobPropertyField {

  static readonly #NOT_DEFINED: Record<string, any> = {};

  declare Config: ExtendedBlobPropertyFieldConfig;

  constructor(config: Config<ExtendedBlobPropertyField> = null) {
    super(config);
  }

  override getActiveItem(config: Config<ExtendedBlobPropertyField>): string {
    let activeItem = super.getActiveItem(config);

    if (activeItem !== BlobPropertyFieldBase.IMAGE_CONTAINER_ITEM_ID && (this.showImageThumbnail !== false)) {
      // Additional check if blob is a SVG
      const content = config.bindTo.getValue();
      if (!content) {
        activeItem = undefined;
      }
      const value = ObjectUtils.getPropertyAt(content, "properties." + config.propertyName, ExtendedBlobPropertyField.#NOT_DEFINED);
      if (value === undefined) {
        activeItem = undefined;
      }
      if (value === ExtendedBlobPropertyField.#NOT_DEFINED) {
        activeItem = BlobPropertyFieldBase.EMPTY_CONTAINER_ITEM_ID;
      }

      const blob: Blob = as(value, Blob);
      if (!blob || blob.getSize() === undefined) {
        activeItem = BlobPropertyFieldBase.EMPTY_CONTAINER_ITEM_ID;
      }

      const contentType = blob.getContentType();
      if (contentType === "image/svg+xml") {
        activeItem = BlobPropertyFieldBase.IMAGE_CONTAINER_ITEM_ID;
      }
    }

    return activeItem;
  }

}

export default ExtendedBlobPropertyField;
