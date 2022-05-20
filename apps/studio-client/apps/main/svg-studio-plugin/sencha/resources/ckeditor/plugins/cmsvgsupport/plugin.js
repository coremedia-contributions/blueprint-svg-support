CKEDITOR.plugins.add("cmsvgsupport",
  {
    onLoad: function() {
      CKEDITOR.addCss(
        "img[xlink\\:show=\"embed\"] {" +
          "max-height: 64px" +
        "}",
      );
    },
    requires: [],
  });
