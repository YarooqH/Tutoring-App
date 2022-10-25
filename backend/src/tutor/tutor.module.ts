import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TutorController } from './tutor.controller';
import { TutorService } from './tutor.service';
import { TutorSchema } from './tutor.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Tutor', schema: TutorSchema }]),
    ],
    controllers: [TutorController],
    providers: [TutorService],
})
export class TutorModule{}