module.exports = {
    name: 'ready',
    once: 'true',
    async execute(client) {
        console.log(`Online. ${client.user.tag} is logged in.`)
    }
}