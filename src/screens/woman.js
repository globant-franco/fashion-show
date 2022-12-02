/** @jsxImportSource @emotion/react */
import React from "react"
import { MainBackground, TotalPriceBar, BodySection, Gem, GoldCoin, BodyImg, PriceTag } from "../components/lib"
import PickGarment from "../components/pick-garment"
import GarmentSidebar from "../components/garment-siderbar"
import { garmentObject} from "../utils/misc"

import womanBody from '../images/woman/body.png'
import blackHair from '../images/woman/black-hair.png'
import blondHair from '../images/woman/blond-hair.png'
import brownHair from '../images/woman/brown-hair.png'
import greyHair from '../images/woman/grey-hair.png'
import redHair from '../images/woman/red-hair.png'
import pants1 from '../images/woman/pants1.png'
import pants2 from '../images/woman/pants2.png'
import pants3 from '../images/woman/pants3.png'
import pants4 from '../images/woman/pants4.png'
import shoes1 from '../images/woman/shoes1.png'
import shoes2 from '../images/woman/shoes2.png'
import shoes3 from '../images/woman/shoes3.png'
import shoes4 from '../images/woman/shoes4.png'
import shoes5 from '../images/woman/shoes5.png'
import shoes6 from '../images/woman/shoes6.png'
import top1 from '../images/woman/top1.png'
import top2 from '../images/woman/top2.png'
import top3 from '../images/woman/top3.png'
import top4 from '../images/woman/top4.png'
import top5 from '../images/woman/top5.png'

const womanOptions = {
  'hair': [garmentObject(blackHair), garmentObject(blondHair), garmentObject(brownHair),garmentObject(greyHair), garmentObject(redHair) ],
  'pants': [garmentObject(pants1), garmentObject(pants2), garmentObject(pants3), garmentObject(pants4)],
  'shoes': [garmentObject(shoes1), garmentObject(shoes2), garmentObject(shoes3), garmentObject(shoes4), garmentObject(shoes5), garmentObject(shoes6)],
  'top': [garmentObject(top1), garmentObject(top2), garmentObject(top3), garmentObject(top4), garmentObject(top5)]
}

export default function Woman() {

  const [option, setOption] = React.useState('hair')
  const [garmentList, setGarmentList] = React.useState(womanOptions[option])

  React.useEffect(() => {
    setGarmentList(womanOptions[option])
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
        <BodyImg src={womanBody} alt="Woman Body" css={{paddingRight: '13vw'}} />
        <GarmentSidebar variant="woman" option={option} setOption={setOption} />
      </BodySection>
      {/*end woman body container */}
      <PickGarment garmentList={garmentList} option={option} variant="woman" />
    </MainBackground>
  );

}
