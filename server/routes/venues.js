const express = require("express")
const router = express.Router()

const conn = require("../db")

router.get("/venues", async (req, res) => {
  const venues = await conn.raw(`SELECT * FROM venues;`)
  res.json(venues.rows)
})

router.get("/venues/highlights", async (req, res) => {
  const venues = await conn.raw(`select galleries.image, venues.title from venues
  inner join galleries on galleries.venue_id=venues.id
  where venues.id in(1,21,14,2,7,3,42)
 `)
  res.json(venues.rows)
})

router.get("/venues/experiences", async (req, res) => {
  const venues = await conn.raw(`select * from venues
    where type='experience'`)
  res.json(venues.rows)
})

router.get("/venues/restaurants", async (req, res) => {
  const venues = await conn.raw(`select * from venues
    where type='restaurant'`)
  res.json(venues.rows)
})

module.exports = router
