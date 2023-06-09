let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] ПРОЩАЛЬНОЕ СООБЩЕНИЕ НАСТРОЕНО ПРАВИЛЬНО ДЛЯ ЭТОЙ ГРУППЫ*')
} else throw `*[❗] ВВЕДИТЕ ПРОЩАЛЬНОЕ СООБЩЕНИЕ, КОТОРОЕ ХОТИТЕ ДОБАВИТЬ, ИСПОЛЬЗУЙТЕ:*\n *- @номер (упоминание)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['изменитьпрощание'] 
handler.admin = true
export default handler
