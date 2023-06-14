//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *AFK* 
  Теперь эти афк, пока ты не отправишь сообщение 
▢ *Usuario:* ${conn.getName(m.sender)} 
▢ *Razon:* ${text ? text : ''}
  `)
}
handler.help = ['afk <razon>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
