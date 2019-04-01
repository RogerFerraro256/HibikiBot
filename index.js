var Discord = require('discord.js');
var client = new Discord.Client();
const config = require("./config.json");
var channel;



client.on('ready', () => {
    channel = client.channels.get("561764431361474601");
    //channel.send("opa");

})

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command.toLowerCase() === "ping") {
        const m = await message.channel.send("pong!");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

    if (command.toLowerCase() === "say") {
        const sayMsg = args.join(" ");
        message.delete().catch(O_o = {});
        message.channel.send(sayMsg);
    }

    if (command.toLowerCase() === "nude") {
        message.channel.send("Here", {
            file: ""
        });
    }

    if (command.toLowerCase() === "roll") {


        const nmr = args.join(" ");



        var str = nmr;
        var res = str.split("d");

        var dic = parseInt(res[1]);


        var results = [];

        for (let i = 0; i < res[0]; i++) {

            var dice = Math.round(Math.random() * res[1]) ;

            results.push(dice);
        }
        console.log(results.toString());
        console.log(getOccurrence(results, 1));
        console.log(getOccurrence(results, dic));

        if (nmr != "" && !isNaN(dic)) {
            var dice = Math.round(Math.random() * dic) + 1;

            if (getOccurrence(results, 1)>=1 || getOccurrence(results, dic)) {
                
                message.channel.send("The results are: " + results.toString() +" you have "+getOccurrence(results,1).toString()+" critical fails, такая жалость... and "+getOccurrence(results,dic)+" criticals, хорошо!");
            }else{
                message.channel.send("The results are: "+results.toString()+"... слабый в лучшем случае")
            }

        } else {
            message.channel.send("please inform the number of faces of the dice, desu.")
        }
    }



})


function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}



client.login(config.token);


