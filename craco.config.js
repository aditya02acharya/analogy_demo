module.exports = {
  style: {
    postcss: {
      loaderOptions: (postcssLoaderOptions) => {
        postcssLoaderOptions.postcssOptions.plugins = [
          require("postcss-import"),
		  require("tailwindcss/nesting"),
          require("tailwindcss"),
		  require("postcss-custom-properties"),
          require("autoprefixer"),
        ];
        return postcssLoaderOptions;
      },
    },
  },
};
