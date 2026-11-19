import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import pg from 'pg'
const { Pool } = pg
const app = express()
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false })
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json({ limit: '20kb' }))
app.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, limit: 40 }))
app.get('/api/health', (_req,res)=>res.json({ status:'ok', service:'Reliable Car Wash API' }))
app.post('/api/leads', async (req,res)=>{
  const { name, phone, email='', vehicle='', service='', message='' } = req.body || {}
  if (!name?.trim() || !phone?.trim()) return res.status(400).json({ error:'Name and phone are required.' })
  if (String(name).length > 120 || String(phone).length > 40 || String(email).length > 180 || String(message).length > 3000) return res.status(400).json({ error:'One or more fields are too long.' })
  try {
    const result = await pool.query(
      `INSERT INTO leads (name, phone, email, vehicle, service, message) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, created_at`,
      [name.trim(), phone.trim(), email.trim(), vehicle.trim(), service.trim(), message.trim()]
    )
    res.status(201).json({ message:'Request received', lead:result.rows[0] })
  } catch (error) {
    console.error('Lead insert failed:', error.message)
    res.status(500).json({ error:'Unable to save your request right now.' })
  }
})
const port = process.env.PORT || 5000
app.listen(port, ()=>console.log(`Reliable Car Wash API listening on ${port}`))
