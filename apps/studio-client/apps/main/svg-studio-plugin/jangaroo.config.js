const { jangarooConfig } = require("@jangaroo/core");

module.exports = jangarooConfig({
  type: "code",
  sencha: {
    name: "com.coremedia.blueprint__svg-studio-plugin",
    namespace: "com.coremedia.blueprint.svg.studio",
    css: [
      {
        path: "resources/css/svg-studio-plugin.css",
        bundle: false,
        includeInBundle: false,
      },
    ],
    studioPlugins: [
      {
        mainClass: "com.coremedia.blueprint.svg.studio.SvgStudioPlugin",
        name: "SVG Extension",
      },
    ],
  },
  command: { build: { ignoreTypeErrors: true } },
});
