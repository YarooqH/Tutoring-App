import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';

import { TutorService } from './tutor.service';

@Controller('tutors')
export class TutorController{
    constructor(private readonly tutorService: TutorService){}

    @Post()
    async addTutor(
        @Body('_id') tutorId: string,
        @Body('name') tutorName: string,
        @Body('password') tutorPass: string,
        @Body('edu_details') tutorDetails: {}
    ) {
        const newID = await this.tutorService.insertTutor(
            tutorId,
            tutorName,
            tutorPass,
            tutorDetails
        );
        return { email: newID };
    }

    @Get()
    async getAllTutors() {
        const tutors = await this.tutorService.getAllTutors();
        return tutors;
    }

    @Get(':id')
    getTutor(@Param('id') tutorEmail: string){
        return this.tutorService.getSingleTutor(tutorEmail);
    }

    @Delete(':id')
    async removeTutor(@Param('id') tutorEmail: string){
        await this.tutorService.deleteTutor(tutorEmail);
        return 'removed' + tutorEmail;
    }
}