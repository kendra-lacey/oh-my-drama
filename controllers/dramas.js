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
  .then(drama => {
    res.render('dramas/show', {
      title: 'Drama Deets',
      drama: drama
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



export {
  index,
  newDrama as new,
  create,
  show,
  edit,
  addReview,
}