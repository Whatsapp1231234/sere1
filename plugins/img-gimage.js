
import fg from 'api-dylux'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Введите изображение, которое вы хотите найти \n\n📌 например: *${usedPrefix + command}* домашний кот`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ Результат : *${text}*`.trim(), m)
}
handler.help = ['поиск']
handler.tags = ['img']
handler.command = /^(img|image|gimage|поиск)$/i
handler.diamond = true

export default handler
