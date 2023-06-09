let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `*[❗INFO❗] USAR ${usedPrefix}list${which} ЧТОБЫ ПРОСМОТРЕТЬ СПИСОК*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗INFO❗] '${text}' НЕ ЗАРЕГИСТРИРОВАН В СПИСКЕ СООБЩЕНИЙ*`
delete msgs[text]
m.reply(`*[❗INFO❗]УСПЕШНО УДАЛЯЮ В СПИСКЕ СООБЩЕНИЙ СООБЩЕНИЕ С ИМЕНЕМ '${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler