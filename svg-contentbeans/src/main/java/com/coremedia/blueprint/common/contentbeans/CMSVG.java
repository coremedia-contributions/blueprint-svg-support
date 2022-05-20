package com.coremedia.blueprint.common.contentbeans;

/**
 * <p>
 * CMSVG beans provide support for scalable vector images (SVGs).
 * </p>
 * <p>
 * Represents document type {@link #NAME CMSVG}.
 * </p>
 *
 * @cm.template.api
 */
public interface CMSVG extends CMPicture {

  /**
   * {@link com.coremedia.cap.content.ContentType#getName() Name of the ContentType} 'CMSVG'.
   */
  String NAME = "CMSVG";

  /**
   * Name of the document property 'inlineCode'.
   */
  String INLINE_CODE = "inlineCode";

  /**
   * Returns the value of the <code>inlineCode</code> property.
   * If set to <code>true</code>, the SVG shall be rendered as inline code.
   * Only applies to {@link CMSVG}s with a data blob.
   *
   * @return <code>true</code> to render the SVG data as inline code, <code>false</code> otherwise.
   */
  boolean asInlineCode();

  /**
   * Returns the value of the document property {@link #MASTER}.
   *
   * @return a {@link CMSVG} object
   */
  @Override
  CMSVG getMaster();

}
