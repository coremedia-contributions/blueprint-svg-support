package com.coremedia.blueprint.svg.contentbeans;

import com.coremedia.blueprint.cae.contentbeans.CMPictureImpl;
import com.coremedia.blueprint.common.contentbeans.CMSVG;

/**
 * Generated base class for immutable beans of document type CMSVG.
 * Should not be changed.
 */
public abstract class CMSVGBase extends CMPictureImpl implements CMSVG {

  /**
   * Returns the value of the document property {@link #INLINE_CODE}.
   *
   * @return the value of the document property {@link #INLINE_CODE}
   */
  @Override
  public boolean asInlineCode() {
    return getContent().getBoolean(INLINE_CODE);
  }

  /**
   * Returns the value of the document property {@link #MASTER}.
   *
   * @return the master {@link CMSVG} if set, <code>null</code> otherwise.
   */
  @Override
  public CMSVG getMaster() {
    return (CMSVG) super.getMaster();
  }

}
