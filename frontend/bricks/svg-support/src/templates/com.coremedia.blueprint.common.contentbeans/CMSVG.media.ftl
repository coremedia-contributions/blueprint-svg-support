<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMSVG" -->

<#assign classBox=cm.localParameters().classBox!""/>
<#assign classMedia=cm.localParameters().classMedia!""/>
<#assign background=cm.localParameters().background!false/>
<#assign metadata=cm.localParameters().metadata![]/>
<#assign metadataMedia=cm.localParameters().metadataMedia![]/>
<#assign additionalAttributes=cm.localParameters().additionalAttr!{}/>

<picture class="cm-svg-media ${classBox}"<@preview.metadata data=metadata + [self.content]/>>
  <@cm.include self=self params={
    "additionalClass": classMedia,
    "additionalAttributes": additionalAttributes
  }/>
</picture>
