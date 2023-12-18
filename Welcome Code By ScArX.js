
client.on("guildMemberAdd", async (member) => {
    var channel = client.channels.cache.get('Welcome Channel ID')
    var embed = new MessageEmbed()
        .setColor('16FF00') 
        .setAuthor({ name: `${member.guild.name}`, iconURL: `IMAGE / GIF` })
        .setDescription(`**__Hey__** ${member},**__Welcome To Server Name__**\n **__\n We Are Now ${member.guild.memberCount} Members!__**\n`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true })) 
        .setFooter({ text: `Dev: 𝕊𝕔A𝕣𝕏.`, iconURL: 'IMAGE / GIF' })
        .setTimestamp()
    channel.send({ embeds: [embed] })
})
