import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Post } from './posts.model';

@Injectable()
export class PostService {
    constructor(
        @InjectModel('Post') private readonly postModel: Model<Post>,
    ){}

    async insertPost(studentEmail: string, description: string, studentedu: {}, expectedfees: number, proposalid: string){
        const newPost = new this.postModel({
            studentEmail,
            description,
            studentedu,
            expectedfees,
            proposalid
        });

        const result = await newPost.save();
        return result._id as string;
    }


    async getPosts(){
        const posts = await this.postModel.find().exec();
        return posts.map(post => ({
            id: post._id,
            studentEmail: post.studentemail,
            postDescription: post.description,
            studentEducation: post.studentedu,
            expectedFees: post.expectedfees,
            proposalID: post.proposalid
        }));
    }

    async deletePost(propID: string){
        const result = await this.postModel.deleteOne({proposalid: propID}).exec();
        if(!result){
            throw new NotFoundException("Could not find the post");
        }
    }
}