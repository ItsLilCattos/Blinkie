const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('Hug gif')
	.setDescription('Sends a random hug gif!')
    var hugGif = gifs[Math.floor(Math.random()*gifs.length)];