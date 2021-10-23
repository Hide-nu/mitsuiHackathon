import { formatMuiErrorMessage as _formatMuiErrorMessage } from "@mui/utils";
export default function withStyles() {
  throw new Error(process.env.NODE_ENV !== "production" ? `Material-UI: withStyles is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://material-ui.com/r/migration-v4/#material-ui-core-styles for more details.` : _formatMuiErrorMessage(15));
}