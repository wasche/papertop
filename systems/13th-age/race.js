// @flow

export const STR = 'str'
export const DEX = 'dex'
export const CON = 'con'
export const INT = 'int'
export const WIS = 'wis'
export const CHA = 'cha'
export const ANY = 'any'

export type ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha' | 'any'

export type Race = {|
  name: string,
  ability: Array<ability>,
  bonus?: any,
  power: {|
    name: string,
    summary: string,
    description: string,
    champion: string,
  |},
  flavor: string,
|}

const Human: Race = {
  name: 'Human',
  ability: [ANY],
  bonus: 'feat',
  power: {
    name: 'Quick to Fight',
    summary: 'Advantage on initiative',
    description: `At the start of each battle, roll initiative twice and choose
      the result you want.`
      .replace(/\s+/, ' '),
    champion: `If you roll a natural 19 or 20 for initiative, increase the
      escalation die by 1 (usually from 0 to 1 since it's the start of battle).`
      .replace(/\s+/, ' '),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const Dwarf: Race = {
  name: 'Dwarf',
  ability: [CON, WIS],
  power: {
    name: `That's your best shot?`,
    summary: '',
    description: `Once per battle as a free action after you have been hit by an
      enemy attack, you can heal using a recovery. If the escalation die is less
      than 2, you only get half the usual healing from the recovery. Unlike
      other recoveries that might allow you to take an average result, you have
      to roll this one!_N_Note that you can't use this ability if the check
      drops you to 0 hp or below. You've got to be on your feet to sneer at
      their attack and recover.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
    champion: `If the escalation die is 2+ when you use _that's your best shot_,
      the recovery is free.`
      .replace(/\s+/, ' '),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const Drow: Race = {
  name: 'Dark Elf (drow)',
  ability: [DEX, CHA],
  power: {
    name: 'Cruel',
    summary: '',
    description: `Once per battle, deal ongoing damage to a target you hit with
      a natural even attack roll as a free action. The ongoing damage equals 5
      times your level. (For example, at 3rd level you would deal 15 ongoing
      damage against a single target.) As usual, a normal save (11+) ends the
      damage._N_A critical hit doesn't double this ongoing damage.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
    champion: `Once per day, you can instead use _cruel_ to deal 5 ongoing
      damage per level against a target you have missed or had a natural odd
      attack roll against. (Yes, you could even dead the ongoing damage with a
      natural 1; you're _that_ cruel.)`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const HighElf: Race = {
  name: 'High Elf',
  ability: [INT, CHA],
  power: {
    name: 'Highblood Teleport',
    summary: '',
    description: `Once per battle as a move action, place yourself in a nearby
      location you can see.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
    champion: `Deal damage equal to twice your level to one enemy engaged with
      you before or after you teleport.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const WoodElf: Race = {
  name: 'Wood Elf',
  ability: [DEX, WIS],
  power: {
    name: 'Elven Grace',
    summary: '',
    description: `At the start of each of your turns, roll a die to see if you
      get an extra standard action. If your roll is equal to or lower than the
      escalation die, you get an extra standard action that turn._N_At the start
      of battle, you roll a d6. Each time you successfully gain an extra action,
      the size of the die you roll increases by one step on the following
      progression: (d4), d6, d8, d10, d12, d20. If you get an extra action after
      rolling a d20, you can't get any more extra actions that battle.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
    champion: `Once per day, start a battle rolling a d4 for _elven grace_
      instead of a d6.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const Gnome: Race = {
  name: 'Gnome',
  bonus: '+2 AC vs opportunity',
  ability: [DEX, INT],
  power: {
    name: 'Confounding',
    summary: '',
    description: `Once per battle, when you roll a natural 16+ with an attack,
      you can also daze the target until the end of your next turn.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
    champion: `Instead of being dazed, the target of your _confounding_ ability
      is weakened until the end of your next turn.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const HalfElf: Race = {
  name: 'Half-elf',
  ability: [CON, CHA],
  power: {
    name: 'Surprising',
    summary: '',
    description: `Once per battle, subtract one from the natural result of one
      of your own d20 rolls.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
    champion: `You can an additional use of _surprising_ each battle, but you
      can only use it to affect a nearby _ally's_ d20 roll.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const Halfling: Race = {
  name: 'Halfling',
  bonus: '+2 AC vs opportunity',
  ability: [CON, DEX],
  power: {
    name: 'Evasive',
    summary: '',
    description: `Once per battle, force an enemy that hits you with an attack
      to reroll the attack with a -2 penalty.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
    champion: `The enemy's reroll when you use _evasive_ takes a -5 penalty
      instead.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const HalfOrc: Race = {
  name: 'Half-orc',
  ability: [STR, DEX],
  power: {
    name: 'Lethal',
    summary: 'Advantage on one attack/battle',
    description: `Once per battle, reroll a melee attack and use the roll you
      prefer as the result.`
      .replace(/\s+/, ' '),
    champion: `If the _lethal_ attack reroll is a natural 16+, you can use
      _lethal_ again later this battle.`
      .replace(/\s+/, ' ').replace('_N_', '\n'),
  },
  flavor: ``
    .replace(/\s+/, ' ').replace('_N_', '\n'),
}

const races: {[string]: Race} = {
  Human,
  Dwarf,
  Drow,
  HighElf,
  WoodElf,
  Gnome,
  HalfElf,
  Halfling,
  HalfOrc,
}
export default races
