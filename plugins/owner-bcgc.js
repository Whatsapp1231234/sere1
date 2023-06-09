import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*╔══❰ ХУЛИГАН ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '*_ЭТО ОФИЦИАЛЬНОЕ ЗАЯВЛЕНИЕ_*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖владелец🤖', '.owner'],['💎донат💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: '*ОФИЦИАЛЬНОЕ СООБЩЕНИЕ ДЛЯ ГРУПП*',
body: ' АВТОР 🌎ХУЛИГАН🌏', 
sourceUrl: `https://github.com/ReyEndymion/ANI_MX_SCANS-MD`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗INFO❗]СООБЩЕНИЕ ОТПРАВЛЕНО НА ${groups.length} GRUPO/S*\n\n*ПРИМЕЧАНИЕ: ВОЗМОЖНО, В ЭТОЙ КОМАНДЕ ЕСТЬ СБОИ, И Я НЕ ЗНАЮ, ОТПРАВЛЯЛ ЛИ Я ВО ВСЕ ЧАТЫ, ИЗВИНИТЕ НА ДАННЫЙ МОМЕНТ*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(обьявление|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
