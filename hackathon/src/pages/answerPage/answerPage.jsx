import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { getPoint } from '../../utils/getPoint';
import { useAuthContext } from '../../context/AuthContext';
import { consumptionPoint } from '../../utils/consumptionPoint';
import { Link } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'span',
        },
      },
    },
  },
});

const AnswerPage = () => {
  const question = '星条旗の星の数はいくつですか？';
  const answer = '51';

  const { user } = useAuthContext();
  const [point, setPoint] = useState()
  const [isAnswered, setIsAnswered] = useState()
  const [text, setText] = useState('')

  useEffect(() => {
    async function getPt() {
      const pt = await getPoint(user.uid)
      setPoint(pt)
    }
    getPt();
  }, [user])

  const handleConsumptionPoint = async (pt) => {
    await consumptionPoint(user.uid, point, pt)
    const newPoint = await getPoint(user.uid)
    setPoint(newPoint)
  }


  const handleSubmit = async (event) => {
    console.log('aaaaaaaa')

    if (text === answer) {
      handleConsumptionPoint(5)
      setIsAnswered(true);
    } else {

      setIsAnswered(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant='h1' sx={{
        fontSize: 24, color: '#1f2037', fontWeight: 600, marginBottom: 2,
      }}>
        問題
      </Typography>
      <Typography sx={{
        fontSize: 16, color: '#1f2037', fontWeight: 600, marginBottom: 2,
      }}>
        {question}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          onChange={(event) => setText(event.target.value)}
          margin="normal"
          required
          fullWidth
          id="answer"
          label="メールアドレス"
          name="answer"
          autoComplete="answer"
          autoFocus
        />
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
      >
        回答
      </Button>
      {isAnswered === undefined ? undefined : isAnswered ? <Typography sx={{
        fontSize: 32, color: '#369463', fontWeight: 600, marginBottom: 2,
      }}>
        正解です
      </Typography> : <Typography sx={{
        fontSize: 32, color: '#943638', fontWeight: 600, marginBottom: 2,
      }}>
        不正解です
      </Typography>}
      <Link to={{ pathname: '/', }} style={{
        textDecoration: 'none',
      }}>
        ホームに戻る
      </Link>
    </ThemeProvider >
  );
}

export default AnswerPage;
