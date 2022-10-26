import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: {type: String, required: true },
    password: {type: String, required: true },
    edu_details: {type: {}, required: true }
})

export interface Student extends mongoose.Document {
    _id: string,
    name: string,
    password: string,
    edu_details: {}
}