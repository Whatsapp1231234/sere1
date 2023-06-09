let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ ИЗМЕРИТЕЛЬ ЛЮБВИ ❤️❤️*
*Любовь к ${text} для тебя это из* *${Math.floor(Math.random() * 100)}%* *от одного 100%*
*Ты должен был попросить ее стать твоей девушкой/или ?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(любовь)$/i
export default handler
