import { useState } from 'react'

// Маска телефона: +7 (999) 123-45-67
export function usePhoneMask() {
  const [phone, setPhone] = useState('')
  const onChange = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    const n = digits.startsWith('8') ? `7${digits.slice(1)}` : digits.startsWith('7') ? digits : `7${digits}`
    let out = '+7'
    if (n.length > 1) out += ` (${n.slice(1, 4)}`
    if (n.length >= 4) out += ')'
    if (n.length > 4) out += ` ${n.slice(4, 7)}`
    if (n.length > 7) out += `-${n.slice(7, 9)}`
    if (n.length > 9) out += `-${n.slice(9, 11)}`
    setPhone(out)
  }
  return [phone, onChange]
}
