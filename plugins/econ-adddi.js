//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Пометти пользователя'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Введите количество* Бриллиантов*, которые вы хотите добавить'
    if (isNaN(txt)) throw '🔢 только цифры'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️Минимум  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 ВСТАВКА*
┌──────────────
▢ *Общий:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Recibiste \n\n *+${dmt}* Diamantes`, who, m.text)
}

handler.help = ['брилиант <@user>']
handler.tags = ['econ']
handler.command = ['брилиант'] 
handler.rowner = true

export default handler

