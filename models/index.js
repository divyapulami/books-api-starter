const bookModel = require('./Book')
const reviewModel = require('./Review')

bookModel.hasMany(reviewModel)
reviewModel.belongsTo(bookModel)

module.exports = { bookModel, reviewModel }