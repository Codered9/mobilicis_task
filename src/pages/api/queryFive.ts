import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { salesModel } from "@/model/sales";

export default async function queryFive (req:NextApiRequest, res:NextApiResponse) {
    await dbConnect()
    const data:{
      _id: string,
      count: number,
      avgIncome: number
  }[] = await salesModel.aggregate([
      {
        $group: {
          _id: '$city',
          count: { $sum: 1 },
          avgIncome: { $avg: { $toDouble: { $substr: ['$income', 1, -1] } } }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ])
  
    res.status(200).json({data});
  }