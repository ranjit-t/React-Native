// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//   };
// };
const pak = require("../package.json");

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".tsx", ".ts", ".js", ".json"],
      },
    ],
    "react-native-reanimated/plugin", // PUT IT HERE
  ],
};
