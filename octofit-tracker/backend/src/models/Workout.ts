import { Schema, model } from 'mongoose'

const workoutSchema = new Schema(
  {
    focus: { type: String, required: true },
    name: { type: String, required: true },
    recommendedReps: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
)

export const Workout = model('Workout', workoutSchema)