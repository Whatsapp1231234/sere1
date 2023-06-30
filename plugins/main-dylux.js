
let handler = async (m, { conn }) => {

m.reply(`
≡ Группа по боту
≡ Здесь вы можете 
◈ ━━━━━━━━━━ ◈
▢ Проверить бота 
▢ Проверить функцыонал
▢ Задать вопросы о боте
▢ Выбрать бота который вас устраивает
◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Группа *1*
https://chat.whatsapp.com/ECQjIoZ8vwLBywJE6UOTXc

`)

}
handler.help = ['группа']
handler.tags = ['main']
handler.command = ['группа', 'groupdylux', 'dxgp', 'dygp', 'gpdylux', 'support'] 

export default handler
