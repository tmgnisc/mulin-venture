const path = require('path')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT || '3000', 10)
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  app.set('view engine', 'ejs');
  app.set('views', path.resolve('./views/'));

  app.get('/welcome', (req, res) => {
    res.render('index', { title: 'Welcome', message: 'EJS view engine is configured.' })
  })

  app.all('*splat', (req, res) => handle(req, res))

  app.listen(port, () => {
    console.log(`> Server ready on http://localhost:${port}`)
  })
})
