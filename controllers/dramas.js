import { Drama } from '../models/drama.js'

function index(req, res) {
  Drama.find({})
  .then(dramas => {
    res.render('dramas/index', {
      dramas: dramas,
      title: 'All Dramas'
    })
  })
  .catch(err => {
    console.log("error")
    res.redirect('/')
  })
}

function newDrama(req, res) {
  console.log('controller/newDrama')
  res.render('dramas/new', {
    title: 'Add a Drama Series'
  })
  .catch(err => {
    console.log("error")
    res.redirect('/')
  })
}

function create(req, res) {
  // Use drama model to create a drama using the form data in req.body
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Drama.create(req.body)
  .then(drama => {
    res.redirect('/dramas/new')
  })
  .catch(err => {
    console.log("error")
    res.redirect('/new')
  })
  }




export {
  index,
  newDrama as new,
  create,
}