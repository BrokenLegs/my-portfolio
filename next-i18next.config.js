const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: "sv",
        locales: ["en", "sv"],
    },
    react: {
        useSuspense: false,
        wait: true,
    },
    localePath: path.resolve("./locales"),
};