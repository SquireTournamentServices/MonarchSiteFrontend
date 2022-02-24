import { castToDate, DateType, formatDate } from './classHelpers'

export class GenericObject {
  readonly id: number
  readonly createdTimestamp: DateType
  readonly createdDate: string
  name: string
  objectType = 'row'

  get subtitle (): string { return '' }
  get searchField (): string { return this.name }

  constructor ({ row }: { row?: Record<string, any> } = {}) {
    this.id = row?.id
    this.name = row?.attributes.name || ''
    this.createdTimestamp = castToDate(row?.attributes.created_timestamp)
    this.createdDate = formatDate(this.createdTimestamp)
  }
}

export default GenericObject