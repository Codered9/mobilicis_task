import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import { salesModel } from "@/model/sales";


export default async function queryOne (req: NextApiRequest,res: NextApiResponse) {
    await dbConnect();


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
        income: { $lt: '$5' },
        car: { $in: ['BMW', 'Mercedes'] }
      })

      res.status(200).json({
        'data': data
      })
}