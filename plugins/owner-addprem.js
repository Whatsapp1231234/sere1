//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Пометьте или упомяните кого-нибудь\n\n📌 Ejemplo : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw '✳️ El usuario Mensionado Ya es premium'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ПРЕМИЯ

@${who.split`@`[0]} теперь вы становитесь премиум-пользователем
┌───────────
▢ *Ник:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['датьпрем <@tag>']
handler.tags = ['owner']
handler.command = ['датьпрем', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
