import dateFormat from 'dateformat'

export type DateType = Date | null

export function formatDate (date: DateType, mask = 'mmm dd, yyyy'): string {
  return date ? dateFormat(date, mask) : ''
}

export function castToDate<T extends string | null = string> (dateStr: T): DateType {
  if (!dateStr || typeof dateStr !== 'string') return null
  try {
    const newDate = new Date(dateStr)
    return newDate
  } catch {
    return null
  }
}