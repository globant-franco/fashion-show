/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled/macro'
import {Link as RouterLink} from 'react-router-dom'
import selectBackground from "../images/select-bg.png"
import gem from '../images/gem.png'
import goldCoin from '../images/money.png'

const Link = styled(RouterLink)({
  width: '100px',
  height: '30px',
  background: 'rgba(43, 15, 90, 0.9)',
  border: '1px solid #FFFFFF',
  borderRadius: '40px',
  fontFamily: 'Prosto One',
  fontSize: '12px',
  lineHeight: '29px',
  textAlign: 'center',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  textDecoration: 'none'
})

const OptionButton = styled.button({
  backgroundSize: 'cover',
  height: '4vh',
  width: '9vw',
  backgroundColor: 'transparent',
  border: 'none',
  margin: '0 auto',
  opacity: '0.5'
  },
  props => ({backgroundImage: `url(${props.backgroundImage})`})
)

const MainBackground = styled.main({
  backgroundImage: `url(${selectBackground})`,
  width: "100vw",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  }
)

const commonBar = {
  backgroundColor: '#BBB8DE',
  border: '2px solid #5A1F8B',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '30px'
}

const TotalPriceBar = styled.div({
  height: "6vh",
  width: "43%",
  position: "relative",
  top: "3vh",
  left: "3vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...commonBar
})

const PriceTag = styled.span({
  fontFamily: 'Prosto One',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '0.8rem',
  lineHeight: '15px',
  marginLeft: '1vw',
}, ({variant = 'primary'}) => priceTagVariants[variant])

const priceTagVariants = {
  primary: {
    color: '#5A1F8B',
  },
  secondary: {
    color: '#A79FE1'
  }
}

const SelectGarmentSidebar = styled.div({
  height: "30vh",
  width: "13vw",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  position: 'absolute',
  left: '80vw',
  ...commonBar
})

const PickGarmentContainer = styled.div({
  boxSizing: "border-box",
  width: "100%",
  height: "31.5vh",
  background: "rgba(70, 47, 153, 0.6)",
  border: "2px solid #A79FE1",
  borderRadius: "40px 40px 0 0",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: 'column'
})

const BodySection = styled.section({
  height: "62vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const BodyImg = styled.img({
  height: "inherit",
  width: "auto",
  marginTop: "2vh",
})

const Garment = styled.div({
  width:'16vw',
  height:'10vh',
  display: 'flex',
  justifyContent: 'center',
})

const Gem = styled.img({
  width: '4.8vw',
  height: 'auto'
})
Gem.defaultProps = { 'src': gem , 'alt': 'Gem' }

const GoldCoin = styled.img({
  width: '4.8vw',
  height: 'auto'
})
GoldCoin.defaultProps = { 'src': goldCoin, 'alt': 'Gold Coin' }


export {Link, OptionButton, MainBackground, TotalPriceBar, SelectGarmentSidebar, PickGarmentContainer, BodySection, Gem, GoldCoin, BodyImg, PriceTag, Garment }
