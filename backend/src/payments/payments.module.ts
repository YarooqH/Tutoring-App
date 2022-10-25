import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PaymentController } from './payments.controller';
import { PaymentService } from './payments.service';
import { PaymentSchema } from './payments.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Payment', schema: PaymentSchema }]),
    ],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule{}