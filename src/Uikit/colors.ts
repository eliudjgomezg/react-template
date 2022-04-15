const colorsNames = ['transparent', 'black', 'white'] as const

export type TColors = typeof colorsNames[number]

export const colors = {
  transparent: 'var(--transparent)',
  black: 'var(--black)',
  white: 'var(--white)',
}
