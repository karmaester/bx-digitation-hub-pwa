// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  pieces: string,
  client: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log({ query: req.query })
  res.status(200).json({
    pieces: '1',
    client: 'Test Client'
  })
}