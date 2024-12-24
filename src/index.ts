import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "./config";

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient: Client) => {
  console.log(`Ready! Logged in as ${readyClient.user?.tag}`);
  console.log(readyClient);
  readyClient.user?.setActivity("Zonric sucks");
});

client.on(Events.MessageReactionAdd, (messageReaction) => {
  console.log(`Reaction added: ${messageReaction.emoji.name}`);
});

// Log in to Discord with your client's token
client.login(config.DISCORD_TOKEN);
