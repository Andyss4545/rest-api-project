// Creating a Get Request with Express

const e = require('express')
let express = require('express') // 1st-step create express

let router = express.Router() // 2nd-step create a router from that express

// get the persons and create a request and response function
// QueryString => query property on the request object
// localhost:3000/person?name=thomas&age=20
router.get('/person', (req, res) => {
       if(req.query.name) {
           res.send(`You have requested a person', ${req.query.name}`)
       }else {
          res.send('You have requested a person')
       }
       
})

// get person object by their name using params property
// localhost:3000/person/thomas
router.get('/person/:name', (req, res) => {
       res.send(`You have requested a person', ${req.params.name}`)
})

module.exports = router // export the router, which will allow us to import in index.js

