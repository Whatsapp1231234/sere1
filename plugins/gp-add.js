import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] EL OWNER TIENE RESTRINGIDO (_enable restrict_ / _disable restrict_) EL USO DE ESTE COMANDO*'
try {
  let _participants = participants.map(user => user.jid)
  let users = (await Promise.all(
    text.split(',')
      .map(v => v.replace(/[^0-9]/g, ''))
      .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
      .map(async v => [
        v,
        await conn.onWhatsApp(v + '@s.whatsapp.net')
      ])
  )).filter(v => v[1]).map(v => v[0] + '@c.us')
  let response = await conn.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
}))})
    const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
    const add = getBinaryNodeChild(response, 'add')
    const participant = getBinaryNodeChildren(add, 'participant')
    for (const user of participant.filter(item => item.attrs.error == 403)) {
        const content = getBinaryNodeChild(user, 'add_request')
        const invite_code = content.attrs.code
        const invite_code_exp = content.attrs.expiration
        let teks = `*[❗ВАЖНО❗] НЕ УДАЛОСЬ ДОБАВИТЬ ВВЕДЕННЫЙ МНОЙ НОМЕР, ЭТО МОЖЕТ ПРОИЗОЙТИ ИЗ-ЗА ТОГО, ЧТО НОМЕР НЕВЕРНЫЙ, ЧЕЛОВЕК НЕДАВНО ПОКИНУЛ ГРУППУ ИЛИ ЧЕЛОВЕК НАСТРОИЛ КОНФИДЕНЦИАЛЬНОСТЬ СВОИХ ГРУПП, МЫ СОВЕТУЕМ ВАМ ОТПРАВИТЬ ЕМУ ПРИГЛАШЕНИЕ ВРУЧНУЮ!!*`
        m.reply(teks, null, {
        mentions: conn.parseMention(teks)
})}
} catch (e) {
throw m.reply('*[❗INFO❗] НЕ УДАЛОСЬ ДОБАВИТЬ ВВЕДЕННЫЙ МНОЙ НОМЕР, ЭТО МОЖЕТ ПРОИЗОЙТИ ИЗ-ЗА ТОГО, ЧТО НОМЕР НЕВЕРНЫЙ, ЧЕЛОВЕК НЕДАВНО ПОКИНУЛ ГРУППУ ИЛИ ЧЕЛОВЕК НАСТРОИЛ КОНФИДЕНЦИАЛЬНОСТЬ СВОИХ ГРУПП, МЫ СОВЕТУЕМ ВАМ ОТПРАВИТЬ ПРИГЛАШЕНИЕ ВРУЧНУЮ!!*')}
}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(добавить|agregar|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler


