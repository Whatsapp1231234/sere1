
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Введите номер, на который вы хотите отправить приглашение в группу\n\n📌 Например :\n*${usedPrefix + command}* 79531126750`
if (text.includes('+')) throw  `✳️ Введите номер все вместе без *+*`
if (isNaN(text)) throw ' 📌 Вводите только цифры плюс код вашей страны без пробелов'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *ПРИГЛАШЕНИЕ В ГРУППУ*\n\nПользователь пригласил вас присоединиться к этой группе \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Пользователю была отправлена ссылка для приглашения`) 

}
handler.help = ['преглосить <549xxx>']
handler.tags = ['group']
handler.command = ['преглосить','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
