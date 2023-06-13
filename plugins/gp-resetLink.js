
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('✅ Групповая ссылка была успешно сброшена\n\n📌 Новая ссылка:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['сброситьссылку']
handler.tags = ['group']
handler.command = ['revoke', 'сброситьссылку', 'anularlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
