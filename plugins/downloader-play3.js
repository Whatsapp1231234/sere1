import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗INFO❗] НАЗВАНИЕ ОТСУТСТВУЮЩЕЙ ПЕСНИ, ПОЖАЛУЙСТА, ВВЕДИТЕ КОМАНДУ ПЛЮС НАЗВАНИЕ / НАЗВАНИЕ ПЕСНИ*\n\n*—◉ EJEMPLO:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗INFO❗] ИЗВИНИТЕ, Я НЕ СМОГ НАЙТИ АУДИО/ВИДЕО, ПОПРОБУЙТЕ ДРУГОЕ ИМЯ/ЗАГОЛОВОК*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*◉— PLAY DOCUMENT —◉*

📌 *TITULO:* ${title}
📇 *DESCRIPCION:* ${description}
📆 *PUBLICADO:* ${publishedTime}
⌚ *DURACION:* ${durationH}
👀 *VISTAS:* ${viewH}
`.trim(), author, thumbnail, `${url}`, 'URL', null, null, [
['AUDIO', `${usedPrefix}yta.2 ${url}`],
['VIDEO', `${usedPrefix}ytv.2 ${url}`]
], m)
}catch(e){
m.reply('*[❗INFO❗] ERROR, POR FAVOR VUELVA A INTENTARLO*')
console.log(e)
}}
handler.command = /^play3|playdoc?$/i
export default handler
