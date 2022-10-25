import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';

import { StudentService } from './student.service';

@Controller('students')
export class StudentController{
    constructor(private readonly studentService: StudentService){}

    @Post()
    async addStudent(
        @Body('_id') studentId: string,
        @Body('name') studentName: string,
        @Body('password') studentPass: string,
        @Body('edu_details') studentDetails: {}
    ) {
        const newID = await this.studentService.insertStudent(
            studentId,
            studentName,
            studentPass,
            studentDetails
        );
        return { email: newID };
    }

    // @Patch(':id')
    // async addTutor(@Param('id') studentEmail: string, teacherEmail: string){
    //     const student = await this.studentService.addTutor(studentEmail, teacherEmail);
    //     return 'add tutor of ' + studentEmail;
    // }

    @Get()
    async getAllStudents() {
        const students = await this.studentService.getAllStudents();
        return students;
    }

    @Get(':id')
    async getStudent(@Param('id') studentEmail: string){
        return await this.studentService.getSingleStudent(studentEmail);
    }

    @Delete(':id')
    async removeProduct(@Param('id') studentEmail: string){
        await this.studentService.deleteStudent(studentEmail);
        return 'removed' + studentEmail;
    }
}