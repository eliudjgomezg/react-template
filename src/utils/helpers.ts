export const decimalFormat = (number: number | undefined) => {
  return new Intl.NumberFormat().format(number ?? 0)
}
