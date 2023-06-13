//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Настроено приветственное сообщение')
  } else throw `✳️ Введите приветственное сообщение\n\n@user (упоминание)\n@group (Название группы)\n@desc (описание группы)`
}
handler.help = ['приветствие <текст>']
handler.tags = ['group']
handler.command = ['приветствие'] 
handler.admin = true
handler.owner = false

export default handler
