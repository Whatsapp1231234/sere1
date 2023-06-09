let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '*[❗INFO❗] ЭТО СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО НЕ МНОЙ, Я НЕ МОГУ ЕГО УДАЛИТЬ*'
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
export default handler
