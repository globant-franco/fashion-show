/** @jsxImportSource @emotion/react */
import React from "react"

import { MainBackground, TotalPriceBar, BodySection, Gem, GoldCoin, BodyImg, PriceTag } from "../components/lib"
import PickGarment from "../components/pick-garment"
import GarmentSidebar from "../components/garment-siderbar"
import { garmentObject } from "../utils/misc"

import manBody from '../images/man/body.png'
import hair1 from '../images/man/hair1.png'
import hair2 from '../images/man/hair2.png'
import hair3 from '../images/man/hair3.png'
import hair4 from '../images/man/hair4.png'
import pants1 from '../images/man/pants1.png'
import pants2 from '../images/man/pants2.png'
import pants3 from '../images/man/pants3.png'
import pants4 from '../images/man/pants4.png'
import pants5 from '../images/man/pants5.png'
import pants6 from '../images/man/pants6.png'
import shoes1 from '../images/man/shoes1.png'
import shoes2 from '../images/man/shoes2.png'
import shoes3 from '../images/man/shoes3.png'
import shoes4 from '../images/man/shoes4.png'
import shoes5 from '../images/man/shoes5.png'
import shoes6 from '../images/man/shoes6.png'
import tShirt1 from '../images/man/t-shirt1.png'
import tShirt2 from '../images/man/t-shirt2.png'
import tShirt3 from '../images/man/t-shirt3.png'
import tShirt4 from '../images/man/t-shirt4.png'
import tShirt5 from '../images/man/t-shirt5.png'
import tShirt6 from '../images/man/t-shirt5.png'

const manOptions = {
  'hair': [garmentObject(hair1), garmentObject(hair2), garmentObject(hair3), garmentObject(hair4)],
  'pants': [garmentObject(pants1), garmentObject(pants2), garmentObject(pants3), garmentObject(pants4), garmentObject(pants5), garmentObject(pants6)],
  'shoes': [garmentObject(shoes1), garmentObject(shoes2), garmentObject(shoes3), garmentObject(shoes4), garmentObject(shoes5), garmentObject(shoes6)],
  't-shirt': [garmentObject(tShirt1), garmentObject(tShirt2), garmentObject(tShirt3), garmentObject(tShirt4), garmentObject(tShirt5), garmentObject(tShirt6)]
}

export default function Man() {

  const [option, setOption] = React.useState('hair')
  const [garmentList, setGarmentList] = React.useState(manOptions[option])

  React.useEffect(() => {
    setGarmentList(manOptions[option])
  }, [option])

  return (
    <MainBackground>
      <TotalPriceBar>
        <Gem/>
        <PriceTag css={{ marginRight: "3vw" }}>3.0K</PriceTag>
        <GoldCoin/>
        <PriceTag>5.0K</PriceTag>
      </TotalPriceBar>
      <BodySection>
        <BodyImg src={manBody} alt="man Body"/>
        <GarmentSidebar variant="man" option={option} setOption={setOption} />
      </BodySection>
      {/*end man body container */}
      <PickGarment garmentList={garmentList} option={option} variant="man" />
    </MainBackground>
  );

}
