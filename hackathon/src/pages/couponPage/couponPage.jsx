import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import Coupon from '../../components/coupon'
import { exampleImageUrl1, exampleImageUrl2, exampleImageUrl3 } from '../../constants';
import { getPoint } from '../../utils/getPoint';
import { useAuthContext } from '../../context/AuthContext';
import { consumptionPoint } from '../../utils/consumptionPoint';

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

const CouponPage = () => {
  const GradientText = withStyles({
    root: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 700,
      background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography);

  const { user } = useAuthContext();
  const [point, setPoint] = useState()

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography sx={{
        fontSize: 24, color: '#1f2037', fontWeight: 600, marginBottom: 2,
      }}>
        クーポン一覧
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant='body1' sx={{
          fontSize: 14, color: '#787887', fontWeight: 600, marginBottom: 2, marginRight: 2,
        }}>
          保持ポイント:
        </Typography>
        <GradientText variant='body1'>
          {point}pt
        </GradientText>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Coupon imageUrl={exampleImageUrl1} pt={3} havingPoint={point} consumptionPoint={handleConsumptionPoint} />
        <Coupon imageUrl={exampleImageUrl2} pt={7} havingPoint={point} consumptionPoint={handleConsumptionPoint} />
        <Coupon imageUrl={exampleImageUrl3} pt={5} havingPoint={point} consumptionPoint={handleConsumptionPoint} />
      </Box>
    </ThemeProvider >
  );
}

export default CouponPage;
