import express from 'express'
import child_process from 'child_process'
import fs from 'fs'
import bodyParser from 'body-parser'
import multer from 'multer'
import Promise from 'promise'

const upload = multer()
const router = express.Router()
const header = 'public class Help {\npublic static '
const footer = '}'

const fw = Promise.denodeify(fs.writeFile)
const exec = Promise.denodeify(child_process.exec)

router.use(bodyParser.json())
router.post('/:name', upload.array(), (req, res) => {
	let name = req.params.name
	let code = req.body.code
	fw('ans/Help.java', header + code + footer)
	.then(() => {return exec('javac ans/' + name + '.java ans/Help.java')})
	.then(() => {return exec('java -cp ans ' + name)})
	.then(out => {
		res.send({result: out})
	})
	.catch(e => {
		res.send({result: 0})
	})
})

export default router
