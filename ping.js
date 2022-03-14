const { SlashCommandBuilder } = require('@discordjs/builders');

const command = new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!');


const rawData = command.toJSON();