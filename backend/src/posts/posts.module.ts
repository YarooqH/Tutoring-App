import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostController } from './posts.controller';
import { PostService } from './posts.service';
import { PostSchema } from './posts.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
    ],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule{}