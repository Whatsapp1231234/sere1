import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗ИНФО❗] НАЗВАНИЕ ОТСУТСТВУЮЩЕЙ ПЕСНИ, ПОЖАЛУЙСТА, ВВЕДИТЕ КОМАНДУ ПЛЮС НАЗВАНИЕ / НАЗВАНИЕ ИЛИ ССЫЛКУ НА КАКУЮ-ЛИБО ПЕСНЮ ИЛИ ВИДЕО НА YOUTUBE\n\n*—◉ НАПРИМЕР:\n #музыка название песни*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'музыка') {
conn.reply(m.chat, `*_⏳ ВАШ ЗВУК ОБРАБАТЫВАЕТСЯ ... ⏳_*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'видео') {
conn.reply(m.chat, `*_⏳ ВАШЕ ВИДЕО ОБРАБАТЫВАЕТСЯ...⏳_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp4, 'error.mp4', `_🌎ХУЛИГАН🌏_`, m)}
}catch(e){
m.reply('*[❗ИНФО❗] ОШИБКА, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ*')
}}
handler.help = ['музыка' , 'видео'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['музыка', 'видео']
export default handler
