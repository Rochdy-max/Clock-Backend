import * as mongoose from 'mongoose'

export const AlarmSchema = new mongoose.Schema({
    hour: Number,
    minute: Number
})