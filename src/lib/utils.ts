import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (priceInCents: number): string => {
  const priceFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return priceFormatter.format(priceInCents / 100)
}

export const formatCompactNumber = (number: number): string => {
  const compactNumberFormatter = new Intl.NumberFormat(undefined, {
    notation: 'compact'
  })

  return compactNumberFormatter.format(number)
}
