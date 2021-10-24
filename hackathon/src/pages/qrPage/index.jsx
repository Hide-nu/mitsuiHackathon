import QrReader from "react-qr-reader";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/system";
import styled from "styled-components"
import { useHistory } from "react-router";
// スタイルの記述をする

const theme = createTheme({
});

const CustomQr = styled(QrReader)`
  width: '300px',
  height: '600px'
`

const QrPage = () => {
  const history = useHistory()
  const handleScan = (data) => {
    if (data) {
      history.push('/answer')
    }
  }
  const handleError = (err) => {
    console.error(err)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        width: '100%',
        height: '100%',
      }}
      >
        <CustomQr
          delay={300}
          onError={handleError}
          onScan={handleScan}
        />
      </Box>
    </ThemeProvider >
  )
}

export default QrPage;