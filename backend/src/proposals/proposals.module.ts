import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProposalController } from './proposals.controller';
import { ProposalService } from './proposals.service';
import { ProposalSchema } from './proposals.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Proposal', schema: ProposalSchema }]),
    ],
    controllers: [ProposalController],
    providers: [ProposalService],
})
export class ProposalModule{}