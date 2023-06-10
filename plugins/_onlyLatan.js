
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner} ) {
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat];
  
  if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
    let forbidPrefixes = [ "7", "9"];

    for (let prefix of forbidPrefixes) {
      if (m.sender.startsWith(prefix)) {
        m.reply('✳️ В эту группу допускаются только русско говорящие люди', m.sender)
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'удалить');
        return false;
      }
    }
  }
  
  return true;
}


export default handler;
