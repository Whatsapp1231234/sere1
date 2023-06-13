let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ Группа : *${groupMetadata.subject}*\n▢ Участников : *${participants.length}*${text ? `\n▢ Сообщение для всех : ${text}\n` : ''}\n┌───⊷ *Участники*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ ZloiBoT ✪──', null, {
        mentions: users
    })
}

handler.help = ['внимание']
handler.tags = ['group']
handler.command = ['внимание']
handler.admin = true
handler.group = true

export default handler
