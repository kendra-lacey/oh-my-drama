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
      if (this.reviews.length){
        this.reviews.forEach(review => {
          total += review.rating
        });
        total = total / this.reviews.length
      }
      return (total)
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