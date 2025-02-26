var express = require('express');
var router = express.Router();
const eventIndexModel = require('../models/eventIndexModel')

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const event = await eventIndexModel.getAll()

    if (!event || !event.event_logo || !event.event_name || !event.short_description || !event.event_description || !event.event_objective || !event.voting_start_time || !event.voting_end_time) {
      // Jika data pada index tidak lengkap render index
      return res.render('index');
  }

  const now = new Date()
  const votingEnd = new Date(event.voting_end_time)

  if (now > votingEnd) {
    //jika waktu voting sudah berakhir rende postVoting/index
    return res.render('postVoting/index')
  } else {
    //jika waktu voting belum berakhir rende preVoting/index
    return res.render('preVoting/index')
  }

  } catch (error) {
    console.error(error)
    return res.status(500).send('Server error')
  }
})

//render login
router.get('/login', async (req, res, next) => {
  res.render('preVoting/login')
})
//router login
//router logout
module.exports = router;
