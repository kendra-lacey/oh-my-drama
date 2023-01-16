import mongoose from 'mongoose'

const Schema = mongoose.Schema

const dramaSchema = new Schema({
  title: String,
  language: {
    type: String,
    enum: ['Korean','Chinese', 'Japanese', 'Taiwanese']
  }, 
}, {
  timestamps: true
  })

const Drama = mongoose.model('Drama', dramaSchema)

export {
  Drama
}