// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

export async function transcriber (req:NextApiRequest, res:NextApiResponse) {
  await axios.post("/transcribe/")
}

export function translater (req:NextApiRequest, res:NextApiResponse) {
  return axios.get("/")
}