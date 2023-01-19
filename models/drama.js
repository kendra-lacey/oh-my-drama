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
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [reviewSchema],
  mainChars: [{type: Schema.Types.ObjectId, ref: 'Star'}]
}, 
{
  methods: {
    getAverage() {
      let total = 0
      this.reviews.forEach(review => {
        total += review.rating
      });
      return (total / this.reviews.length.toFixed(1))
    }
  }
},
{
  timestamps: true
  })

const Drama = mongoose.model('Drama', dramaSchema)

export {
  Drama
}