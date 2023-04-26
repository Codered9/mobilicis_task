import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import { salesModel } from "@/model/sales";

export default async function queryThree(req:NextApiRequest, res:NextApiResponse) {
    await dbConnect()

    const data:{
      id: Number,
      first_name: string,
      last_name: string,
      email: string,
      gender: string,
      income: string,
      city: string,
      car: string,
      quote: string,
      phone_price: string
  }[] = await salesModel.find({
        last_name: /^M/, 
        $expr: {
          $gt: [{ $strLenCP: '$quote' }, 15]
        },
      }
    )
      let filteredData:{
        id: Number,
        first_name: string,
        last_name: string,
        email: string,
        gender: string,
        income: string,
        city: string,
        car: string,
        quote: string,
        phone_price: string
    }[] = []
    data.map(entry => {
      const lastname = entry.last_name.toLowerCase()
      const email = entry.email.toLowerCase()
      // console.log(email)
        if(email.includes(lastname)){
          filteredData.push(entry)}
      })
      // console.log(filteredData)
    res.status(200).json({filteredData})
}