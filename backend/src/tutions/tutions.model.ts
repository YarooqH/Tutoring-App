import * as mongoose from 'mongoose';

export const TutionsSchema = new mongoose.Schema({
    tutoremail: {type: String, required: true},
    studentemail: {type: String, required: true},
    tutionfees: {type: Number, required: true}
})

export interface Tution extends mongoose.Document {
    tutoremail: string
    studentemail: string,
    tutionfees: number
}