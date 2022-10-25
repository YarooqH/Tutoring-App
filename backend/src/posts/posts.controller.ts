import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    Head,
  } from '@nestjs/common';

import { PostService } from './posts.service';

@Controller('posts')
export class PostController{
    constructor(private readonly postService: PostService){}

    @Post()
    async addPost(
        @Body('studentemail') studentEmail: string,
        @Body('description') description: string,
        @Body('studentedu') studentEdu: {},
        @Body('expectedfees') expectedFees: number,
        @Body('proposalid') proposalID: string 
    ) {
        const newPost = await this.postService.insertPost(
            studentEmail,
            description,
            studentEdu,
            expectedFees,
            proposalID
        );
        return newPost;
    }

    @Delete(':id')
    async deletePost(
        @Param('id') proposalID: string
    ) {
        const res = await this.postService.deletePost(proposalID);
        return res;
    }

    @Get()
    async getAllPosts(){
        const posts = await this.postService.getPosts();
        return posts;
    }
}