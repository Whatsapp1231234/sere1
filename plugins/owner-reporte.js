let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗ИНФОРМАЦИЯ❗] ВВЕДИТЕ СООБЩЕНИЕ*\n\n*ПРИМЕР:*\n*${usedPrefix + command} КОМАНДА ${usedPrefix}*`
if (text.length < 10) throw `*[❗ИНФОРМАЦИЯ❗] СООБЩЕНИЕ ДОЛЖНО СОДЕРЖАТЬ НЕ БОЛЕЕ 10 СИМВОЛОВ!*`
if (text.length > 1000) throw `*[❗ИНФОРМАЦИЯ❗] СООБЩЕНИЕ ДОЛЖНО СОДЕРЖАТЬ НЕ БОЛЕЕ 1000 СИМВОЛОВ!*`
let teks = `*❒═════[СООБЩЕНИЕ ВЛАДЕЛЬЦУ]═════❒*\n*┬*\n*├❧ НОМЕР:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ СООБЩЕНИЕ:* ${text}\n*┴*`
conn.reply('79531126750@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextinfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] СООБЩЕНИЕ УСПЕШНО ОТПРАВЛЕНО СОЗДАТЕЛЮ БОТА, ВАШЕ СООБЩЕНИЕ БУДЕТ РАССМОТРЕНО КАК МОЖНО СКОРЕЕ, ЕСЛИ ОНО НЕ ИНТЕРЕСНОЕ, БУДЕТ ПРОИГНОРИРОВАНО*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(сообщениесоздателю|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
