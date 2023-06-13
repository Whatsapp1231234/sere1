
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Введите номер, на который вы хотите отправить приглашение в группу\n\n📌 Например :\n*${usedPrefix + command}* 79531126750`
if (text.includes('+')) throw  `✳️ Введите номер все вместе без *+*`
if (isNaN(text)) throw ' 📌 Вводите только цифры плюс код вашей страны без пробелов'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *INVITACIÓN A GRUPO*\n\nUn usuario te invitó a unirte a este grupo \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Se envió un enlace de invitación al usuario`) 

}
handler.help = ['преглосить <549xxx>']
handler.tags = ['group']
handler.command = ['преглосить','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
