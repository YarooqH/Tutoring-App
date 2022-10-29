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

    @Get(':id')
    async getPost(
        @Param('id') postID: string
    ) {
        const res = await this.postService.findPost(postID);
        return res;
    }

    @Patch(':id')
    async addProposal(
        @Param('id') postID: string, 
        @Body('proposalid') proposalID: string
    ) {
        const updatedPost = await this.postService.addProposal(postID, proposalID);
        // return `Proposal ID: ${proposalID}`;
       return updatedPost;
    }

    // @Patch(':id')
    // async addProposal (
    //     @Param('id') postID: string, proposalID: string
    // ) {
    //     const newPost = await this.postService.addProposal(postID, proposalID);
    //     return 'Proposal Added';
    // }

    @Get('/post/:id')
    async getStudentPosts(
        @Param('id') studentEmail: string
    ) {
        const posts = await this.postService.getStudentPost(studentEmail);
        return posts;
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