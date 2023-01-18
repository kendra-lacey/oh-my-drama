import { Star } from '../models/star.js'

function newStar(req, res) {
  Star.find({})
  .then(stars => {
    res.render('stars/new', {
      title: 'Add a Star',
      stars
    })
  })
}


export {
  newStar as new,
}