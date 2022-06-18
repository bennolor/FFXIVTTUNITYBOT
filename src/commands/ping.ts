
import { BaseCommandInteraction, Client } from "discord.js"
import { Command } from "../Command"

export const Ping: Command = {
    name: "ping", 
    description: "Returns a greeting",
    type: "CHAT_INPUT",
    run:async (client:Client, interaction: BaseCommandInteraction) => {
        const content = "Ack!"

        await interaction.followUp({
            ephemeral: true,
            content
        })
    }
}