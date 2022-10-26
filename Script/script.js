let pricePerOnekg = document.querySelector('#massPrice')
let yourTotalPrice = document.querySelector('#yourPrice')
let finalWeightAmount = document.querySelector('#finalGmAmount')



const initialWeight = () => {
  finalWeightAmount.innerText = 1000 + ' gm'
}
const calculateActualWeight = () => {
  let ppokgintoNumbers = Number(pricePerOnekg.value)
  let ytpintoNumbers = Number(yourTotalPrice.value)
  let line1 = 1000 / ppokgintoNumbers
  let line2 = ytpintoNumbers * line1
  finalWeightAmount.innerText = `${line2.toFixed(2)}gm`
}

