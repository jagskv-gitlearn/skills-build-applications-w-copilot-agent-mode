import { disconnect } from 'mongoose';
import { connectDatabase } from '../config/database.js';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';
async function seed() {
    await connectDatabase();
    await Promise.all([
        Activity.deleteMany({}),
        LeaderboardEntry.deleteMany({}),
        Team.deleteMany({}),
        User.deleteMany({}),
        Workout.deleteMany({}),
    ]);
    const user = await User.create({
        displayName: 'Mona Runner',
        email: 'mona@example.com',
        role: 'athlete',
    });
    const team = await Team.create({
        name: 'OctoFit Originals',
        sport: 'Functional Fitness',
    });
    await Activity.create({
        durationMinutes: 45,
        notes: 'Tempo intervals and mobility work',
        type: 'Run',
        userId: user._id,
    });
    await LeaderboardEntry.create({
        points: 120,
        rank: 1,
        teamId: team._id,
        userId: user._id,
    });
    await Workout.create({
        focus: 'Endurance',
        name: 'Hill Repeat Builder',
        recommendedReps: 6,
        userId: user._id,
    });
    console.log('Seeded octofit_db with users, teams, activities, leaderboard, and workouts.');
    await disconnect();
}
seed().catch((error) => {
    console.error('Failed to seed octofit_db:', error);
    process.exit(1);
});
