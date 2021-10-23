"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withTheme;

var _utils = require("@mui/utils");

function withTheme() {
  throw new Error(process.env.NODE_ENV !== "production" ? `Material-UI: withTheme is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://material-ui.com/r/migration-v4/#material-ui-core-styles for more details.` : (0, _utils.formatMuiErrorMessage)(16));
}