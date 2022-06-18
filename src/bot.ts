require("dotenv").config()
import * as fs from "fs"
import { REST } from "@discordjs/rest"
import { Client, Collection, Intents } from 'discord.js'

import ready from "./listeners/ready"
import interactionCreate from "./listeners/interactionCreate"

console.log("Raidingway is waking up...")

const client = new Client({intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
})

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".ts"))

const commands = [];


ready(client)
interactionCreate(client)

client.login(process.env.TOKEN)
