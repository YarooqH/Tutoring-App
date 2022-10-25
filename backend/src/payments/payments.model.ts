import * as mongoose from 'mongoose';

export const PaymentSchema = new mongoose.Schema({
    studentemail: {type: String, required: true},
    teacheremail: {type: String, required: true},
    paymentamount: {type: Number, required: true},
    receivedamount: {type: Number, required: true},
    commissionrate: {type: Number, required: true}
})

export interface Payment extends mongoose.Document {
    studentemail: string,
    teacheremail: string,
    paymentamount: number,
    receivedamount: number,
    commissionrate: number
}