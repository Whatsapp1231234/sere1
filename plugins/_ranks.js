
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "Новичок", level: 0 }, { name: "Apprentice", level: 4 }, 
      { name: "Adept", level: 8 }, { name: "Magus", level: 12 }, 
      { name: "Магистр", level: 16 }, { name: "Guardian", level: 20 }, 
      { name: "Чемпион", level: 24 }, { name: "Hero", level: 28 }, 
      { name: "Легенда", level: 32 }, { name: "Myth", level: 36 },
      { name: "Волшебник", level: 48 }, { name: "Archmage", level: 52 }, 
      { name: "Шалфей", level: 56 }, { name: "Divine", level: 60 }, 
      { name: "Всеотец", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}
