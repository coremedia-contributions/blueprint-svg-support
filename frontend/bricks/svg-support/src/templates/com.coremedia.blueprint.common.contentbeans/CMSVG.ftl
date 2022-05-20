<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMSVG" -->

<#--
    Template Description:

    Renders the SVG either as inline code or as an img tag with a link to the SVG data or dataUrl.
-->

<#import "*/node_modules/@coremedia/brick-utils/src/freemarkerLibs/utils.ftl" as utils />

<#assign blockClass=cm.localParameters().blockClass!"cm-svg"/>
<#assign additionalClass=cm.localParameters().additionalClass!""/>
<#assign additionalAttributes=cm.localParameters().additionalAttributes!{}/>
<#assign renderInline=self.asInlineCode() && self.data?has_content />

<!-- asInlineCode(): ${self.asInlineCode()?c} -->

<#if renderInline>
  <#-- render as inline SVG code -->
  <@cm.include self=self view="inline"/>
<#else>
  <#-- render ad img tag -->
  <#if self.data?has_content>
      <#assign link = cm.getLink(self.data) />
  <#elseif self.dataUrl?has_content>
      <#assign link = self.dataUrl />
  </#if>

  <#if self.title?has_content>
      <#assign additionalAttributes += {"title": self.title} />
  </#if>

  <#if link?has_content>
    <img src="${link}"
         alt="${self.alt!""}"
         class="${blockClass} ${additionalClass}"
            <@utils.renderAttr attr=additionalAttributes ignore=["src", "alt", "class"]/>
            <@preview.metadata self.content />>
  </#if>
</#if>
