let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? 'НЕ УЧАСТНИК' : 'УЧАСТНИК'}]\n\n`
m.reply(`*СПИСОК ГРУПП, В КОТОРЫХ НАХОДИТСЯ БОТ:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(группы|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler
