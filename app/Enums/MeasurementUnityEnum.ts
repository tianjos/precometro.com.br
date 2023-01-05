import { MassEnum } from './MassEnum'
import { UnityEnum } from './UnityEnum'
import { VolumeEnum } from './VolumeEnum'

export const MeasurementUnitEnum = {
  mass: MassEnum,
  volume: VolumeEnum,
  unity: UnityEnum,
} as const
