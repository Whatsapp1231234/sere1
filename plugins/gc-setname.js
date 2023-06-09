import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗ИНФОРМАЦИЯ❗] ВВЕДИТЕ НОВОЕ НАЗВАНИЕ ГРУППЫ*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗ИНФОРМАЦИЯ❗] ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА, ИМЯ НЕ МОЖЕТ БЫТЬ ДЛИННЕЕ 25 СИМВОЛОВ*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(изменитьназвание)$/i
handler.group = true
handler.admin = true
export default handler
