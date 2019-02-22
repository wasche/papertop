// @flow

export type Attribute = 'might' | 'mental' | 'speed'

export type Skill = {|
  name: string,
  attribute: Attribute,
  ranks: number,
|}

export type Character = {|
  name: string,
  might: number,
  mental: number,
  speed: number,
  skills: Array<Skill>,
|}

export const newCharacter = (): Character => ({
  name: 'New Character',
  might: 10,
  mental: 10,
  speed: 10,
  skills: [],
})
