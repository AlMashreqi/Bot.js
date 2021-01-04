const { pre } = require('./config.json')

module.exports = (client, aliases, callback) => {
    if (typeof  aliases === 'string') {
        aliases = [aliases]
    }

    client.on('message', message => {
        const { content } = message;

        aliases.forEach(alias => {
            const command = `${pre}${alias}`
            
            if (content.startsWith(`${command} `) || content === content) {
                console.log(`[+] Running the coomand ${command}`)
                callback(message)
            }
        });
    })
}