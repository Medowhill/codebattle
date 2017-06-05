import express from 'express'
import child_process from 'child_process'
import fs from 'fs'
import bodyParser from 'body-parser'
import multer from 'multer'
import Promise from 'promise'

const upload = multer()
const router = express.Router()
const header = 'public class Help {\npublic '
const footer = '}'

const fw = Promise.denodeify(fs.writeFile)
const exec = Promise.denodeify(child_process.exec)

router.use(bodyParser.json())
router.post('/:name', upload.array(), (req, res) => {
	let name = req.params.name
	let code = req.body.code
        let time = (new Date).getTime().toString()
        exec('mkdir ans/' + time)
        .then(() => {return exec('cp ans/' + name + '.java ans/' + time + '/' + name + '.java')})
	.then(() => {return fw('ans/' + time + '/Help.java', header + code + footer)})
	.then(() => {return exec('javac ans/' + time + '/' + name + '.java ans/' + time + '/Help.java')})
	.then(() => {return exec('java -cp ans/' + time + ' ' + name)})
	.then(out => {
		res.send({result: out})
	})
	.catch(e => {
		res.send({result: 0})
	})
})

export default router
