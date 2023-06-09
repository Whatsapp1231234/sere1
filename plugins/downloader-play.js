import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗ИНФОРМАЦИЯ❗] НАЗВАНИЕ ОТСУТСТВУЮЩЕЙ ПЕСНИ, ПОЖАЛУЙСТА, ВВЕДИТЕ КОМАНДУ ПЛЮС НАЗВАНИЕ / НАЗВАНИЕ ПЕСНИ*\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗ИНФОРМАЦИЯ❗] ИЗВИНИТЕ, Я НЕ СМОГ НАЙТИ АУДИО/ВИДЕО, ПОПРОБУЙТЕ ДРУГОЕ ИМЯ/ЗАГОЛОВОК*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *НАЗВАНИЕ :* ${title}
📇 *ОПИСАНИЕ:* ${description}
📆 *ВЫЛОЖЕНО:* ${publishedTime}
⌚ *ПРОДОЛЖИТЕЛЬНОСТЬ:* ${durationH}
👀 *ПРОСМОТРЕНО:* ${viewH}
`.trim(), author, thumbnail, `${url}`, 'ССЫЛКА', null, null, [
['ПЕСНЯ', `${usedPrefix}yta ${url}`],
['КЛИП', `${usedPrefix}ytv ${url}`],
['ВСЕ РЕЗУЛЬТАТЫ ПОИСКА', `${usedPrefix}playlist ${text}`]  
], m)
}catch(e){
m.reply('*[❗ИНФОРМАЦИЯ❗] ОШИБКА, ПОЖАЛУЙСТА, ПОПРОБУЙТЕ ЕЩЕ РАЗ*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^песня?$/i
export default handler
