var express = require('express')
var app = express()
var port = process.env.PORT || 8080

// Containers
var pages = {}

// Functions to fill containers
function createPage (page) {
  var id = Object.keys(pages).length
  pages[id] = page
}

// Create Game Specs
createPage({
  name: 'HOME',
  url: '/',
  title: 'HOME',
  picture: '/images/welcome.jpg',
  buyLink: 'https://www.amazon.com/'
})

createPage({
  name: 'page1',
  url: '/page1',
  title: 'Nioh',
  picture: '/images/nioh.jpg',
  buyLink: 'https://www.amazon.com/Nioh-PlayStation-4/dp/B01MRKF099/ref=sr_1_1?s=videogames&ie=UTF8&qid=1491940366&sr=1-1&keywords=nioh&th=1',
  platform: 'PLATFORM: PS4',
  release: 'RELEASE: Out Now'
})

createPage({
  name: 'page2',
  url: '/page2',
  title: 'Persona 5',
  picture: '/images/Persona5.jpg',
  buyLink: 'https://www.amazon.com/Persona-5-Standard-PlayStation-4/dp/B01GKHJP98/ref=sr_1_2?s=videogames&ie=UTF8&qid=1491943977&sr=1-2&keywords=persona+5',
  platform: 'PLATFORM: PS4',
  release: 'RELEASE: Out Now'
})

createPage({
  name: 'page3',
  url: '/page3',
  title: 'Fire Emblem Echos',
  picture: '/images/FEE.jpg',
  buyLink: 'https://www.amazon.com/Fire-Emblem-Echoes-Valentia-Nintendo-Standard/dp/B01N12ES3A/ref=sr_1_2?s=videogames&ie=UTF8&qid=1491940878&sr=1-2&keywords=fire%2Bemblem%2Bechoes%2Bshadows%2Bof%2Bvalentia&th=1',
  platform: 'PLATFORM: Nintendo 3DS',
  release: 'RELEASE: May 19th, 2017'
})

// Set ejs as view engine
app.set('view engine', 'ejs')

app.use(express.static('public'))

// Creat Pages
Object.keys(pages).forEach(function (id) {
  app.get(pages[id].url, function (request, response) {
    response.render('pages/page.ejs', {
      page: pages[id],
      navs: pages
    })
  })
})

app.listen(port)
