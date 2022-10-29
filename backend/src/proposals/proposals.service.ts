import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Proposal } from './proposals.model';

@Injectable()
export class ProposalService {
    constructor(
        @InjectModel('Proposal') private readonly proposalModel: Model<Proposal>,
    ){}

    async insertProposal(tutoremail: string, tutormsg: string, tutordetails: {}, tutorfees: number, postid: string){
        const newProposal = new this.proposalModel({
            tutoremail,
            tutormsg,
            tutordetails,
            tutorfees,
            postid
        });
        const result = await newProposal.save();
        return result._id;
    }


    async getProposals(){
        const proposals = await this.proposalModel.find().exec();
        return proposals.map(proposal => ({
            id: proposal._id,
            tutorEmail: proposal.tutoremail,
            tutorMsg: proposal.tutormsg,
            tutorDetails: proposal.tutordetails,
            tutorFees: proposal.tutorfees,
            postID: proposal.postid
        }));
    }

    async getTutorProposals(teacherEmail: string) {
        const proposals = await this.proposalModel.find({ teacheremail: teacherEmail });
        return proposals.map(proposal => ({
            id: proposal._id,
            teacherEmail: proposal.tutoremail,
            tutorMsg: proposal.tutormsg,
            tutorDetails: proposal.tutordetails,
            tutorFees: proposal.tutorfees,
            postID: proposal.postid
        }))
    }

    // async deleteProposals(postID: string) {
    //     const proposals = await this.proposalModel.deleteMany({postid: postID});
    //     return 'deleted';
    // }

    async getPostProposals(postID: string) {
        const proposals = await this.proposalModel.find({ postid: postID });
        return proposals.map(proposal => ({
            id: proposal._id,
            teacherEmail: proposal.tutoremail,
            tutorMsg: proposal.tutormsg,
            tutorDetails: proposal.tutordetails,
            tutorFees: proposal.tutorfees,
            postID: proposal.postid
        }))
    }

    async deleteProposal(postID: string){
        const result = await this.proposalModel.deleteMany({postid: postID}).exec();
        if(!result){
            throw new NotFoundException("Could not find the proposal");
        }
    }
}