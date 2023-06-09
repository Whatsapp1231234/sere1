let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ ВНИМАНИЕ ⚠️ ] НЕВЕРНАЯ ССЫЛКА*\n*👉🏻 ВВЕДИТЕ ССЫЛКУ НА ГРУППУ*\n\n*ПРИМЕР:*\n*#добавить в группу https://chat.whatsapp.com/FQ4gui0wUTO94zgP2YUbsH*\n\n*КСТАТИ, ЭТОТ ПРИМЕР ССЫЛКИ ПРЕДСТАВЛЯЕТ СОБОЙ МОЮ ГРУППУ, ЧТОБЫ ВЫ МОГЛИ ПОГОВОРИТЬ ОБО МНЕ С ВЛАДЕЛЬЦЕМ*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*БОТ УСПЕШНО ВСТУПИЛ В ВАШУ ГРУППУ, НАСЛАЖДАЙТЕСЬ БОТОМ! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗ИНФОРМАЦИЯ❗] NUEVA SOLICITUD DEL BOT PARA UN GRUPO [❗ИНФОРМАЦИЯ❗]*\n\n*—◉ NÚMERO SOLICITANTE:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ LINK DEL GRUPO DÓNDE SE SOLICITA EL BOT ' + link, jid)

await m.reply('*[❗ИНФОРМАЦИЯ❗] ССЫЛКА НА ГРУППУ БЫЛА ОТПРАВЛЕНА МОЕМУ ВЛАДЕЛЬЦУ/A*\n\n*👉🏻 ВАША ГРУППА БУДЕТ ПРОХОДИТЬ ОЦЕНКУ, И МОЙ ХОЗЯИН РЕШИТ, ДОБАВЛЯТЬ ЕЕ ИЛИ НЕТ*\n\n*[❗ИНФОРМАЦИЯ❗] НЕКОТОРЫЕ ИЗ ПРИЧИН, ПО КОТОРЫМ ВАШ ЗАПРОС МОЖЕТ БЫТЬ ОТКЛОНЕН:*\n\n*1.- БОТ ЗАГРУЖЕН*\n*2.- РАНЕЕ БОТ БЫЛ УДАЛЕН ИЗ ГРУППЫ, В КОТОРУЮ ПОДАЕТСЯ ЗАЯВКА*\n*3.- ГРУППА ЗАКРЫТА*\n*4.- БОТ НЕ ПРИСОЕДИНЯЕТСЯ К ГРУППАМ ПО РЕШЕНИЮ ВЛАДЕЛЬЦА*\N*5.- ВЫ В ЧЕРНОМ СПИСКЕ У ВЛАДЕЛЬЦА*\n\n*👉🏻 ИМЕЙТЕ В ВИДУ, ЧТО НА ВАШ ЗАПРОС О ПРИСОЕДИНЕНИИ БОТА К ГРУППЕ МОЖЕТ ПОТРЕБОВАТЬСЯ НЕСКОЛЬКО ЧАСОВ ИЛИ ДНЕЙ, ЧТОБЫ ПОЛУЧИТЬ ОТВЕТ, НАБЕРИТЕСЬ ТЕРПЕНИЯ ')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^добавитьвгруппу|nuevogrupo$/i
export default handler
