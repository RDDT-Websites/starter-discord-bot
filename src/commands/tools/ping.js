const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Returns my crappy ping'),
    async execute(interaction, client) {
        console.log('a')
        const message = await interaction.deferReply({
            fetchReply: true
        });
        
        const newMessage = `Bot Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
        console.log(`here:}`)
        await interaction.editReply({
            content: newMessage
        });
    }
}