// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch("https://www.mstu.edu.ru/study/timetable/schedule.php?key=123&perstart=2022-09-05&perend=2022-09-11").then(
    (page) => page.text().then((result) => res.json({name:result}))
  )
  // res.status(200).json({ name: 'John Doe' })
}
