import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TutionsController } from './tutions.controller';
import { TutionService } from './tutions.service';
import { TutionsSchema } from './tutions.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Tution', schema: TutionsSchema }]),
    ],
    controllers: [TutionsController],
    providers: [TutionService],
})
export class TutionModule{}