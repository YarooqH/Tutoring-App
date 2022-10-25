import * as mongoose from 'mongoose';

export const TutionsSchema = new mongoose.Schema({
    tutorname: {type: String, required: true},
    tutoremail: {type: String, required: true},
    studentname: {type: String, required: true},
    studentemail: {type: String, required: true},
    tutionfees: {type: Number, required: true}
})

export interface Tution extends mongoose.Document {
    tutorname: string,
    tutoremail: string
    studentname: string,
    studentemail: string,
    tutionfees: number
}