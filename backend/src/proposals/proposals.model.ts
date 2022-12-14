import * as mongoose from 'mongoose';

export const ProposalSchema = new mongoose.Schema({
    tutoremail: {type: String, required: true},
    tutormsg: {type: String, required: true},
    tutordetails: {type: {}, required: true},
    tutorfees: {type: Number, required: true},
    studentemail: {type: String, required: true},
    postid: {type: String, required: true}
})

export interface Proposal extends mongoose.Document {
    tutoremail: string,
    tutormsg: string,
    tutordetails: {},
    studentemail: string,
    tutorfees: number,
    postid: string
}