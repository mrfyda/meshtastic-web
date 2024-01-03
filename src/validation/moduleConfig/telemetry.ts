import { IsBoolean, IsInt } from "class-validator";
import type { Protobuf } from "@meshtastic/js";
import type { Message } from "@bufbuild/protobuf";

export class TelemetryValidation
  implements
    Omit<Protobuf.ModuleConfig.ModuleConfig_TelemetryConfig, keyof Message>
{
  @IsInt()
  deviceUpdateInterval: number;

  @IsInt()
  environmentUpdateInterval: number;

  @IsBoolean()
  environmentMeasurementEnabled: boolean;

  @IsBoolean()
  environmentScreenEnabled: boolean;

  @IsBoolean()
  environmentDisplayFahrenheit: boolean;

  @IsBoolean()
  airQualityEnabled: boolean;

  @IsInt()
  airQualityInterval: number;

  @IsBoolean()
  powerMeasurementEnabled: boolean;

  @IsInt()
  powerUpdateInterval: number;

  @IsBoolean()
  powerScreenEnabled: boolean;
}
