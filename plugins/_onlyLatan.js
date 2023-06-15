
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner} ) {
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat];
  
  if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
    let forbidPrefixes = [ "212", "373", "375", "856", "90", "92", "93", "94", "98", "55", "56", "591", "34", "20", "51", "52", "39", "62", "66"];

    for (let prefix of forbidPrefixes) {
      if (m.sender.startsWith(prefix)) {
        m.reply('✳️ Группа создана для русских участников!!!', m.sender)
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        return false;
      }
    }
  }
  
  return true;
}


export default handler;
