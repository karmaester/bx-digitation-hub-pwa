// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log({ query: req.query })
  setTimeout(() => {
    res.status(200).json('OK');
  }, 500);
}
