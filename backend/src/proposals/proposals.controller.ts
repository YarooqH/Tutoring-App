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
        @Body('tutoremail') tutorEmail: string,
        @Body('tutormsg') tutorMsg: string,
        @Body('tutordetails') tutorDetails: {},
        @Body('tutorfees') tutorFees: number,
        @Body('studentemail') studentEmail: string,
        @Body('postid') postID: string 
    ) {
        const newProposal = await this.proposalService.insertProposal(
            tutorEmail,
            tutorMsg,
            tutorDetails,
            tutorFees,
            studentEmail,
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

    @Get('/tutor/:id')
    async getTeacherProposals(
        @Param('id') tutorEmail: string 
    ){
        const proposals = await this.proposalService.getTutorProposals(tutorEmail);
        return proposals;
    }

    @Get('/student/:id')
    async getStudentProposals(
        @Param('id') studentEmail: string 
    ){
        const proposals = await this.proposalService.getStudentProposals(studentEmail);
        return proposals;
    }

    @Get(':id')
    async getPostProposals(
        @Param('id') postID: string 
    ){
        const proposals = await this.proposalService.getPostProposals(postID);
        return proposals;
    }

    @Get()
    async getAllProposals(){
        const posts = await this.proposalService.getProposals();
        return posts;
    }
}