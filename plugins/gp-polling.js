
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Текст для опроса отсутствует \n\n📌 Ejemplo : \n*${usedPrefix + command}* Mensaje  |como|xd`
if (!text.includes('|')) throw  `✳️ Разделите опросы с помощью *|* \n\n📌 Ejemplo : \n*${usedPrefix + command}* mi encuesta|n  |como|xd|vale`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Опрос, запрошенный:* ${name}\n\n*Mensaje:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['опрос<hola|como|xd>']
handler.tags = ['group'] 
handler.command = ['опрос', 'encuesta', 'polling'] 
handler.group = true

export default handler
