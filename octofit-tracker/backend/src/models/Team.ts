import { Schema, model } from 'mongoose'

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    sport: { type: String, default: 'General Fitness' },
  },
  { timestamps: true },
)

export const Team = model('Team', teamSchema)