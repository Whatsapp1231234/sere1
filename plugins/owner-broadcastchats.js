import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chats) { 
conn.sendButton(id, `*╔══❰ ХУЛИГАН ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '*_https://chat.whatsapp.com/CxDc8NiUfYL6XUVgWX4HAb_*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 владелец 🤖', '.owner'],['💎 донат 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: '*ОФИЦИАЛЬНОЕ СООБЩЕНИЕ В ПРИВАТНЫХ ЧАТАХ*',
 body: 'АВТОР 🌎ХУЛИГАН🌏', 
sourceUrl: `https://chat.whatsapp.com/CxDc8NiUfYL6XUVgWX4HAb`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗INFO❗] СООБЩЕНИЕ ОТПРАВЛЕНО НА ${chats.length} ЧАТЫ*\n\n*ПРИМЕЧАНИЕ: ВОЗМОЖНО, В ЭТОЙ КОМАНДЕ ЕСТЬ СБОИ, И Я НЕ ЗНАЮ, ОТПРАВЛЯЛ ЛИ Я ВО ВСЕ ЧАТЫ, ИЗВИНИТЕ НА ДАННЫЙ МОМЕНТ*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.rowner = true
export default handler
