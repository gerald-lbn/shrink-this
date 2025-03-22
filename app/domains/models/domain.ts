import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import { type HasOne } from '@adonisjs/lucid/types/relations'
import User from '#auth/models/user'
import { DateTime } from 'luxon'

export default class Domain extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare url: string

  @column()
  declare verified: boolean

  @column.dateTime({ autoCreate: true })
  declare lastCheck: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @column()
  declare userId: number
}
