import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {Payment} from './payments.model';

@Injectable()
export class PaymentService {
    constructor(
        @InjectModel('Payment') private readonly paymentModel: Model<Payment>,
    ){}

    async insertPayment(studentEmail: string, teacherEmail: string, paymentAmount: number, receivedAmount: number, commissionRate: number){
        const newPayment = new this.paymentModel({
            studentEmail,
            teacherEmail,
            paymentAmount,
            receivedAmount,
            commissionRate
        });

        const result = await newPayment.save();
        return result.studentemail as string;
    }


    async getPayments(){
        const payments = await this.paymentModel.find().exec();
        return payments.map(payment => ({
            studentEmail: payment.studentemail,
            teacherEmail: payment.teacheremail,
            paymentAmount: payment.paymentamount,
            receivedAmount: payment.receivedamount,
            commissionRate: payment.commissionrate
        }));
    }

    // async deletePayment(studentEmail: string){
    //     const result = await this.studentModel.deleteOne({_id: studentEmail}).exec();
    //     if(!result){
    //         throw new NotFoundException("Could not find student")
    //     }
    // }
}