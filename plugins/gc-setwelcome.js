let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ ПРАВИЛЬНО НАСТРОЕНО ДЛЯ ЭТОЙ ГРУППЫ*')
} else throw `*[❗] ВВЕДИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ, КОТОРОЕ ВЫ ХОТИТЕ ДОБАВИТЬ, ИСПОЛЬЗУЙТЕ:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['приветствие'] 
handler.admin = true
export default handler
