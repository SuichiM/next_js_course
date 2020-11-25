import {NextApiRequest, NextApiResponse} from 'next'
import DB from '@database'

const OneAvo = async (req:NextApiRequest, res:NextApiResponse ) =>{
  const db = new DB()
  const avoID = req.query.id
  const avo = await db.getById(avoID as string)
  
  res.status(200).json({data:avo})

  /* 
  la linea anterior es equivalente a todo esto 

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({data: avo}))
 */

}

export default OneAvo