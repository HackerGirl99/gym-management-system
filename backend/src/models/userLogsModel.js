// models/UserLogsmodel.js
import mongoose from 'mongoose';

const userLogsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  logType: {
    type: String,
    enum: ['entrance', 'exit', 'workout'],
    required: true
  },
  logTime: {
    type: Date,
    default: Date.now
  },
  workoutTime: {
    type: Number, // in minutes
    default: 0
  },
  logDate: {
    type: Date,
    default: Date.now
  }
});

const UserLogs = mongoose.model('UserLogs', userLogsSchema);

export default UserLogs;
