import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  reviewer: {type: Schema.Types.ObjectId, ref: "Profile"},
})

const dramaSchema = new Schema({
  title: String,
  language: {
    type: String,
    enum: ['Korean','Chinese', 'Japanese', 'Taiwanese']
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
  })

const Drama = mongoose.model('Drama', dramaSchema)

export {
  Drama
}