import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { MarketListType } from 'App/Types/MarketListType'
import ItemList from './ItemList'
import Market from './Market'
import User from './User'
import { PaidOption } from 'App/Types/PaidOption'

export default class MarketList extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @column()
  public createdBy: number

  @column()
  public marketId: number

  @column()
  public type: MarketListType | null

  @column()
  public paidOption: PaidOption | null

  @belongsTo(() => User, { localKey: 'createdBy' })
  public creator: BelongsTo<typeof User>

  @hasMany(() => ItemList)
  public items: HasMany<typeof ItemList>

  @belongsTo(() => Market)
  public market: BelongsTo<typeof Market>
}
