const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./commands')

client.on('ready', () => {
    console.log('[+] Ready to attack!')

    command(client, 'display', (message) => {
        const args = message.content.slice(3).trim().split(/ +/g);
        let chapter = args[0]
        let page = args[1]

        message.channel.send(`https://read.mangadad.com/Mangadad/attack-on-titan/chapter-${chapter}/${page}.jpg` );
    })
})

client.login(config.token)