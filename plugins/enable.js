//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	
const sections = [
   {
	title: `≡ Список опций`,
	rows: [
	{title: "🔮 | Приветствие", rowId: `${usedPrefix + command} приветствие`},
	{title: "🌎 | Публичный", rowId: `${usedPrefix + command} публичный`},,
	{title: "🔗 | Антиссылка", rowId: `${usedPrefix + command} антиссылка`},
    {title: "🚫 | Противоскользящий", rowId: `${usedPrefix + command} противоскользящий`},
	{title: "⏏️ | Уроввень", rowId: `${usedPrefix + command} уроввень`},
	{title: "🗣️ | Чат-бот", rowId: `${usedPrefix + command} чатбот`},
	{title: "🔎 | Обнаруживать", rowId: `${usedPrefix + command} обнаруживать`},
	{title: "🛡️ | Ограничивать", rowId: `${usedPrefix + command} ограничивать`},
	{title: "👥 | Только-группы", rowId: `${usedPrefix + command} толькогруппы`}
	]
    },
]

const listMessage = {
  text: '\Здесь есть список того, что вы можете включать и выключать',
  footer: fgig,
  title: `≡ Список опций`,
  buttonText: "Нажмите Здесь",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'приветствие':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      
      case 'обнаруживать':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
    
    case 'противоскользящий':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'публичный':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'антиссылка':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'sololatinos':
      case 'sololatino':
      case 'onlylatinos':
      case 'onlylat':
      case 'onlylatan':
      case 'sololatan':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.onlyLatinos = isEnable
      break
      
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'уроввень':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'чатбот':
     case 'autosimi':
     case 'autosimsimi':
      isUser = true
      user.chatbot = isEnable
     break
     
    case 'ограничивать':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'только группы':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
    default:
      if (!/[01]/.test(command)) return m.reply(`
≡Список опций

┌─⊷ *АДМИН*
▢ приветствие
▢ антиссылка
▢ обнаруживать
└───────────── 
┌─⊷ *ПОЛЬЗОВАТЕЛИ*
▢ уровень
▢ чат-бот 
└─────────────
┌─⊷ *ВЛАДЕЛЕЦ*
▢ публичный
└─────────────
*📌 Выбор команды :*
*${usedPrefix}включить* приветствие
*${usedPrefix}выключить* приветствие
`)
      throw false
}

m.reply(`
✅ *${type}*  *${isEnable ? 'Activó' : 'Готово'}* ${isAll ? 'для этого бота' : isUser ? '' : 'для этого чата'}
`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['nable']
handler.command = /^((вкл|выкл)ючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
