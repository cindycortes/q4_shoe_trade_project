const moment = require('moment')

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

function makeTransactions() {
    let transData = []
    let shoeSize = [6, 7, 8, 9, 10, 11, 12]
    let cost = [15, 25, 35, 45, 55, 65, 75, 85, 95]
    let sellingPrice = [20, 30, 40, 50, 60, 70, 80, 90, 100]
    let userID = Math.floor(Math.random() * 100000)
    let shoeID = Math.ceil(Math.random() * 13000)
    let randomBoolean = Math.random() >= 0.5
    let date = randomDate(new Date(2018, 0, 1), new Date())

    transData.push({
        user_id: userID,
        shoe_id: shoeID,
        shoe_size: shoeSize[Math.floor(Math.random() * 6)],
        isSelling: randomBoolean,
        price: sellingPrice[Math.floor(Math.random() * 9)],
        purchased_price: cost[Math.floor(Math.random() * 9)],
        purchased_date: parseInt(moment(date).format('YYYYMMDD'))
    })
    return transData
}
 
module.exports = makeTransactions