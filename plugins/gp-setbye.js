//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('✅ Было установлено прощальное послание')
  } else throw `✳️ Введите сообщение\n@user (упоминание)`
}
handler.help = ['прощание <текст>']
handler.tags = ['group']
handler.command = ['прощание'] 
handler.admin = true
handler.owner = false

export default handler
