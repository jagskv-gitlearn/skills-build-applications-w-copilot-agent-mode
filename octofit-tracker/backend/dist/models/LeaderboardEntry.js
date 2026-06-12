import { Schema, model } from 'mongoose';
const leaderboardEntrySchema = new Schema({
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);
