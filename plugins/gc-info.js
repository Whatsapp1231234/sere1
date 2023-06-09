let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 ИНФОРМАЦИЯ О ГРУППЕ 」*\n
*ИДЕНТИФИКАТОР:* 
${groupMetadata.id}

*НАЗВАНИЕ:* 
${groupMetadata.subject}

*ОПИСАНИЕ:* 
${groupMetadata.desc?.toString() || 'БЕЗ ОПИСАНИЯ'}

*ВСЕГО УЧАСТНИКОВ*
${participants.length} участников

*СОЗДАТЕЛЬ ГРУППЫ:* 
@${owner.split('@')[0]}

*АДМИНИСТРАТОРЫ ГРУППЫ:*
${listAdmin}

*ВКЛЮЧЕННЫЕ АВТОМАТИЧЕСКИЕ ФУНКЦИИ:*
—◉ ПРИВЕТСТВИЕ: ${welcome ? '✅' : '❌'}
—◉ ОБНАРУЖЕНИЕ: ${detect ? '✅' : '❌'} 
—◉ АНТИССЫЛКА: ${antiLink ? '✅' : '❌'} 
—◉ АНТИССЫЛКА 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ 18+: ${modohorny ? '✅' : '❌'} 
—◉ АВТОСТИКЕР: ${autosticker ? '✅' : '❌'} 
—◉ ГОЛОСОВЫЕ БОТА: ${audios ? '✅' : '❌'} 
—◉ АНТИРАЗ: ${antiviewonce ? '✅' : '❌'} 
—◉ АНТИМАТ: ${antiToxic ? '✅' : '❌'} 
—◉ ANTITRABA: ${antiTraba ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
