import { Star } from '../models/star.js'

function newStar(req, res) {
  Star.find({})
  .then(stars => {
    res.render('stars/new', {
      title: 'Add a Star',
      stars
    })
  })
  .catch(err => {
    res.redirect("/dramas")
  })
}

function create(req, res){
  Star.create(req.body)
  .then(star => {
    res.redirect('/stars/new')
  })
  .catch(err => {
    res.redirect("/dramas")
  })
}

export {
  newStar as new,
  create
}