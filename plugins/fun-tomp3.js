
import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    try {
    let q = m.quoted ? m.quoted : m
   let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
   // if (!/video|audio/.test(mime)) throw `✳️ Rперейдите к видео или голосовой заметке, которую вы хотите преобразовать в mp3, с помощью команды :\n\n*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ Ошибка при загрузке мультимедиа'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎Ошибка при преобразовании'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
    } catch (e) {
        m.reply(`✳️ Responda al video o nota de voz que desea convertir a mp3 con el comando :\n\n*${usedPrefix + command}*`)
   }
}
handler.help = ['музыка']
handler.tags = ['fun']
handler.command = ['музыка', 'mp3', 'toudio'] 

export default handler
