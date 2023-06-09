let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
if (!who) throw `*[❗INFO❗]ВВЕДИТЕ @tag ЧЕЛОВЕКА, КОТОРОГО ВЫ ХОТИТЕ ДОБАВИТЬ В ПРЕМИУМ-ПОЛЬЗОВАТЕЛИ*`
if (global.prems.includes(who.split`@`[0])) throw '*[❗INFO❗] ЗАРЕГИСТРИРОВАННЫЙ ПОЛЬЗОВАТЕЛЬ УЖЕ ЯВЛЯЕТСЯ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕМ**'
global.prems.push(`${who.split`@`[0]}`)
let textprem = `*[❗INFO❗] @${who.split`@`[0]} ТЕПЕРЬ ВЫ УЖЕ ЯВЛЯЕТЕСЬ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕМ, У ВАС НЕ БУДЕТ ОГРАНИЧЕНИЙ ПРИ ИСПОЛЬЗОВАНИИ БОТА*`
m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^датьпрем$/i
handler.group = true
handler.rowner = true
export default handler
