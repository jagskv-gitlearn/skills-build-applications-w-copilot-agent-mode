import { Schema, model } from 'mongoose'

const activitySchema = new Schema(
  {
    durationMinutes: { type: Number, required: true },
    notes: { type: String, default: '' },
    type: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
)

export const Activity = model('Activity', activitySchema)