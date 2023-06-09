const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 HOLA _${name}_ 💖彡*

*<МЕНЮ АУДИО/>*
*- НАПИШИТЕ СЛЕДУЮЩИЕ СЛОВА ИЛИ ФРАЗЫ БЕЗ КАКИХ-ЛИБО ПРЕФИКСОВ (#, /, *, .)*

° ඬ⃟🔊 Болею
° ඬ⃟🔊 Время
° ඬ⃟🔊 Друг
° ඬ⃟🔊 Здравствуйте_
° ඬ⃟🔊 Как дела
° ඬ⃟🔊 Красавица
° ඬ⃟🔊 Миша
° ඬ⃟🔊 Музыка
° ඬ⃟🔊 Пельмени
° ඬ⃟🔊 Плов
° ඬ⃟🔊 Правила
° ඬ⃟🔊 Представьтесь
° ඬ⃟🔊 Привет
° ඬ⃟🔊 С днем рождения
° ඬ⃟🔊 Секс
° ඬ⃟🔊 Смешно
° ඬ⃟🔊 Спасибо
° ඬ⃟🔊 Спать
° ඬ⃟🔊 Спокойной ночи
° ඬ⃟🔊 Суп
° ඬ⃟🔊 Такси
° ඬ⃟🔊 Термобелье
° ඬ⃟🔊 Тост
° ඬ⃟🔊 Удалить
° ඬ⃟🔊 Частушки
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/ANIMxSCANS', 'FACEBOOK', null, null, [
['*ГЛАВНОЕ МЕНЮ*', '/меню']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuaudiosmemuaudios)$/i
handler.fail = null
export default  handler
