
let handler = async(m, { conn, usedPrefix, command }) => {
	let girl = await conn.getFile(global.API('fgmods', '/api/img/girl', { }, 'apikey'))
	let img = girl.data
   await conn.sendFile(m.chat, img, 'img.jpg', `✅ Результат 🤭`, m)
}
handler.help = ['картинки']
handler.tags = ['img']
handler.command = ['картинки', 'woman']
handler.diamond = true

export default handler
