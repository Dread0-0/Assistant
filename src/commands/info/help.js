const { ChatInputCommandInteraction, SlashCommandBuilder, Client, EmbedBuilder, codeBlock } = require('discord.js');
const { Colours } = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows a list of commands.')
    .setDMPermission(false),
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const { guild } = interaction;

        const HelpEmbed = new EmbedBuilder()
        .setColor(Colours.Default_Colour)
        .setTitle('Help')
        .setDescription(`${client.user.username} is a private moderation and utility bot for ${guild.name}, currently managed and maintaned by the lovely development team!`)
        .setThumbnail(client.user.avatarURL())
        .setFields(
            {
                name: 'Info',
                value: codeBlock('help, membercount, channelinfo, roleinfo, serverinfo, userinfo, faq, virustotal')
            },
            {
                name: 'Moderation',
                value: codeBlock('ban, block, case, cases, kick, lock, mod, mute, setnick, purge, reason, rmpunish, slowmode, softban, unban, unblock, unlock, unmute, warn')
            },
            {
                name: 'Misc',
                value: codeBlock('avatar, banner, binary, icon, poll, reminder, report, roles, say')
            },
            {
                name: 'Images',
                value: codeBlock('achievement, capybara, horny, kitty, neko')
            },
            {
                name: 'Fun',
                value: codeBlock('8ball, gayrate, trollban')
            },
            {
                name: 'Util',
                value: codeBlock('bansearch, blacklist, botinfo, certify, customrole, ping, status')
            },
            {
                name: 'Developer',
                value: codeBlock('botavatar, botnick, eval, invite')
            }
        )

        interaction.reply({ embeds: [HelpEmbed] });
    },
};
