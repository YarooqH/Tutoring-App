import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Tution } from './tutions.model';

@Injectable()
export class TutionService {
    constructor(
        @InjectModel('Tution') private readonly tutionModel: Model<Tution>,
    ){}

    async insertTution(tutoremail: string, studentemail: string, tutionfees: number){
        const newTution = new this.tutionModel({
            tutoremail,
            studentemail,
            tutionfees
        });
        const result = await newTution.save();
        return result._id as string;
    }


    async getTutions(){
        const tutions = await this.tutionModel.find().exec();
        return tutions.map(tution => ({
            id: tution._id,
            tutorEmail: tution.tutoremail,
            studentEmail: tution.studentemail,
            tutionFees: tution.tutionfees
        }));
    }

    
    // async deleteProposal(postID: string){
    //     const result = await this.proposalModel.deleteMany({postid: postID}).exec();
    //     if(!result){
    //         throw new NotFoundException("Could not find the proposal");
    //     }
    // }
}