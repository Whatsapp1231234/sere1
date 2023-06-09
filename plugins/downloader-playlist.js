/* Created by https://github.com/BrunoSobrino */
       /* Diseño by Yameko-Bot V1*/

import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[❗ИНФОРМАЦИЯ❗] НАЗВАНИЕ ОТСУТСТВУЮЩЕЙ ПЕСНИ, ПОЖАЛУЙСТА, ВВЕДИТЕ КОМАНДУ ПЛЮС НАЗВАНИЕ / НАЗВАНИЕ ПЕСНИ*\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command} Begin you*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `РЕЗУЛЬТАТЫ ПОИСКА: ${args.join(" ")}`
const sections = [{
title: `|－－－－－{ *ТРЕКИ* }－－－－－|`,
rows: listSerch },
{              
title: `|－－－－－{ *КЛИПЫ* }－－－－－|`,
rows: listSerch2 },
{              
title: `|－－{ * MP3* }－－|`,
rows: listSerch3 },
{              
title: `|－－{ *MP4* }－－|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: 'Выберите вариант ',
title: " 『 СВЯЗАННАЯ МУЗЫКА С ПОИСКОМ 』",
buttonText: "[♦ РЕЗУЛЬТАТЫ ♦]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[❗ИНФОРМАЦИЯ❗] ОШИБКА, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ С ДРУГИМ НАЗВАНИЕМ ПЕСНИ*')
}}
handler.command = /^playlist|playlist2$/i
export default handler
