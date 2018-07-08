const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://fifa:fifa2018@ds129821.mlab.com:29821/world-cup-comments', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 8000, () => {
    console.log('listening on 8000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('comments').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {comments: result})
  })
})

app.post('/comments', (req, res) => {
  db.collection('comments').save({name: req.body.name, msg: req.body.msg, team: req.body.team, thumbUp: 0 }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/comments', (req, res) => {
  db.collection('comments')
  .findOneAndUpdate({name: req.body.name, msg: req.body.msg, team: req.body.team}, {
    $set: {
      thumbUp:req.body.thumbUp + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.put('/thumbDown', (req, res) => {
  db.collection('comments')
  .findOneAndUpdate({name: req.body.name, msg: req.body.msg, team: req.body.team}, {
    $set: {
      thumbUp:req.body.thumbUp - 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/comments', (req, res) => {
  db.collection('comments').findOneAndDelete({name: req.body.name, msg: req.body.msg, team: req.body.team}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
