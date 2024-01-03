import { IsBoolean, IsInt } from "class-validator";
import type { Protobuf } from "@meshtastic/js";
import type { Message } from "@bufbuild/protobuf";

export class PositionValidation
  implements Omit<Protobuf.Config.Config_PositionConfig, keyof Message>
{
  @IsInt()
  positionBroadcastSecs: number;

  @IsBoolean()
  positionBroadcastSmartEnabled: boolean;

  @IsBoolean()
  fixedPosition: boolean;

  @IsBoolean()
  gpsEnabled: boolean;

  @IsInt()
  gpsUpdateInterval: number;

  @IsInt()
  gpsAttemptTime: number;

  @IsInt()
  positionFlags: number;

  @IsInt()
  rxGpio: number;

  @IsInt()
  txGpio: number;

  @IsInt()
  broadcastSmartMinimumDistance: number;

  @IsInt()
  broadcastSmartMinimumIntervalSecs: number;

  @IsInt()
  gpsEnGpio: number;
}
