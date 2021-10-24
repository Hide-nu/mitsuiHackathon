import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Coupon = ({ imageUrl, pt, consumptionPoint, havingPoint }) => {
  const GradientButton = styled(Button)({
    background: 'linear-gradient(45deg, #363894 30%, #4194db 90%)',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 3px 5px 2px rgba(54, 56, 148, .3)',
    color: 'white',
    fontWeight: 600,
    padding: '4px 12px',
    marginTop: 12,
    marginBottom: 12
  });

  const [isConsumption, setConsumption] = useState(false)

  const onClick = () => {
    consumptionPoint(pt)
    setConsumption(true);
  }

  return <Box
    sx={{
      marginRight: 'auto',
      marginLeft: 'auto',
      position: 'relative',
      marginBottom: 4,
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      borderRadius: 4,
      width: '95%',
      boxShadow: '0 3px 5px 2px rgba(82, 82, 96, .3)',
      overflow: 'hidden'
    }}
  >
    <img
      src={imageUrl}
      alt='クーポン画像'
      style={{ objectFit: 'fill', width: '100%', borderRadius: 4, }}
    />
    <Typography sx={{ fontSize: 20, color: '#1f2037', fontWeight: 600 }}>
      クーポン名
    </Typography>
    <Typography sx={{ fontSize: 14, color: '#525260', fontWeight: 600, paddingRight: 4, paddingLeft: 4, textAlign: 'center' }}>
      クーポン説明
    </Typography>
    {isConsumption ? <Typography sx={{ fontSize: 20, color: '#1f2037', fontWeight: 600 }}>
      有効期限: 2021/10/25
    </Typography> : havingPoint >= pt ? <GradientButton onClick={() => onClick(pt)}>
      {pt}ptで交換する
    </GradientButton> : <Button disabled >
      {pt}ptで交換する
    </Button>}
  </Box>
}

export default Coupon;