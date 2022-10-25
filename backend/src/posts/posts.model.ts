import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    studentemail: {type: String, required: true},
    description: {type: String},
    studentedu: {type: {}},
    expectedfees: {type: Number, required: true},
    proposalid: {type: String, required: true}
})

export interface Post extends mongoose.Document {
    studentemail: string,
    description: string,
    studentedu: {},
    expectedfees: number,
    proposalid: string
}