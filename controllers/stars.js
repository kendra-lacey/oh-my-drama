import { Star } from '../models/star.js'

function newStar(req, res) {
  Star.find({})
  .then(star => {
    res.render('stars/new', {
      title: 'Add a Star',
      stars
    })
  })
  .catch(err => {
    res.redirect("/dramas")
  })
}


export {
  newStar as new,
}