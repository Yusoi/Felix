const Discord = require('discord.js');
const bot = new Discord.Client();


bot.login('MzcwNjM5NDUzOTkzMTcyOTky.DMuCZw.x2OjQRTiGHJbHUUT3d--dXuDBLM');

bot.on('message', (message) =>{
    if(message == 'halp'){
        message.author.send('ping,lenny,spoopy,metal,timetostop,good bot,bash');
    }
    
    //pongs back
    if(message == 'ping'){
        const rand = Math.floor(Math.random()*20);

        if(rand == 0) message.channel.send('Fuck off!',{tts: true});
        if(rand >= 1) message.channel.send('pong');
    }

    //sends a lenny face
    if(message == 'lenny'){
        message.channel.send('( ͡° ͜ʖ ͡°)');
    }

    if(message == 'bash'){
        message.channel.send('I\'ll bash yer fookin head in, I swear on me mum!',{tts: true});
    }

    if(message == 'good bot'){
        message.channel.send('Thank you');
    }

    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === 'spoopy') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
            const voiceChannel = message.member.voiceChannel;
            voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                const dispatcher = connection.playFile(__dirname + "/sounds/spoopy.mp3");
                dispatcher.on('end', () => 
                    voiceChannel.leave()
                )
            })
            .catch(console.log);

            

        } else {
            message.reply('You need to join a voice channel first!');
        }
    }


    if (message.content === 'timetostop') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
            const voiceChannel = message.member.voiceChannel;
            voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                const dispatcher = connection.playFile(__dirname + "/sounds/" + "it's time to stop.mp3");
                dispatcher.on('end', () => 
                    voiceChannel.leave()
                )
            })
            .catch(console.log);
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
    
        
    if (message.content === 'metal') {
            // Only try to join the sender's voice channel if they are in one themselves
            if (message.member.voiceChannel) {
                const voiceChannel = message.member.voiceChannel;
                voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                    const rand = Math.floor(Math.random()*2);

                    if(rand == 0){
                        const dispatcher = connection.playFile(__dirname + "/sounds/Cannibal Corpse - Hammer Smashed Face.mp3");
                    }
                    if(rand == 1){
                        const dispatcher = connection.playFile(__dirname + "/sounds/MESHUGGAH - Bleed (OFFICIAL MUSIC VIDEO).mp3");
                    }


                    dispatcher.on('end', () => 
                        voiceChannel.leave()
                    )
                })
                .catch(console.log);

                
    
        } else {
                message.reply('You need to join a voice channel first!');
        }
    }
})




