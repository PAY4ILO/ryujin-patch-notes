// Ryujin patch notes, newest two weeks only. Older posts are moved into the wiki and deleted.
// d: "YYYY-MM-DD HH:MM", items: [en, ru] pairs, sections: {h: [en, ru], items: [...]},
// approx: [en, ru] label when the exact date is unknown, kind: "summary" | "balance" | "milestone".
// New posts go anywhere in the list: the page sorts by d.
window.PATCHES = [
{
  id: "1023-0058", d: "2026-10-23 00:58",
  items: [
    ["Fixed dash M1s not going the full dash distance", "Исправлено: M1 в рывке не проходили всю дистанцию рывка"],
    ["Fixed holding M1 stopping your second dash", "Исправлено: зажатый M1 обрывал второй рывок"],
    ["Fixed M2s voiding", "Исправлены войды M2 (удар срывался впустую)"],
    ["Changed M2 endlag: recovery ends shortly after the hit for every build", "Изменён эндлаг M2: восстановление заканчивается вскоре после удара для любого билда"],
    ["Fixed long M1 auto run endlag on Sumo, Ancient Sumo, Wrestling, Puroresu, Taekkyeon and Ssamsu", "Исправлен долгий эндлаг M1 при автобеге у Sumo, Ancient Sumo, Wrestling, Puroresu, Taekkyeon и Ssamsu"],
    ["Fixed extra endlag on about 60 skills", "Убран лишний эндлаг примерно у 60 скиллов"],
    ["Fixed skills not casting while holding block", "Исправлено: скиллы не применялись с зажатым блоком"],
    ["Fixed mode buffs staying after the mode ends", "Исправлено: баффы режима оставались после его окончания"],
    ["Fixed 4'11 players falling under the map from Skull Splitter and similar grabs", "Исправлено: игроки ростом 4'11 проваливались под карту от Skull Splitter и похожих захватов"],
    ["Fixed Stomp hitbox not spawning on some floors", "Исправлено: хитбокс Stomp не появлялся на некоторых полах"],
    ["Fixes for Gazelle Punch and Explosive Gazelle Punch hitbox", "Исправления хитбокса Gazelle Punch и Explosive Gazelle Punch"],
    ["Fixes for Capoeira endlag", "Исправления эндлага Capoeira"],
    ["Fixed Rotary Shift voiding both players", "Исправлено: Rotary Shift войдил обоих игроков"],
    ["Fixed Toxin Purging breaking your character while gripping", "Исправлено: Toxin Purging ломал персонажа во время грипа"],
    ["Fixed Edward Wu, Raian, Niko, Pickle, Rei and Gun attacking before their cutscene ends", "Исправлено: Edward Wu, Raian, Niko, Pickle, Rei и Gun атаковали до конца своей катсцены"],
    ["Fixes for Pickle", "Исправления для Pickle"],
    ["Fixed summoned bosses sharing the natural boss reward cooldown", "Исправлено: призванные боссы делили кулдаун наград с обычными боссами"],
    ["Fixed Raian Kure NPC not talking to you again", "Исправлено: NPC Raian Kure не заговаривал с вами повторно"],
    ["Fixed the phone raid cooldown timer looping and showing the wrong time", "Исправлено: таймер кулдауна рейда в телефоне зацикливался и показывал неверное время"]
  ]
},
{
  id: "1023-later", d: "2026-10-23 12:00",
  approx: ["Oct 23–24","23–24 октября"],
  items: [
    ["Fixed allied district payouts ignoring money psyches", "Исправлено: выплаты с союзных районов игнорировали денежные Psyche"],
    ["Fixed gang renames pulling members out of their new gang", "Исправлено: переименование банды выдёргивало участников из их новой банды"],
    ["Fixed gang infamy going below 0", "Исправлено: дурная слава (infamy) банды уходила ниже 0"],
    ["Fixed killing AFK or macroing players starting gang wars and giving war points", "Исправлено: убийство AFK-игроков или игроков на макросе начинало войну банд и давало очки войны"],
    ["Changed gang war territory points", "Изменены очки за территорию в войне банд"],
    ["Optimised cross-server gang updates", "Оптимизированы межсерверные обновления банд"],
    ["Fixed perfect block on mobile", "Исправлен идеальный блок на мобильных"],
    ["Fixed the Kettlebell pushing you through the map", "Исправлено: Kettlebell проталкивал сквозь карту"],
    ["Fixed players on the Kettlebell being impossible to grab", "Исправлено: игроков на Kettlebell нельзя было схватить"],
    ["Fixed PvP events breaking your tools and auto macro while macroing", "Исправлено: PvP-ивенты ломали инструменты и автомакрос во время макроса"],
    ["Fixed some physics accessories not moving", "Исправлено: некоторые аксессуары с физикой не двигались"],
    ["Fixed Otakemaru, Grim Scythe and Heavenly Demon Blade aura floating off on rerolled positions", "Исправлено: аура Otakemaru, Grim Scythe и Heavenly Demon Blade отлетала при перероллнутых позициях"],
    ["Fixed Otakemaru and other angled back accessories bending on wider bodies", "Исправлено: Otakemaru и другие наклонные аксессуары на спине гнулись на широких телах"],
    ["Fixed the Disable Accessories Physics setting", "Исправлена настройка Disable Accessories Physics"],
    ["Fixed Disable Rain only working on the next rain", "Исправлено: Disable Rain срабатывал только со следующего дождя"],
    ["Fixed the infinite rejoin loop and raids not loading", "Исправлены бесконечный цикл перезахода и незагружающиеся рейды"],
    ["Fixed some characters never loading or loading without their appearance", "Исправлено: некоторые персонажи не загружались или загружались без внешности"],
    ["Fixed auto macro rejoins not saving progress", "Исправлено: перезаходы автомакроса не сохраняли прогресс"],
    ["Changed updates and restarts to teleport you to a fresh server instead of kicking you", "Обновления и перезапуски теперь переносят на свежий сервер вместо кика"],
    ["Fixed old servers never restarting", "Исправлено: старые серверы никогда не перезапускались"],
    ["Fixed the Discord merchant and accessory shop bots", "Исправлены Discord-боты торговца и магазина аксессуаров"],
    ["Fixed respawn memory leaks", "Исправлены утечки памяти при возрождении"],
    ["Optimised the main game map loading", "Оптимизирована загрузка основной карты"],
    ["Optimised rain", "Оптимизирован дождь"],
    ["Optimised accessory physics", "Оптимизирована физика аксессуаров"]
  ]
},
{
  id: "1024-1915", d: "2026-10-24 19:15",
  items: [
    ["Fixed PB / Lean Reflex", "Исправлены PB / Lean Reflex"],
    ["Fixed Guihun randomly gaining damage", "Исправлено: Guihun случайно набирал урон"],
    ["Fixed boss M1s", "Исправлены M1 боссов"],
    ["Fixed being able to PB bosses in the middle of their M1s", "Исправлено: боссов можно было ловить идеальным блоком (PB) посреди их M1"],
    ["Fixed bosses moonwalking", "Исправлено: боссы ходили лунной походкой"],
    ["Fixed bosses and open world NPCs having no grounded animation", "Исправлено: у боссов и NPC открытого мира не было анимации лежания на земле"],
    ["Fixed NPC dialogues getting stuck", "Исправлено: диалоги NPC зависали"]
  ]
},
{
  id: "1025-0100", d: "2026-10-25 01:00",
  items: [
    ["Added gang name colours above players' heads: same gang (green), allied gangs (blue), other gangs (red), no gang (white)", "Цвет названия банды над головой: своя банда — зелёный, союзные — синий, другие — красный, без банды — белый"],
    ["Fixed bounty and fame colours not showing on the leaderboard on join", "Исправлено: цвета награды (bounty) и славы не отображались в таблице лидеров при входе"],
    ["Fixes for gang relations", "Исправления отношений банд"]
  ]
},
{
  id: "1025-0127", d: "2026-10-25 01:27", kind: "milestone",
  items: [
    ["Published all the changes so far", "Выпущены все изменения на данный момент"]
  ]
},
{
  id: "balance-1025", d: "2026-10-25 01:30", kind: "balance",
  approx: ["Undated (latest)","Без даты (последнее)"],
  title: ["Balance changes","Изменения баланса"],
  sections: [
    { h: ["Softcaps","Софткапы"], items: [
      ["Durability 32000 softcap: 10% → 15%", "Софткап выносливости (Durability) на 32000: 10% → 15%"]
    ]},
    { h: ["Tokita","Tokita"], items: [
      ["Flame Kata: Agility/160 → Agility/155", "Flame Kata: Agility/160 → Agility/155"]
    ]},
    { h: ["Aikido","Aikido"], items: [
      ["Skyward Throw: success CD 40s → 35s; base damage 13 → 12.2; now also deals 2% max health damage; 1 arm break → 2 arm breaks", "Skyward Throw: кулдаун при успехе 40 с → 35 с; базовый урон 13 → 12.2; теперь также наносит 2% от макс. здоровья; 1 перелом руки → 2 перелома рук"],
      ["Rotary Shift: 1 leg break → 1 leg + 2 arm breaks", "Rotary Shift: 1 перелом ноги → 1 ноги + 2 рук"]
    ]},
    { h: ["Low Stance (Aikido)","Low Stance (Aikido)"], items: [
      ["Strength/160 → Strength/130", "Strength/160 → Strength/130"],
      ["Agility/200 → Agility/185", "Agility/200 → Agility/185"],
      ["UM/333 → UM/450 (1350)", "UM/333 → UM/450 (1350)"]
    ]},
    { h: ["Hatsumi","Hatsumi"], items: [
      ["M2 comes out 25% faster", "M2 выходит на 25% быстрее"],
      ["15% counter damage buff → 12.5% Aikido and counter damage buff (Aikido counters don't get this buff twice)", "Бафф урона контратак 15% → 12.5% к урону Aikido и контратак (контратаки Aikido не получают его дважды)"],
      ["Counters' added BS scaling: bs/2000 → bs/1000", "Добавочный скейлинг контратак от BS: bs/2000 → bs/1000"]
    ]},
    { h: ["Lightning God","Lightning God"], items: [
      ["Teleport dashes removed and moved to the “Electrified Dashes” card; instead your dashes now go 15% further", "Телепорт-рывки убраны и перенесены в карту «Electrified Dashes»; вместо этого рывки теперь на 15% дальше"]
    ]},
    { h: ["Guihun","Guihun"], items: [
      ["Overclocked: Guihun % increase 15% → 10%, duration 25% → 33% shorter", "Overclocked: прирост Guihun % 15% → 10%, длительность короче на 25% → на 33%"],
      ["Each 1% increases muscle by 1% → 0.75%", "Каждый 1% увеличивает мышцы на 1% → 0.75%"],
      ["Each 1% increases the damage buff by 1% → 0.75%", "Каждый 1% увеличивает бафф урона на 1% → 0.75%"]
    ]},
    { h: ["Final Form","Final Form"], items: [
      ["Price reduced to 1250", "Цена снижена до 1250"],
      ["10% mode bar gain removed", "Убран прирост шкалы режима на 10%"],
      ["Health and damage debuff 5% → 7.5%", "Дебафф здоровья и урона 5% → 7.5%"]
    ]},
    { h: ["Professional Pickpocket","Professional Pickpocket"], items: [
      ["Cooldown 5 minutes per player → 15 minutes", "Кулдаун 5 минут на игрока → 15 минут"]
    ]},
    { h: ["Carnage","Carnage"], items: [
      ["1.25% per 10% missing health → 1.5%", "1.25% за каждые 10% недостающего здоровья → 1.5%"],
      ["Movement speed when hitting someone below 50%: 7.5% → 10%", "Скорость при ударе по цели ниже 50% HP: 7.5% → 10%"]
    ]},
    { h: ["Muay Thai and its stances","Muay Thai и его стойки"], items: [
      ["Now deal 20% less damage if you're Muscle", "Теперь наносят на 20% меньше урона, если у вас мышечное телосложение"]
    ]},
    { h: ["Poise","Пойз (Poise)"], items: [
      ["Added to the poise countdown stop list: Kinjite, Bear Hug, 5 Hit Barrage, Mountain Breaker, Slam Rush, Brutalize, Dress, Flicker Jabs (Wongsawat M2)", "В список остановки отсчёта пойза добавлены: Kinjite, Bear Hug, 5 Hit Barrage, Mountain Breaker, Slam Rush, Brutalize, Dress, Flicker Jabs (M2 Wongsawat)"]
    ]},
    { h: ["Global hyperarmor cooldown","Общий кулдаун гиперброни"], items: [
      ["Muscle and Fat: 3s → 5s", "Мышцы и жир: 3 с → 5 с"],
      ["Lean: 3s → 12s", "Худое телосложение: 3 с → 12 с"]
    ]},
    { h: ["Stat gain buffs","Баффы прироста статов"], items: [
      ["Removed: Muscle stamina gain buff, Fat durability gain buff, 0 muscle agility gain buff", "Убраны: бафф прироста стамины у мышц, бафф прироста выносливости у жира, бафф прироста ловкости при 0 мышц"]
    ]},
    { h: ["Trainings","Тренировки"], items: [
      ["Rope: 0.12 → 0.24 Stamina", "Скакалка (Rope): 0.12 → 0.24 стамины"],
      ["Pullups: 0.24 → 0.48 Stamina", "Подтягивания (Pullups): 0.24 → 0.48 стамины"],
      ["Situp: 0.1 → 0.115 Durability", "Пресс (Situp): 0.1 → 0.115 выносливости"],
      ["Roadwork Long: 6.4 → 12.8 Stamina", "Длинная пробежка (Roadwork Long): 6.4 → 12.8 стамины"],
      ["Roadwork Short: 3 → 6 Stamina", "Короткая пробежка (Roadwork Short): 3 → 6 стамины"],
      ["Treadmill with Breathing Mask: 0.06 → 0.12 Stamina", "Беговая дорожка с дыхательной маской: 0.06 → 0.12 стамины"],
      ["Weight Twist, no weight: 0.165 → 0.19 Durability", "Weight Twist без веса: 0.165 → 0.19 выносливости"],
      ["Weight Twist, weight 1: 0.155 → 0.178 Durability", "Weight Twist, вес 1: 0.155 → 0.178 выносливости"],
      ["Weight Twist, weight 2: 0.145 → 0.166 Durability", "Weight Twist, вес 2: 0.145 → 0.166 выносливости"],
      ["Weight Twist, weight 3: 0.137 → 0.155 Durability", "Weight Twist, вес 3: 0.137 → 0.155 выносливости"],
      ["Durability Training: 0.0045 → 0.0055 per 1% HP lost; min 0.0006 → capped at 0.00065; max 0.025 → 0.0275", "Тренировка выносливости (Durability Training): 0.0045 → 0.0055 за 1% потерянного HP; минимум 0.0006 → кап 0.00065; максимум 0.025 → 0.0275"]
    ]},
    { h: ["New trainings rebalance","Ребаланс новых тренировок"], items: [
      ["Bicycle Crunch: Durability 0.075 → 0.11, Stamina 0.05 → 0.1", "Bicycle Crunch: выносливость 0.075 → 0.11, стамина 0.05 → 0.1"],
      ["Kettlebell Pistol Squat, no weight: Strength 0.14 → 0.12, Agility 0.11 → 0.1, LM 0.16 → 0.12", "Kettlebell Pistol Squat без веса: сила 0.14 → 0.12, ловкость 0.11 → 0.1, LM 0.16 → 0.12"],
      ["Kettlebell Pistol Squat, weight 1: Strength 0.13 → 0.11, Agility 0.1 → 0.09, LM 0.19 → 0.15", "Kettlebell Pistol Squat, вес 1: сила 0.13 → 0.11, ловкость 0.1 → 0.09, LM 0.19 → 0.15"],
      ["Kettlebell Pistol Squat, weight 2: Strength 0.11 → 0.09, Agility 0.09 → 0.08, LM 0.23 → 0.19", "Kettlebell Pistol Squat, вес 2: сила 0.11 → 0.09, ловкость 0.09 → 0.08, LM 0.23 → 0.19"],
      ["Speedball: Agility 0.025 → 0.125, Battle Sense 0.01 → 0.05, interval 0.15s → 0.45s", "Speedball: ловкость 0.025 → 0.125, Battle Sense 0.01 → 0.05, интервал 0.15 с → 0.45 с"]
    ]},
    { h: ["Systems","Системы"], items: [
      ["If your Agility is 30% higher than your Strength, it contributes to stamina drain instead, at 75% effectiveness", "Если ловкость на 30% выше силы, расход стамины считается от неё с эффективностью 75%"]
    ]},
    { h: ["Gun Park rewards","Награды Gun Park"], items: [
      ["Guaranteed: ₩1,000,000 → ₩1,250,000; 75 → 100 stats", "Гарантированная: ₩1 000 000 → ₩1 250 000; 75 → 100 статов"],
      ["Common: ₩1,000,000 → ₩1,500,000; 25 → 75 RC; 50 → 75 stats", "Обычная: ₩1 000 000 → ₩1 500 000; 25 → 75 RC; 50 → 75 статов"],
      ["Rare: ₩1,250,000 → ₩2,000,000; 50 → 100 RC; 75 → 125 stats", "Редкая: ₩1 250 000 → ₩2 000 000; 50 → 100 RC; 75 → 125 статов"],
      ["Legendary: ₩3,500,000 → ₩5,000,000; 100 → 175 RC; 100 → 150 stats", "Легендарная: ₩3 500 000 → ₩5 000 000; 100 → 175 RC; 100 → 150 статов"],
      ["Mythic: 150 → 250 RC; 150 → 200 stats", "Мифическая: 150 → 250 RC; 150 → 200 статов"]
    ]}
  ]
},
{
  id: "dc-1565440785225097391", d: "2026-10-29 22:02", tr: false,
  items: [
    ["Twister Productions #📜│updates", "Twister Productions #📜│updates"]
  ]
},
{
  id: "dc-1565612090973102226", d: "2026-10-30 09:23", tr: false,
  items: [
    ["Ryujin Update 1.9", "Ryujin Update 1.9"],
    ["Table of Contents New Changes QOL Codes Information Full Update Log To view information on a certain topic, click the links above or select the tab on the left.", "Table of Contents New Changes QOL Codes Information Full Update Log To view information on a certain topic, click the links above or select the tab on the left."]
  ]
},
{
  id: "dc-1566223232665649305", d: "2026-11-01 01:51", tr: false,
  sections: [
    { h: ["## New","## New"], items: [
      ["Added an Auto Macro button to the top-left menu", "Added an Auto Macro button to the top-left menu"],
      ["Added an \"Auto Use Leg Weights\" setting. Auto Use Vests now equips only the vest, so UM/LM players can pick one", "Added an \"Auto Use Leg Weights\" setting. Auto Use Vests now equips only the vest, so UM/LM players can pick one"],
      ["Added a \"Hair Pattern Glow\" setting under Effects to tone down emissive hair patterns", "Added a \"Hair Pattern Glow\" setting under Effects to tone down emissive hair patterns"],
      ["Added a Sell All button to every Exchange card, with a confirmation prompt. Right-click Sell to sell 10 at once", "Added a Sell All button to every Exchange card, with a confirmation prompt. Right-click Sell to sell 10 at once"],
      ["Added Mobile Perfect Block: double-tap the Block button to Perfect Block.", "Added Mobile Perfect Block: double-tap the Block button to Perfect Block."]
    ]},
    { h: ["## Changes","## Changes"], items: [
      ["Changed picker menus to be bigger", "Changed picker menus to be bigger"],
      ["Changed Edward Wu's spawn chance to go up by 10% every time Raian Kure spawns, resetting when Wu spawns", "Changed Edward Wu's spawn chance to go up by 10% every time Raian Kure spawns, resetting when Wu spawns"],
      ["Changed gang-mates so they can take you out of spawn protection by M1ing you while you have Auto Macro on", "Changed gang-mates so they can take you out of spawn protection by M1ing you while you have Auto Macro on"],
      ["Changed Clan and Height Rerolls from the QP Shop to go to your saved rerolls in the Robux Shop instead of rolling instantly", "Changed Clan and Height Rerolls from the QP Shop to go to your saved rerolls in the Robux Shop instead of rolling instantly"]
    ]},
    { h: ["## Fixes","## Fixes"], items: [
      ["Fixed the Extras tab (Mode & Damage Over Time) and Information tab stat lists cutting off the top entries at resolutions other than 1080p", "Fixed the Extras tab (Mode & Damage Over Time) and Information tab stat lists cutting off the top entries at resolutions other than 1080p"],
      ["Fixed some Bosses  being stiff (Standing Still between combos)", "Fixed some Bosses  being stiff (Standing Still between combos)"]
    ]}
  ]
}
];
