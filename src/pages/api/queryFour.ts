import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import { salesModel } from "@/model/sales";

export default async function queryFour (req:NextApiRequest, res:NextApiResponse) {
    await dbConnect()
    // console.log('Entered Function')
  const data:{
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: String
}[] = await salesModel.find({
    car: { $in: ['BMW', 'Mercedes', 'Audi'] },
  email: { $not: /\d/ }
    })

    res.status(200).json({data})
    
}