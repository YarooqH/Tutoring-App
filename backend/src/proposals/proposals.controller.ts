import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    Head,
  } from '@nestjs/common';

import { ProposalService } from './proposals.service';

@Controller('proposals')
export class ProposalController{
    constructor(private readonly proposalService: ProposalService){}

    @Post()
    async addProposal(
        @Body('tutorname') tutorName: string,
        @Body('tutoremail') tutorEmail: string,
        @Body('tutordetails') tutorDetails: {},
        @Body('tutorfees') tutorFees: number,
        @Body('postid') postID: string 
    ) {
        const newProposal = await this.proposalService.insertProposal(
           tutorName,
           tutorEmail,
           tutorDetails,
           tutorFees,
           postID
        );
        return newProposal;
    }

    @Delete(':id')
    async deleteProposal(
        @Param('id') postID: string
    ) {
        const res = await this.proposalService.deleteProposal(postID);
        return res;
    }

    @Get()
    async getAllProposals(){
        const posts = await this.proposalService.getProposals();
        return posts;
    }
}