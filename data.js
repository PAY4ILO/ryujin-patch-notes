// Ryujin patch notes, newest two weeks only. Older posts are moved into the wiki and deleted.
// d: "YYYY-MM-DD HH:MM", items: [en, ru] pairs, sections: {h: [en, ru], items: [...]},
// approx: [en, ru] label when the exact date is unknown, kind: "summary" | "balance" | "milestone".
// New posts go anywhere in the list: the page sorts by d.
window.PATCHES = [
{
  id: "1016-1957", d: "2026-10-16 19:57",
  items: [
    ["Added a “Disable Mode Camera Cutscene” setting (Settings → Other) that keeps your camera free when you pop mode", "Добавлена настройка «Disable Mode Camera Cutscene» (Настройки → Other): камера остаётся свободной при включении режима"],
    ["Added Psyche restrictions to the Psyches Index (max copies and max per group)", "В Индекс Psyche добавлены ограничения (макс. копий и макс. на группу)"],
    ["Every Mode page in the Index now shows the real in-game numbers (25 values across 11 modes were wrong, e.g. Trance State is 15% damage)", "Все страницы режимов в Индексе теперь показывают реальные игровые числа (25 значений в 11 режимах были неверны, например Trance State — это 15% урона)"],
    ["Fixed Animal Instinct's M2 stats in the Index not matching the game", "Исправлено: статы M2 у Animal Instinct в Индексе не совпадали с игрой"],
    ["Fixed Congenital UI's reflex charge buff giving 0.2% instead of 20%", "Исправлено: бафф заряда рефлекса у Congenital UI давал 0.2% вместо 20%"],
    ["Fixed Cockroach Tackle still grabbing after getting Redirected or Countered", "Исправлено: Cockroach Tackle всё равно хватал после Redirect или контратаки"],
    ["Fixed grabs on knocked down players giving no stun", "Исправлено: захваты сбитых с ног игроков не давали оглушения"],
    ["Fixed extra endlag on Meia Lua de Compasso and Caveirinha Zingada", "Убран лишний эндлаг у Meia Lua de Compasso и Caveirinha Zingada"],
    ["Reduced the Jiu clan armbar endlag", "Уменьшен эндлаг рычага локтя (armbar) клана Jiu"],
    ["Fixed a rare endless running animation after using a skill that moves you forward", "Исправлена редкая бесконечная анимация бега после скилла с рывком вперёд"],
    ["Duel rings no longer push players back", "Дуэльные ринги больше не отталкивают игроков"],
    ["Fixed right leg tattoos (Flower, Calm Ocean) and right leg scars not showing", "Исправлено: не отображались татуировки (Flower, Calm Ocean) и шрамы на правой ноге"],
    ["Fixed the gym subscription timer showing the wrong time left", "Исправлено: таймер абонемента в зал показывал неверное оставшееся время"],
    ["Food app list now scrolls further, so Coffee and Banana are easier to buy on mobile", "Список в приложении еды теперь прокручивается дальше: Coffee и Banana проще купить на телефоне"]
  ]
},
{
  id: "1016-2019", d: "2026-10-16 20:19",
  items: [
    ["Fixed Five Hit Barrage ignoring muscle softcaps, so muscle no longer scales its damage without limit", "Исправлено: Five Hit Barrage игнорировал софткапы мышц, теперь мышцы не разгоняют его урон без предела"],
    ["Fixed the mode bar sometimes showing partly full when joining a server", "Исправлено: шкала режима иногда была частично заполнена при входе на сервер"],
    ["Wrestling and Sumo Index pages now show their muscle and fat HP buffs", "Страницы Wrestling и Sumo в Индексе теперь показывают баффы HP от мышц и жира"],
    ["Fixed your own name and gang name showing above you after dying", "Исправлено: после смерти над вами показывались ваш ник и название банды"]
  ]
},
{
  id: "1017-0532", d: "2026-10-17 05:32",
  items: [
    ["Added emote syncing: using the same emote as someone near you syncs your animation and sound with theirs", "Добавлена синхронизация эмоций: если рядом кто-то делает ту же эмоцию, анимация и звук синхронизируются"],
    ["Added a Mobile section in Settings with mobile button size, button opacity and hotbar size (Small, Medium, Large)", "В настройках появился раздел Mobile: размер и прозрачность кнопок, размер хотбара (Small, Medium, Large)"],
    ["Fixed the mobile lock button sometimes not locking the screen", "Исправлено: кнопка блокировки экрана на мобильных иногда не срабатывала"],
    ["Disable Mode Camera Cutscene now also removes the black bars and screen effects, and keeps your HUD and chat visible", "Disable Mode Camera Cutscene теперь также убирает чёрные полосы и экранные эффекты, а HUD и чат остаются видимыми"],
    ["Fixed Strengthened Muscles (Congenital Ultra Instinct card) giving damage reduction instead of muscle scaling", "Исправлено: Strengthened Muscles (карта Congenital Ultra Instinct) давала снижение урона вместо скейлинга от мышц"],
    ["Fixed Chi Blockage not breaking ribs", "Исправлено: Chi Blockage не ломал рёбра"],
    ["Fixed Torchstep costing 30 stamina instead of 80", "Исправлено: Torchstep стоил 30 стамины вместо 80"],
    ["Shoulder Throw now breaks ribs instead of arms", "Shoulder Throw теперь ломает рёбра, а не руки"],
    ["Thunder Clap, Swing and Three Piece Breaker now apply all of their bone breaks, and Musūren now breaks the jaw", "Thunder Clap, Swing и Three Piece Breaker теперь наносят все свои переломы, а Musūren ломает челюсть"],
    ["Amateur Armbar now has less endlag on hit and a bit more on miss", "У Amateur Armbar меньше эндлага при попадании и немного больше при промахе"],
    ["Fixed Ssamu Taekkyeon's 3rd M1 not slowing you like normal Taekkyeon", "Исправлено: 3-й M1 у Ssamu Taekkyeon не замедлял, как у обычного Taekkyeon"],
    ["Fixed trainer spars sometimes not teleporting you to the arena and still giving mastery", "Исправлено: спарринги с тренером иногда не телепортировали на арену, но всё равно давали мастерство"],
    ["Fixed Edward Wu attacking during his intro cutscene", "Исправлено: Edward Wu атаковал во время своей вступительной катсцены"],
    ["Updated the Index for 33 skills: hit counts, hyperarmor, bleed and burn, stamina drain, self damage, and separate ragdoll, ground, wall and counter damage", "Обновлён Индекс 33 скиллов: число ударов, гиперброня, кровотечение и горение, расход стамины, урон по себе и отдельный урон в рэгдолле, на земле, о стену и от контратаки"],
    ["Fixed the Fat Index saying fat gives up to +80% damage (it's +60%)", "Исправлено: в Индексе жира было написано, что жир даёт до +80% урона (на деле +60%)"],
    ["Fixed the Softcaps Index muscle numbers not matching the stat check", "Исправлено: числа мышц в Индексе софткапов не совпадали с проверкой статов"],
    ["Fixed the Judo and Muay Thai Pure Style Passive text in the Index", "Исправлен текст пассивок чистого стиля Judo и Muay Thai в Индексе"],
    ["Added the list of psyches you can only have 1 of to the Psyches Index", "В Индекс Psyche добавлен список Psyche, которые можно иметь только в одном экземпляре"],
    ["Wrestling and Sumo HP buffs now have their own page in the Styles Index", "Баффы HP у Wrestling и Sumo вынесены на отдельную страницу Индекса стилей"]
  ]
},
{
  id: "1017-1842", d: "2026-10-17 18:42",
  items: [
    ["Fixed multi-hit skills like Sunfire and Flurry Kick not giving poise on their last hit: they now give 1 poise on the first hit and 1 on the last", "Исправлено: многоударные скиллы вроде Sunfire и Flurry Kick не давали пойз последним ударом; теперь 1 пойз за первый удар и 1 за последний"],
    ["Fixed Jack of All Trades not boosting grab skills", "Исправлено: Jack of All Trades не усиливал скиллы-захваты"],
    ["Fixed the Index showing the wrong lean caps for heights", "Исправлено: Индекс показывал неверные капы худобы (lean) для разного роста"],
    ["Fixed the Bikini Top keeping a mode's skin tone after the mode ends (not following advance nor removal's colors)", "Исправлено: Bikini Top сохранял цвет кожи режима после его окончания (не следовал цветам ни при включении, ни при снятии)"],
    ["Fixed perfect blocking sometimes keeping you stuck in block after letting go", "Исправлено: после идеального блока иногда залипал блок, даже когда кнопку отпустили"],
    ["Fixed landing Jiu's Armbar locking you in place", "Исправлено: попадание Armbar у Jiu обездвиживало вас самих"],
    ["Fixed the name above the health bar not updating when you remove your title", "Исправлено: имя над полоской здоровья не обновлялось после снятия титула"]
  ]
},
{
  id: "1017-1847", d: "2026-10-17 18:47", kind: "milestone",
  items: [
    ["Published", "Выпущено в игру"]
  ]
},
{
  id: "1017-1931", d: "2026-10-17 19:31",
  items: [
    ["Fixed Duel Zone bugs", "Исправлены баги дуэльной зоны"],
    ["Fixed muscle reflex bugs", "Исправлены баги рефлекса у мышечного телосложения"],
    ["Fixed the gun being able to go under the map", "Исправлено: пистолет мог провалиться под карту"],
    ["Fixed dash issues when you enter a server", "Исправлены проблемы с рывком при входе на сервер"],
    ["Fixed the bus stop giving a heart attack", "Исправлено: остановка автобуса вызывала сердечный приступ"],
    ["Fixed duel pushback", "Исправлено отталкивание в дуэлях"],
    ["Achievement fixes", "Исправления достижений"],
    ["Revamped the gang relations system", "Переработана система отношений банд"],
    ["Further gang system bug fixes and optimisations", "Ещё исправления и оптимизации системы банд"],
    ["Removed some unnecessary logging on console", "Убрано лишнее логирование в консоли"],
    ["A bunch of map and graphics optimisations", "Множество оптимизаций карт и графики"]
  ],
  note: ["All changes published.","Все изменения выпущены в игру."]
},
{
  id: "1018-0209", d: "2026-10-18 02:09", kind: "summary",
  title: ["New QoLs and More! (summary of recent changes)","Новые удобства и не только! (сводка последних изменений)"],
  sections: [
    { h: ["Settings","Настройки"], items: [
      ["Added a Disable Lighting Bloom option", "Добавлена опция отключения свечения (Disable Lighting Bloom)"],
      ["Added a Disable Depth of Field option", "Добавлена опция отключения глубины резкости (Disable Depth of Field)"],
      ["Added a Low Detail Mode option", "Добавлен режим низкой детализации (Low Detail Mode)"],
      ["Added a Disable Detailed Textures option", "Добавлена опция отключения детальных текстур (Disable Detailed Textures)"],
      ["Added a Hide Player Scars option", "Добавлена опция скрытия шрамов игроков (Hide Player Scars)"],
      ["Added a Disable Mode Camera Cutscene setting (Settings → Other) that keeps your camera free when you pop mode", "Добавлена настройка Disable Mode Camera Cutscene (Настройки → Other): камера остаётся свободной при включении режима"],
      ["Added a Mobile section in Settings with mobile button size, button opacity and hotbar size (Small, Medium, Large)", "В настройках появился раздел Mobile: размер и прозрачность кнопок, размер хотбара (Small, Medium, Large)"]
    ]},
    { h: ["Index","Индекс"], items: [
      ["Added Pure-Style Passives to the Index", "В Индекс добавлены пассивки чистых стилей"],
      ["Added how much damage % you need to deal before getting boss drops to the Index", "В Индекс добавлено, какой % урона нужен для дропа с босса"],
      ["Added a Softcaps tab to the Index", "В Индекс добавлена вкладка софткапов"],
      ["Added M1 & M2 stats (damage, range, debounce, cooldowns) for every style to the Index", "В Индекс добавлены статы M1 и M2 (урон, дальность, дебаунс, кулдауны) для каждого стиля"],
      ["Added Psyche restrictions to the Psyches Index (max copies and max per group)", "В Индекс Psyche добавлены ограничения (макс. копий и макс. на группу)"],
      ["Every Mode page in the Index now shows the real in-game numbers", "Все страницы режимов в Индексе теперь показывают реальные игровые числа"]
    ]},
    { h: ["QoL","Удобство"], items: [
      ["Added Emote Syncing: using the same emote as someone near you syncs your animation and sound with theirs", "Синхронизация эмоций: если рядом кто-то делает ту же эмоцию, анимация и звук синхронизируются"],
      ["You can now sell Boss Crystals (₩10,000,000) and Gene Unlimiters (₩5,000,000) to the Black Market", "Теперь на Чёрном рынке можно продать Boss Crystal (₩10 000 000) и Gene Unlimiter (₩5 000 000)"],
      ["Mode bar now waits 3 seconds out of combat before it starts dropping", "Шкала режима начинает убывать только через 3 секунды вне боя"],
      ["Players with auto macro on for 20+ minutes no longer give gang war points", "Игроки с автомакросом 20+ минут больше не дают очков в войне банд"],
      ["Holding districts and the gang base now gives points during gang wars", "Удержание районов и базы банды даёт очки во время войн банд"],
      ["Food app list is now in the middle and scrolls further, so Coffee and Banana are easier to buy on mobile", "Список в приложении еды теперь по центру и прокручивается дальше: Coffee и Banana проще купить на телефоне"],
      ["Duel rings no longer push players back", "Дуэльные ринги больше не отталкивают игроков"]
    ]},
    { h: ["Boss Card","Карта босса"], items: [
      ["Thug Crystal (Professional Pickpocket) cooldown is now 5 minutes per player instead of 10 minutes for everyone", "Кулдаун Thug Crystal (Professional Pickpocket) теперь 5 минут на игрока вместо 10 минут на всех"]
    ]},
    { h: ["Gang System","Система банд"], items: [
      ["Re-added the Gang Relations System (gang allies and enemies)", "Возвращена система отношений банд (союзники и враги)"]
    ]}
  ]
},
{
  id: "1018-0645", d: "2026-10-18 06:45",
  items: [
    ["Fixed the Settings menu text not fitting properly on mobile", "Исправлено: текст меню настроек не помещался на мобильных"],
    ["Fixed your own name showing above your head after respawning", "Исправлено: после возрождения над головой показывался ваш ник"],
    ["Changed Single Leg Takedown to break ribs instead of the jaw", "Single Leg Takedown теперь ломает рёбра, а не челюсть"],
    ["Added a “Locked In” page to dual-stat trainings in the Index explaining which stat each rep counts toward", "В Индекс для тренировок на два стата добавлена страница «Locked In»: в какой стат идёт каждое повторение"],
    ["Fixed Perfected Genes saying Impossible Mission instead of Nightmare Mission Completed Solo", "Исправлено: в Perfected Genes было написано Impossible Mission вместо Nightmare Mission Completed Solo"],
    ["Fixed TDM and FFA events not teleporting players into the arena", "Исправлено: ивенты TDM и FFA не телепортировали игроков на арену"],
    ["Fixed quest cards sometimes showing “Quest Name” instead of your requirements until you retook the quest", "Исправлено: карточки квестов иногда показывали «Quest Name» вместо требований, пока квест не взять заново"],
    ["Fixed Jack of All Trades not boosting some counters and throws like Tori-Uchi and Dempsey Roll", "Исправлено: Jack of All Trades не усиливал некоторые контратаки и броски, например Tori-Uchi и Dempsey Roll"],
    ["Changed grab and counter knockback to follow the way you're facing, or your camera when in shift lock", "Отбрасывание от захватов и контратак теперь идёт туда, куда смотрит персонаж, а в shift lock — по камере"]
  ]
},
{
  id: "1018-0707", d: "2026-10-18 07:07",
  items: [
    ["Fixed Fashion Icon tiers II and III needing the wrong amount of accessories (now 25 and 50) and progress counting accessories you no longer own", "Исправлено: уровни II и III Fashion Icon требовали неверное число аксессуаров (теперь 25 и 50), а прогресс учитывал аксессуары, которых у вас уже нет"],
    ["Fixed a stray “Objective 0/0” line showing on claimed achievements", "Убрана лишняя строка «Objective 0/0» у полученных достижений"],
    ["Fixed the shop being the wrong size on mobile", "Исправлен размер магазина на мобильных"]
  ]
},
{
  id: "1018-2140", d: "2026-10-18 21:40",
  items: [
    ["Fixed Professional Pickpocket's bank cut disappearing instead of going into the robber's bank, and victims losing it twice", "Исправлено: доля из банка от Professional Pickpocket пропадала вместо того, чтобы идти в банк грабителя, а жертвы теряли её дважды"],
    ["Fixed being unable to perfect block on mobile by swiping off the Block button", "Исправлено: на мобильных нельзя было сделать идеальный блок, смахнув палец с кнопки Block"],
    ["Fixed gang base beds not lowering fatigue", "Исправлено: кровати на базе банды не снижали усталость"],
    ["Changed the Clean Injuries pad in private arenas to also clear fatigue", "Площадка Clean Injuries на приватных аренах теперь снимает и усталость"],
    ["Added gang wars ending early when every member of one gang leaves the server, with the remaining gang winning", "Война банд теперь заканчивается досрочно, если все участники одной банды вышли с сервера: побеждает оставшаяся"]
  ]
},
{
  id: "1019-0016", d: "2026-10-19 00:16",
  items: [
    ["Fixed Sunfire's stun stacking up to around 2 seconds: it now refreshes per hit and ends shortly after the last one", "Исправлено: оглушение Sunfire копилось примерно до 2 секунд; теперь обновляется с каждым ударом и заканчивается вскоре после последнего"],
    ["Fixed using Flashstep while selecting a skill or mount sometimes leaving you holding both", "Исправлено: Flashstep во время выбора скилла или маунта иногда оставлял в руках оба"],
    ["Fixed the Grinder psyche not lowering quest board mission cooldowns like Thug Leader and Capo", "Исправлено: Psyche Grinder не снижал кулдауны миссий с доски заданий, как Thug Leader и Capo"],
    ["Fixed private server arenas not loading or teleporting you in on your first join", "Исправлено: арены приватных серверов не загружались и не телепортировали при первом входе"],
    ["Fixed Ultra Instinct not keeping your eyes black when healing above 50% HP with Scarred Beast", "Исправлено: Ultra Instinct не сохранял чёрные глаза при лечении выше 50% HP со Scarred Beast"]
  ]
},
{
  id: "1019-0222", d: "2026-10-19 02:22",
  items: [
    ["Updated models for Heaven Fang Book, Demonsbane Scroll, Guihun Manual, Fa Jin Scroll", "Обновлены модели Heaven Fang Book, Demonsbane Scroll, Guihun Manual, Fa Jin Scroll"],
    ["Renamed Heaven Fang Book → Heaven Fang Scroll", "Heaven Fang Book переименован → Heaven Fang Scroll"]
  ]
},
{
  id: "1019-0441", d: "2026-10-19 04:41",
  items: [
    ["Fixed the Index saying Suibian only scales with Fat if you're fat: it always scales with Fat / 300", "Исправлено: Индекс писал, что Suibian скейлится от жира, только если вы толстый; на деле всегда Fat / 300"],
    ["Fixed Final Form not boosting Ultra Instinct's battle sense scaling", "Исправлено: Final Form не усиливал скейлинг Ultra Instinct от Battle Sense"],
    ["Fixed Darkness Blow showing as ready on the hotbar before you land a critical hit", "Исправлено: Darkness Blow показывался готовым на хотбаре до того, как вы нанесли крит"],
    ["Fixed Tiger Jaw missing targets standing right inside you", "Исправлено: Tiger Jaw промахивался по целям, стоящим вплотную «внутри» вас"],
    ["Fixed Nuclear Kick's Index entry not mentioning that it guardbreaks", "Исправлено: в Индексе у Nuclear Kick не было сказано, что он пробивает блок"]
  ]
},
{
  id: "1019-2239", d: "2026-10-19 22:39",
  items: [
    ["Fixed the Index not showing guardbreak for God Glow, Blast Core, Whale Burial, Body Slam, Thirteen-Fold Kill, Burmese Iron Hammer, Darkness Blow, Three-Level Attack, Inferno Nirvana Kick, Flicker Jabs, Pummel, Shoulder Bash, Helicóptero and Ironbreaker", "Исправлено: Индекс не показывал пробитие блока у God Glow, Blast Core, Whale Burial, Body Slam, Thirteen-Fold Kill, Burmese Iron Hammer, Darkness Blow, Three-Level Attack, Inferno Nirvana Kick, Flicker Jabs, Pummel, Shoulder Bash, Helicóptero и Ironbreaker"],
    ["Added Inferno Nirvana Kick's burn duration to the Index", "В Индекс добавлена длительность горения от Inferno Nirvana Kick"],
    ["Changed stamina drain: if your Agility is 30% higher than your Strength, Agility now drives stamina drain at 75% effectiveness", "Изменён расход стамины: если ловкость на 30% выше силы, расход считается от ловкости с эффективностью 75%"],
    ["Fixed Wongsawat Thai Prodigy pure skills working without Boxing or Muay Thai style", "Исправлено: чистые скиллы Wongsawat Thai Prodigy работали без стиля Boxing или Muay Thai"],
    ["Fixed grabs missing when the target is standing inside you (Tiger Jaws, Bear Hug, Slam Grab, Dress, Bite, Knee Strike, Rice Bag Smash, Mountain Breaker, Thunder Clap, Fa Jin, Rotary Shift, Modified Sleeve Wheel Choke, Power Bomb, Suplex, Tenkuu-Otoshi)", "Исправлено: захваты промахивались, если цель стоит вплотную «внутри» вас (Tiger Jaws, Bear Hug, Slam Grab, Dress, Bite, Knee Strike, Rice Bag Smash, Mountain Breaker, Thunder Clap, Fa Jin, Rotary Shift, Modified Sleeve Wheel Choke, Power Bomb, Suplex, Tenkuu-Otoshi)"],
    ["Fixed Apex Animal ignoring the hyperarmor cooldown", "Исправлено: Apex Animal игнорировал кулдаун гиперброни"],
    ["Fixed Primal Instincts using a 3s hyperarmor cooldown instead of the body type cooldown (12s Lean, 5s Muscle/Fat)", "Исправлено: у Primal Instincts кулдаун гиперброни был 3 с вместо кулдауна телосложения (12 с худой, 5 с мышцы/жир)"],
    ["Fixed Final Form damage and reflex boosts not applying in Ultra Instinct", "Исправлено: бонусы урона и рефлекса Final Form не работали в Ultra Instinct"],
    ["Fixed quests like Perfected Genes and Yamazaki disappearing after rejoining", "Исправлено: квесты вроде Perfected Genes и Yamazaki пропадали после перезахода"],
    ["Fixed daily quests resetting twice when joining", "Исправлено: ежедневные квесты сбрасывались дважды при входе"],
    ["Fixed old daily quests piling up and never clearing", "Исправлено: старые ежедневные квесты копились и не удалялись"]
  ]
},
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
}
];
