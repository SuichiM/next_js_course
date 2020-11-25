import {IncomingMessage, ServerResponse} from 'http'
import DB from '@database'

const OneAvo = async (req:IncomingMessage, res:ServerResponse ) =>{
  const db = new DB()
  const avoID = req.query.id
  const avo = await db.getById(avoID)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({data: avo}))
}

export default OneAvo