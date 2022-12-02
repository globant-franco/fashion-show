import { SelectGarmentSidebar, OptionButton } from './lib';
import styles from '../shared.module.css'
import womanHair from '../images/long-wavy-hair-variant.png'
import tShirt from '../images/t-shirt.png'
import pants from '../images/pants.png'
import highHeels from '../images/high-heels.png'
import manHair from '../images/short-male-hair-shape.png'
import sportShoes from '../images/sport-shoe.png'

const sidebarOptions = {
  'man': {
    'hair': manHair,
    't-shirt': tShirt,
    'pants': pants,
    'shoes': sportShoes
  },
  'woman': {
    'hair': womanHair,
    'top': tShirt,
    'pants': pants,
    'shoes': highHeels
  }
}

export default function GarmentSidebar({ variant, option, setOption }) {
  const activeGarment = (garment) => option === garment ? ` ${styles.activeGarment}` : ''

  return (
    <SelectGarmentSidebar>
      {Object.entries(sidebarOptions[variant]).map(([sidebarOption, image], index) => (
        <OptionButton
          key={index}
          backgroundImage={image}
          className={activeGarment(sidebarOption)}
          onClick={() => setOption(sidebarOption)}
        ></OptionButton>
      ))}
    </SelectGarmentSidebar>
  );
}

