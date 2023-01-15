import mongoose from 'mongoose'

const Schema = mongoose.Schema

const dramaSchema = new Schema({
  title: String,
  language: {
    type: String,
    enum: ['Korean','Chinese', 'Japanese', 'Taiwanese']
  }, 
  // reviews: [reviewSchema],
  // stars: [{type: Schema.Types.ObjectId, ref: 'Star'}],
}, {
  timestamps: true
  })

const Drama = mongoose.model('Drama', dramaSchema)

export {
  Drama
}