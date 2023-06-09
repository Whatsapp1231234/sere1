let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ НОМЕР МОЕГО СОЗДАТЕЛЯ wa.me/79531126750*
`.trim()   
let buttonMessage= {
'document': { url: `https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx` },
'mimetype': `application/${document}`,
'fileName': `「 Traducciones de Manga 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ГРУППА БОТА ꧁༺Хулиган༻꧂ ⁩',
'body': '꧁༺Хулиган༻꧂',
'thumbnail': imagen1,
'sourceUrl': 'https://chat.whatsapp.com/CEYmCcV6UgO19tO3n56VOx' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}менюшка`, buttonText: {displayText: 'МЕНЮ'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'ДОНАТ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝓡𝓮𝔂 𝓔𝓷𝓭𝔂𝓶𝓲𝓸𝓷 👑;;;\nFN:𝓡𝓮𝔂 𝓔𝓷𝓭𝔂𝓶𝓲𝓸𝓷 👑\nORG:𝓡𝓮𝔂 𝓔𝓷𝓭𝔂𝓶𝓲𝓸𝓷 👑\nTITLE:\nitem1.TEL;waid=5215517489568:+5215533827255\nitem1.X-ABLabel:𝓡𝓮𝔂 𝓔𝓷𝓭𝔂𝓶𝓲𝓸𝓷\nX-WA-BIZ-DESCRIPTION:[❗] CONTACTA A ESTE NUM PARA COSAS IMPORTANTES.\nX-WA-BIZ-NAME:𝓡𝓮𝔂 𝓔𝓷𝓭𝔂𝓶𝓲𝓸𝓷 👑\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Rey Endymion 👑', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(владелец|создатель|creador|propietario)$/i
export default handler
