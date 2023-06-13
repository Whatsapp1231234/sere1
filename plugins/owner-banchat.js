//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅ Деактивирован ли бот в этой группе')
}
handler.help = ['банчат']
handler.tags = ['owner']
handler.command = ['банчат', 'chatoff'] 

export default handler
 
