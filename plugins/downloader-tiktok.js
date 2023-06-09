import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗ИНФОРМАЦИЯ❗] ПРАВИЛЬНОЕ ИСПОЛЬЗОВАНИЕ КОМАНДЫ*\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗INFO❗] ENLACE DE TIKTOK INCORRECTO, POR FAVOR INGRESE UN ENLACE/LINK DE ALGÚN VÍDEO DE TIKTOK*\n\n*—◉ EJEMPLO:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw '*[❗ИНФОРМАЦИЯ❗] ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ЗАГРУЗКЕ ВАШЕГО ВИДЕО, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ*'
let meta = await getInfo(url).catch(_ => {})
await m.reply('*[❗ИНФОРМАЦИЯ❗] ПОДОЖДИТЕ МИНУТКУ, ПОКА Я СКАЧАЮ*')
let buttons = [{ buttonText: { displayText: 'АУДИОФАЙЛ' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: '_🌎Хулиган🌏_', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['тикток', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|тикток)(dl|nowm)?$/i
export default handler

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
