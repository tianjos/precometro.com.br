import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import { MeasurementUnit } from 'App/Types/MeasurementUnit'

export default class ItemList extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public quantity: number

  @column()
  public description: string

  @column()
  public measurementType: keyof MeasurementUnit

  @column()
  public measurementValue: MeasurementUnit[keyof MeasurementUnit]

  @hasMany(() => Product)
  public products: HasMany<typeof Product>
}
