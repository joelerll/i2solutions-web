var dbURL = ''
if (process.env.NODE_ENV === 'production') {
  dbURL = process.env.MONGO_DB_URL
} else {
  dbURL = process.env.MONGO_DB_LOCAL
}
var autoIncrement = require('mongoose-auto-increment')
var mongoose = require('mongoose')
mongoose.connect(dbURL, { useMongoClient: true })

var db = mongoose.connection
autoIncrement.initialize(mongoose)
db.on('error', function (err) {
  console.error(`error ${err}`)
})
db.once('open', function () {
  if (process.env.NODE_ENV !== 'testing') {
    console.log('conectada la base de datos')
  }
})
