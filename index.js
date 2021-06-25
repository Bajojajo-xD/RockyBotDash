require('dotenv').config()
const discord = require('discord.js')
const mongoose = require('mongoose')
const Dashboard = require('./dashboard/dashboard')

const client = new discord.Client()

client.config = require('./config/main')
client.releasedate = client.config.releasedate
client.version = client.config.version

let mongoURI

if (client.config.beta === true) {
  client.myID = client.config.discord.myBetaID
  mongoURI = process.env.MONGODB_URI_BETA
} else {
  client.myID = client.config.discord.myID
  mongoURI = process.env.MONGODB_URI
}

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

client.on('ready', () => {
  Dashboard(client)
})

if (client.config.beta === true) client.login(client.config.discord.betatoken)
else client.login(client.config.discord.token)