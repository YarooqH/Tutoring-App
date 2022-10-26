import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {Student} from './student.model';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel('Student') private readonly studentModel: Model<Student>,
    ) {}

    async insertStudent( _id: string, name: string, password: string, edu_details: {}){
        const newStudent = new this.studentModel({
            _id,
            name,
            password,
            edu_details
        });

        const result = await newStudent.save();
        return result._id as string;
    }

    async getAllStudents() {
        const students = await this.studentModel.find().exec();
        return students.map(student => ({
            _id: student._id,
            name: student.name,
            password: student.password,
            edu_details: student.edu_details
        }));
    }

    async getSingleStudent(studentEmail: string){
        const student =  await this.findStudent(studentEmail);
        return {
            _id: student._id,
            name: student.name,
            password: student.password,
            edu_details: student.edu_details
        }
    }

    async findStudent(studentEmail: string): Promise<Student> {
        let student;
        try {
          student = await this.studentModel.findById(studentEmail).exec();
        } catch (error) {
          throw new NotFoundException('Could not find product.');
        }
        if (!student) {
          throw new NotFoundException('Could not find product.');
        }
        return student;
    }

    // async addTutor(tutorEmail: string, studentEmail: string){
    //     const newTutor = await this.findStudent(studentEmail);

    //     if(tutorEmail){
    //         newTutor.tutor = tutorEmail;
    //     }
    //     newTutor.save();
    //     return 'student: ' + studentEmail + ' tutor added: ' + tutorEmail
    // }

    async deleteStudent(studentEmail: string){
        const result = await this.studentModel.deleteOne({_id: studentEmail}).exec();
        if(!result){
            throw new NotFoundException("Could not find student")
        }
    }


}