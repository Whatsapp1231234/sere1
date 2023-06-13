
let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {

  let chat = global.db.data.chats[m.chat]
  if (!chat.welcome) throw `✳️ Чтобы использовать эту команду, вы должны активировать приветствие с помощью *${usedPrefix}on* приветствие`
  let te = `
  ┌─⊷ *EVENTOS*
  ▢ приветствие
  ▢ bye
  ▢ promote
  ▢ demote
  └───────────
  
  📌 Например :
  
  *${usedPrefix + command}*приветствие @user`

  if (!event) return await m.reply(te)

  let mentions = text.replace(event, '').trimStart()
  let who = mentions ? conn.parseMention(mentions) : []
  let part = who.length ? who : [m.sender]
  let act = false
  m.reply(`✅ Имитирующий ${event}...`)
  switch (event.toLowerCase()) {
    case 'add':
    case 'bienvenida':
    case 'invite':
    case 'welcome':
      act = 'add'
      break
    case 'bye':
    case 'despedida':
    case 'leave':
    case 'remove':
      act = 'remove'
      break

    case 'promote':
    case 'promover':
      act = 'promote'
      break

    case 'demote':
    case 'degradar':
      act = 'demote'
      break

    default:

      throw te
  }
  if (act) return conn.participantsUpdate({
    id: m.chat,
    participants: part,
    action: act
  })
}
handler.help = ['simulate <event> @user']
handler.tags = ['group']
handler.command = ['simular', 'simulate']
handler.admin = true
handler.group = true

export default handler
