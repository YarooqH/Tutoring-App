import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    studentemail: {type: String, required: true},
    description: {type: String, required: true},
    studentedu: {type: {}, required: true},
    expectedfees: {type: Number, required: true},
    proposalid: {type: String}
})

export interface Post extends mongoose.Document {
    studentemail: string,
    description: string,
    studentedu: {},
    expectedfees: number,
    proposalid: string
}