const { jangarooConfig } = require("@jangaroo/core");

module.exports = jangarooConfig({
  type: "code",
  autoLoad: [
    "./src/packageConfig",
  ],
  sencha: {
    name: "com.coremedia.blueprint__svg-studio-plugin",
    namespace: "com.coremedia.blueprint.svg.studio",
    studioPlugins: [
      {
        mainClass: "com.coremedia.blueprint.svg.studio.SvgStudioPlugin",
        name: "SVG Extension",
      },
    ],
  },
  command: { build: { ignoreTypeErrors: true } },
});
