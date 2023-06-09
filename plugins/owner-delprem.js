let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗INFO❗] ВВЕДИТЕ @tag ЧЕЛОВЕКА, КОТОРОГО ВЫ ХОТИТЕ УДАЛИТЬ ИЗ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕЙ*`
if (!global.prems.includes(who.split`@`[0])) throw '*[❗INFO❗] ВВЕДЕННЫЙ ПОЛЬЗОВАТЕЛЬ НЕ ЯВЛЯЕТСЯ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕМ*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
let textdelprem = `*[❗INFO❗] @${who.split`@`[0]}ТЕПЕРЬ ВЫ БОЛЬШЕ НЕ ЯВЛЯЕТЕСЬ ЧАСТЬЮ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕЙ*`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^удалитьпрем$/i
handler.group = true
handler.rowner = true
export default handler
