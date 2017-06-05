import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import multer from 'multer'
import mongoose from 'mongoose'
import ans from './routes/Ans.js'

const app = express()
const upload = multer()
const db = mongoose.connection
const Schema = mongoose.Schema
const probSchema = new Schema({
	name: String,
	des: String,
	tem: String,
	recs: [ {time: Number, nick: String} ]
})
const Prob = mongoose.model('prob', probSchema)
const port = 80

db.on('error', console.error)
db.once('open', () => {
	console.log('connected to mongodb')
})
mongoose.connect('mongodb://localhost/codewar')

app.use('/', express.static(path.resolve(__dirname, '../public')))
app.use(bodyParser.json())

app.get(/bundle.js/, (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/bundle.js'))
})
app.get(/css_browser_selector.js/, (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/css_browser_selector.js'))
})
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
app.get('/prob/:x', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
app.get('/admin', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
app.get('/record/:x', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

app.get('/probs', (req, res) => {
	Prob.find({}, 'name recs', (err, probs) => {
		if (err) {
			console.error(err)
			res.send([])
		} else
			res.send(probs)
	})
})
app.get('/probinfo/:id', (req, res) => {
	Prob.findOne({name: req.params.id}, 'des tem', (err, info) => {
		if (err) {
			console.error(err)
			res.send({ des: '', tem: '' })
		} else
			res.send(info)
	})
})
app.post('/new', upload.array(), (req, res) => {
	Prob.update({name: req.body.name}, {$set: req.body}, {upsert: true}, (err, row) => {
		if (err) console.error(err)
		res.send('')
	})
})
app.post('/rec/:id', upload.array(), (req, res) => {
	Prob.findOne({name: req.params.id}, 'recs', (err, data) => {
		if (err) {
			console.error(err)
			res.send('')
		} else {
			let recs = data.recs
			recs.push(req.body)
			recs.sort((a, b) => {return a.time - b.time})
			Prob.update({name: req.params.id}, {$set: {recs: recs}}, (err, row) => {
				if (err) console.error(err)
				res.send('')
			})
		}
	})
})
app.get('/rec/:id', (req, res) => {
	Prob.findOne({name: req.params.id}, 'recs', (err, data) => {
		if (err) {
			console.error(err)
			res.send([])
		} else
			res.send(data.recs)
	})
})
app.use('/ans', ans)

const server = app.listen(port, () => {
	console.log('Express listening on port', port);
})
