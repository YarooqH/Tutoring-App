import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';

import { PaymentService } from './payments.service';

@Controller('payments')
export class PaymentController{
    constructor(private readonly paymentService: PaymentService){}

    @Post()
    async addPayment(
        @Body('studentemail') studentEmail: string,
        @Body('teacheremail') teacherEmail: string,
        @Body('paymentamount') paymentAmount: number,
        @Body('receivedamount') receivedAmount: number,
        @Body('commissionrate') commissionRate: number 
    ) {
        const newPayment = await this.paymentService.insertPayment(
            studentEmail,
            teacherEmail,
            paymentAmount,
            receivedAmount,
            commissionRate
        );
        return {email: newPayment}
    }

    @Get()
    async getAllPayments(){
        const payments = await this.paymentService.getPayments();
        return payments;
    }
}