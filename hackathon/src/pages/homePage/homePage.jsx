import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { withStyles } from '@mui/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { setPoint } from '../../utils/setPoint';
import { useAuthContext } from '../../context/AuthContext';

const theme = createTheme({
});

const HomePage = () => {
  const GradientText = withStyles({
    root: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 700,
      background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography);

  const GradientButton = styled(Button)({
    background: 'linear-gradient(45deg, #363894 30%, #4194db 90%)',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 3px 5px 2px rgba(54, 56, 148, .3)',
    color: 'white',
    width: '100%',
    fontWeight: 600,
    padding: '12px 20px',
  });

  const { user } = useAuthContext();


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          paddingTop: 8,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#f4f4f5',
        }}
      >
        <Typography sx={{ fontSize: 24, color: '#1f2037', fontWeight: 600 }}>
          Shooters
        </Typography>
        <Typography sx={{ fontSize: 20, color: '#1f2037', fontWeight: 600, marginBottom: 1, }}>
          －シューターズ－
        </Typography>
        <Typography sx={{ fontSize: 16, color: '#525260', fontWeight: 600, marginBottom: 2, paddingRight: 4, paddingLeft: 4, textAlign: 'center' }}>
          写真を撮ろうとしている人の写真を撮って、ポイントを稼ごう！
        </Typography>
        <Typography sx={{ fontSize: 16, color: '#525260', fontWeight: 600, alignSelf: 'flex-start', paddingRight: 4, paddingLeft: 4 }}>
          遊び方
        </Typography>
        <Typography sx={{ fontSize: 14, color: '#525260', fontWeight: 600, alignSelf: 'flex-start', paddingRight: 4, paddingLeft: 4, textAlign: 'left' }}>
          1, アプリ内でカメラを起動します。
        </Typography>
        <Typography sx={{ fontSize: 14, color: '#525260', fontWeight: 600, alignSelf: 'flex-start', paddingRight: 4, paddingLeft: 4, textAlign: 'left' }}>
          2, 画面に表示される的に合わせて、写真を撮ろうとしている人をshoot（シュート）します。
        </Typography>
        <Typography sx={{ fontSize: 14, color: '#525260', fontWeight: 600, alignSelf: 'flex-start', paddingRight: 4, paddingLeft: 4, marginBottom: 4, textAlign: 'left' }}>
          3, 当たるとポイントゲット！沢山ポイントをためると素敵な景品と交換できます。
        </Typography>
        <Box
          sx={{
            paddingTop: 6,
            paddingBottom: 6,
            marginBottom: 4,
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            borderRadius: 4,
            width: '80%',
            boxShadow: '0 3px 5px 2px rgba(82, 82, 96, .3)',
          }}
        >
          <Typography sx={{ fontSize: 14, color: '#525260', fontWeight: 600, textAlign: 'center', alignSelf: 'center', marginRight: 'auto', marginLeft: 'auto' }}>
            貯まったポイント
          </Typography>
          <GradientText>
            16pt
          </GradientText>
        </Box>
        <Box sx={{ marginTop: 'auto', marginBottom: '80px' }}>
          <GradientButton onClick={() => setPoint(user.uid, 5)} fullWidth endIcon={<PhotoCamera />}>
            カメラを起動してシュート
          </GradientButton>
        </Box>
      </Box>
    </ThemeProvider >
  );
}

export default HomePage;
