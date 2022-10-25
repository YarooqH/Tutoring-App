import * as mongoose from 'mongoose';

export const ProposalSchema = new mongoose.Schema({
    tutorname: {type: String, required: true},
    tutoremail: {type: String, required: true},
    tutordetails: {type: {}, required: true},
    tutorfees: {type: Number, required: true},
    postid: {type: String, required: true}
})

export interface Proposal extends mongoose.Document {
    tutorname: string,
    tutoremail: string
    tutordetails: {}
    tutorfees: number,
    postid: string
}