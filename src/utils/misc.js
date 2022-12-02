import { Gem, GoldCoin } from '../components/lib'

const gemRandomPrice = () => Math.floor(Math.random() * 1000)
const goldRandomPrice = () => Math.floor(Math.random() * 100) / 10 + ' K'

function garmentObject(image) {
  const index = Math.floor(Math.random() * 2)
  return {
    garment: image,
    price: index === 0 ? gemRandomPrice() : goldRandomPrice(),
    priceIcon: [Gem, GoldCoin][index]
  }
}

export {garmentObject}
