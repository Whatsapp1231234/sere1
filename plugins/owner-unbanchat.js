let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[❗INFO❗]ЭТОТ ЧАТ БЫЛ УСПЕШНО ОТМЕНЕН*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
export default handler
