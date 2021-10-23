import { formatMuiErrorMessage as _formatMuiErrorMessage } from "@mui/utils";
export default function withTheme() {
  throw new Error(process.env.NODE_ENV !== "production" ? "Material-UI: withTheme is not longer exported from @mui/material/styles.\nYou have to import it from @mui/styles.\nSee https://material-ui.com/r/migration-v4/#material-ui-core-styles for more details." : _formatMuiErrorMessage(16));
}