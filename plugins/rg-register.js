//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Вы уже зарегистрированы\n\n¿Хочет перерегистрироваться?\n\n 📌Используйте эту команду, чтобы удалить свою запись \n*${usedPrefix}unreg* <Серийный номер>`
  if (!Reg.test(text)) throw `⚠️ Неправильный формат\n\n ✳️ Использование комамдо: *${usedPrefix + command} имя. возраст*\n📌Пример : *${usedPrefix + command}* ${name2}.26`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Имя не может быть пустым'
  if (!age) throw '✳️ Возраст не может быть пустым'
  if (name.length >= 30) throw '✳️ Имя слишком длинное' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Вау, дедушка хочет поиграть в бота'
  if (age < 5) throw '🚼  есть дедушка, малыш, хи хи хи '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *ЗАРЕГИСТРИРОВАННЫЙ* 」─
▢ *Имя:* ${name}
▢ *Возраст* : ${age} лета
▢ *Номер серии* :
${sn}
└──────────────

 *${usedPrefix}help* para ver el Menu
`.trim())
}
handler.help = ['регистрацыя'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'регистрацыя', 'register', 'registrar'] 

export default handler

