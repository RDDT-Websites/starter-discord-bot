const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('log')
        .setDescription('Log something inside of the archives!')
        .addStringOption(option => option.setName('archive').setDescription('What you want to archive.').setRequired(true)),
    async execute(interaction, client) {
        console.log('a')
        const message = await interaction.deferReply({
            fetchReply: true
        });
        
        const archive = interaction.options.getString('archive')

        const newMessage = `Archiving your data. Check archives channel!`
        await interaction.editReply({
            content: newMessage
        });
        client.channels.cache.get('1075190596391669890').send('-' + archive)
    }
}