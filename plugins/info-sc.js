let handler = async (m, { conn, usedPrefix }) => {
let texto = `*https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx*`
let buttonMessage= {
'document': { url: `https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx` },
'contextInfo': {
'forwardingScore': 0,
'isForwarded': false,
'externalAdReply': {
'mediaUrl': 'https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx',
'title': 'Группа бота ꧁༺Хулиган༻꧂ ⁩',
'body': '꧁༺Хулиган༻꧂',
'thumbnail': imagen1,
'sourceUrl': 'https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx' }},
'caption': texto,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}меню`, buttonText: {displayText: 'МЕНЮ'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'ДОНАТ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['SDTYYKCHJTYY7UJ',]
export default handler
