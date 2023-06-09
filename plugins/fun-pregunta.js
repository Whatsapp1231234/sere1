let handler = async (m, { command, text }) => m.reply(`
*⁉️ *РАССПРОСЫ* ⁉️*
  
*ВОПРОС:* ${text}
*ОТВЕТ:* ${['Если','Может быть, да','Возможно','Вероятно, нет','Нет','Я согласен','Невозможно'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^бот|preguntas|apakah$/i
export default handler
