module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if(!command) return;

            try {
                await command.execute(interaction,client);
            } catch(error) {
                console.error(error);
                await interaction.editReply({
                    content: "Oh no! Something went wrong! Contact Tyler if the problem persists.",
                    ephemeral: true
                })
            }
        }
    }
}