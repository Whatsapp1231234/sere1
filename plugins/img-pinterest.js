import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Какую картинку ты хочешь, чтобы я посмотрел?\n\n📌 Ejemplo  : ${usedPrefix + command} Lil Peep`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['поиск2']
handler.tags = ['img']
handler.command = ['поиск2'] 

export default handler
