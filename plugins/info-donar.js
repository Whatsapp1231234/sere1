/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let userm = `@${who.replace(/@.+/, '')}`
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 DONAR 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ ПРИВЕТ) ${userm} 💙*
*┃*
*┃ 👉🏻 ЕСЛИ ТЫ СЮДА ЗАШЕЛ ЗНАЧИТ ХОЧЕШЬ ПОДКИНУТЬ МНЕ НА ШЕСТЕРЕНКИ :𝟹*

*┃ *┃ 👉🏻 МОЖЕШЬ СМЕЛО ПИСАТЬ СЮДА И ТЕБЕ ВСЕ РАССКАЖУТ <3*
*┃ wa.me/79531126750*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
let mentionedJid = [who]
conn.sendButton(m.chat, donar, wm,/* 'https://www.paypal.me/AMxScan', 'PAYPAL', null, null, */[
['ГЛАВНОЕ МЕНЮ', '/менюшка']],
 '', { contextInfo: { mentionedJid }})}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
