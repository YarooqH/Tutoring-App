import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Post } from './posts.model';

@Injectable()
export class PostService {
    constructor(
        @InjectModel('Post') private readonly postModel: Model<Post>,
    ){}

    async insertPost(studentemail: string, description: string, studentedu: {}, expectedfees: number, proposalid: string){
        const newPost = new this.postModel({
            studentemail,
            description,
            studentedu,
            expectedfees,
            proposalid
        });

        const result = await newPost.save();
        return result._id as string;
    }

    async findPost(postID: string): Promise<Post>{
        let post;
        try{
            post = await this.postModel.findById(postID).exec();
        } catch (err){
            throw new NotFoundException('Could not find post.');
        } 
        if (!post) {
            throw new NotFoundException('Could not find post.');
        }
        return post;
    }   

    async getStudentPost(studentEmail: string) {
        let posts = await this.postModel.find({ studentemail: studentEmail });
        return posts.map(post => ({
            id: post._id,
            studentEmail: post.studentemail,
            postDescription: post.description,
            studentEducation: post.studentedu,
            expectedFees: post.expectedfees,
            proposalID: post.proposalid
        }));
    }

    // async addProposal(postID: string, proposalID: string){
    //     const newProposal = await this.findPost(postID);

    //     if(proposalID){
    //         newProposal.proposalid = proposalID;
    //     }

    //     newProposal.save();
    //     return "Proposal Added";

    // }
    async addProposal(postID: string, proposalID: string){
        let post = await this.findPost(postID);
        if(proposalID) {
           post.proposalid = [...post.proposalid, proposalID];
        }
        post.save();

        return post.proposalid;
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

    async deletePost(postID: string){
        const result = await this.postModel.deleteOne({_id: postID}).exec();
        if(!result){
            throw new NotFoundException("Could not find the post");
        }
    }
}