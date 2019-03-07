
const papa = require('papaparse')
const fs = require('fs')


const readCSV = ()=>{
  let string = fs.readFileSync('./womens-shoes-prices/Datafiniti_Womens_Shoes.csv', 'utf-8')
  let shoeJSONAll = papa.parse(string, {header:true})
  return shoeJSONAll
}

let shoes = readCSV().data


    let smallData = shoes.map(shoe => {
      return {
        brand: shoe.brand,
        colors: shoe.colors,
        image_url: shoe.imageURLs,
        name: shoe.name,
        msrp: shoe[`prices.amountMax`]
      }
    })
    smallData.forEach((shoe, i, arr)=>{
      let name = shoe.name
      let isDup = false
      arr.forEach((otherShoe, index)=>{
        if(otherShoe.name === name && index!==i){
          isDup = true
          arr.splice(index, 1)
        }
      })
    })



module.exports = smallData
