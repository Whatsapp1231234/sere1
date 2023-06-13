let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'открыть': 'not_announcement',
        'закрыть': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ Выберите опцию:*
  *▢ ${usedPrefix + command} закрыть*
  *▢ ${usedPrefix + command} открыть*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['группу *открыть/закрыть*']
handler.tags = ['group']
handler.command = ['group', 'группу'] 
handler.admin = true
handler.botAdmin = true

export default handler
