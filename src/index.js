let express = require('express')

// create express app
let app = express()

let personRoutes = require('./Routes/person') // import the person.js routes

app.use((req, res, next) => {
      console.log(`${new Date().toDateString()} => ${req.originalUrl} `)
      next()
})
app.use(personRoutes) // tell express to register person route
// the way you can serve static content is via a function express.stattic
// static is an example of middleware
 app.use(express.static('public')) // public is the folder we want to server content from

// we want express to listen to a port 
 const PORT = process.env.PORT || 3000
//  to start server on the port
app.listen(PORT, () => console.log(`server has started on ${PORT}`)) 
