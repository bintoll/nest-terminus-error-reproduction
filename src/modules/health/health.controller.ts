import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  public constructor(private health: HealthCheckService) {}

  @Get()
  @HealthCheck()
  public check() {
    return this.health.check([]);
  }
}
