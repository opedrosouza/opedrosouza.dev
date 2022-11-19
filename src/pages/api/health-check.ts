import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ message: "I'm alive :P" })
}
