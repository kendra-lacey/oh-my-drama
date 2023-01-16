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
  res.render('dramas/new', {
    title: 'Add Drama'
  })
  .catch(err => {
    console.log("error")
    res.redirect('/')
  })
}



export {
  index,
  newDrama as new,
}