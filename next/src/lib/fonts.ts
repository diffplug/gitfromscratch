import { Lora, Spectral } from 'next/font/google'

export const spectral = Spectral({
  subsets: ['latin'],
  display: 'swap',
  style: ['italic', 'normal'],
  variable: '--font-spectral',
  weight: ['400', '600', '700'],
})

export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['600', '700'],
})
