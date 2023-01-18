import { Drama } from '../models/drama.js'
import { Star } from '../models/star.js'

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
    title: 'Add a Drama Series'
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

function show(req, res) {

  Drama.findById(req.params.id)
  .populate('reviews.reviewer')
  .populate('mainChar')
  .then(drama => {
    Star.find({_id: {$nin: drama.mainChar}})
    .then(stars => {

      res.render('dramas/show', {
        title: 'Drama Deets',
        drama: drama,
        stars: stars,
      })
    })
  })
  .catch(err => {
    console.log("error")
    res.redirect('/new')
  })
}

function edit(req, res) {
  Drama.findById(req.params.id)
    .then(drama => {
      res.render('dramas/edit', {
        title: 'Edit Drama',
        drama: drama
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }

  function update(req, res) {
    Drama.findById(req.params.id)
    .then(drama => {
      if (drama.owner.equals(req.user.profile._id)) {
        drama.updateOne(req.body)
        .then(()=> {
          res.redirect(`/dramas/${drama._id}`)
        })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function addReview(req, res) {
  //find drama by _id
  Drama.findById(req.params.id)
  .then(drama => {
    // add the logged in user's profile _id to req.body
    req.body.reviewer = req.user.profile._id
    // push req.body form data into the embedded reviewSchema
    drama.reviews.push(req.body)
    // save the updated drama document
    drama.save()
    .then(() => {
      //redirect back to drama show view
      res.redirect(`/dramas/${drama._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/dramas')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/dramas')
  })
}

function deleteReview(req, res) {
  Drama.findById(req.params.dramaId)
    .then(drama => {
      const review = drama.reviews.id(req.params.reviewId)
      if (review.reviewer.equals(req.user.profile._id)) {
        drama.reviews.remove(review)
        drama.save()
        .then(() => {
          res.redirect(`/dramas/${drama._id}`)
        })
        .catch(err => {
          console.log(err)
          res.redirect('/drama')
        })
      } else {
        throw new Error('🚫 Not authorized 🚫')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/drama')
    })
}

function addToMainChar(req,res) {
  //find the drama by its id (req.params)
  Drama.findById(req.params.id)
  .then(drama => {
    // add the id of the star (req.body.starId) to the mainChar array
    drama.mainChar.push(req.body.starId)
    //save the updated drama document
    drama.save()
      .then(() => {
      //redirect backto the drama show view
      res.redirect(`/dramas/${drama._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/dramas')
      })
      .catch(err => {
        console.log(err)
        res.redirect('/dramas')
      })
    })
  }




export {
  index,
  newDrama as new,
  create,
  show,
  edit,
  update,
  addReview,
  deleteReview
}