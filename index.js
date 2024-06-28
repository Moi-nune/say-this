const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  checkUpdate: false,
});
const express = require("express");

//------------------------- KEEP-ALIVE---------------------------//

const app = express();
app.get("/", (req, res) => {
  res.status(200).send({
    success: "true",
  });
});
app.listen(process.env.PORT || 8000);

//--------------------------------------------------------------//
//-set-rich-presence-&-ready-handler-//
client.on("ready", () => {
  console.log(`[API] Logged in as ${client.user.username}`);
  console.log(`[STATUS] ${client.user.tag} is now online!`);
  client.user.setPresence({ activities: [{ name: "Linear" }], status: "idle" });
});
//--//
//------------------------------------------------------------//

const oa = "783394696520663090";

client.on("messageCreate", async (message) => {
  if (message.content === "Say ok" && message.author.id === oa) {
    message.channel.send("ok");
  }

  if (message.content.startsWith("Mls") && message.author.id == oa) {
    let say = message.content.split(" ").slice(1).join(" ");
    message.channel.send(say);
  }

  if (message.content === "Mlbal" && message.author.id === oa) {
    message.channel.send("<@716390085896962058> bal");
  }
});

//------------------------------------------------------------//

client.login(process.env.TOKEN);
