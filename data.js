// Ryujin patch notes, newest two weeks only. Older posts are moved into the wiki and deleted.
// d: "YYYY-MM-DD HH:MM", items: [en, ru] pairs, sections: {h: [en, ru], items: [...]},
// approx: [en, ru] label when the exact date is unknown, kind: "summary" | "balance" | "milestone".
// New posts go anywhere in the list: the page sorts by d.
window.PATCHES = [
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
