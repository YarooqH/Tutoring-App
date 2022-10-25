import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Proposal } from './proposals.model';

@Injectable()
export class ProposalService {
    constructor(
        @InjectModel('Proposal') private readonly proposalModel: Model<Proposal>,
    ){}

    async insertProposal(tutorName: string, tutorEmail: string , tutorDetails: {}, tutorFees: number, postID: string){
        const newProposal = new this.proposalModel({
            tutorName,
            tutorEmail,
            tutorDetails,
            tutorFees,
            postID
        });
        const result = await newProposal.save();
        return result._id as string;
    }


    async getProposals(){
        const proposals = await this.proposalModel.find().exec();
        return proposals.map(proposal => ({
            id: proposal._id,
            tutorName: proposal.tutorname,
            tutorEmail: proposal.tutoremail,
            tutorDetails: proposal.tutordetails,
            tutorFees: proposal.tutorfees,
            postID: proposal.postid
        }));
    }

    async deleteProposal(postID: string){
        const result = await this.proposalModel.deleteMany({postid: postID}).exec();
        if(!result){
            throw new NotFoundException("Could not find the proposal");
        }
    }
}