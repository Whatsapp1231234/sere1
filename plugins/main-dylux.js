
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

`)

}
handler.help = ['Группа']
handler.tags = ['main']
handler.command = ['Группа', 'groupdylux', 'dxgp', 'dygp', 'gpdylux', 'support'] 

export default handler
