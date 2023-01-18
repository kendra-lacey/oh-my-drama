import mongoose from 'mongoose'

const Schema = mongoose.Schema

const starSchema = new Schema({
  name: { type: String, required: true },
}, {
  timestamps: true
})

const Star = mongoose.model('Star', performerSchema)

export {
  Star
}