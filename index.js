var Discord = require('discord.js');
var client = new Discord.Client();
const config = require("./config.json");
var channel;



client.on('ready',()=>{
    channel = client.channels.get("561764431361474601");
    //channel.send("opa");

})

client.on("message", async message=>{
    if(message.author.bot) return;

    if(message.content.indexOf(config.prefix)!==0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        const m = await message.channel.send("pong!");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

    if(command ==="say"){
        const sayMsg = args.join(" ");
        message.delete().catch(O_o={});
        message.channel.send(sayMsg);
    }

    if(command ==="nude"){
        message.channel.send("Here",{
            file: ""
        });
    }

    if(command==="rollD6"){
        var dice = Math.round(Math.random()*6)+1;
        message.channel.send(dice.toString());

    }

})


client.login(config.token);


