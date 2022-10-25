import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Tutor } from './tutor.model';

@Injectable()
export class TutorService {
    constructor(
        @InjectModel('Tutor') private readonly tutorModel: Model<Tutor>,
    ) {}

    async insertTutor(name: string, _id: string, password: string, edu_details: {}){
        const newTutor = new this.tutorModel({
            _id,
            name,
            password,
            edu_details
        });

        const result = await newTutor.save();
        return result._id as string;
    }

    async getAllTutors() {
        const tutors = await this.tutorModel.find().exec();
        return tutors.map(tutor => ({
            _id: tutor._id,
            name: tutor.name,
            password: tutor.password,
            edu_details: tutor.edu_details
        }));
    }

    async getSingleTutor(tutorEmail: string){
        const tutor =  await this.findTutor(tutorEmail);
        return {
            _id: tutor._id,
            name: tutor.name,
            password: tutor.password,
            edu_details: tutor.edu_details
        }
    }

    async findTutor(tutorEmail: string): Promise<Tutor> {
        let tutor;
        try {
          tutor = await this.tutorModel.findById(tutorEmail).exec();
        } catch (error) {
          throw new NotFoundException('Could not find product.');
        }
        if (!tutor) {
          throw new NotFoundException('Could not find product.');
        }
        return tutor;
    }

    async deleteTutor(tutorEmail: string){
        const result = await this.tutorModel.deleteOne({_id: tutorEmail}).exec();
        if(!result){
            throw new NotFoundException("Could not find student")
        }
    }

    // async addStudent(tutorEmail: string, studentEmail: string) {
    //     const updatedStudents = await this.findTutor(tutorEmail);
    //     if(studentEmail){
    //         updatedStudents.students.push(studentEmail);
    //     }
    //     updatedStudents.save();
    // }
}