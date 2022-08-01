import { Module } from '@nestjs/common';
import { HealthCheckService, TerminusModule } from '@nestjs/terminus';
import { HealthCheckExecutor } from '@nestjs/terminus/dist/health-check/health-check-executor.service';

import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [HealthCheckService, HealthCheckExecutor],
})
export class HealthModule {}
