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

import { TutionService } from './tutions.service';

@Controller('tutions')
export class TutionsController{
    constructor(private readonly tutionService: TutionService){}

    @Post()
    async addTution(
        @Body('tutorname') tutorName: string,
        @Body('tutoremail') tutorEmail: string,
        @Body('studentname') studentName: string,
        @Body('studentemail') studentEmail: string,
        @Body('tutionfees') tutionFees: number
    ) {
        const newTution = await this.tutionService.insertTution(
           tutorName,
           tutorEmail,
           studentName,
           studentEmail,
           tutionFees
        );
        return newTution;
    }

    // @Delete(':id')
    // async deleteProposal(
    //     @Param('id') postID: string
    // ) {
    //     const res = await this.proposalService.deleteProposal(postID);
    //     return res;
    // }

    @Get()
    async getAllTutions(){
        const tutions = await this.tutionService.getTutions();
        return tutions;
    }
}