import { Module } from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { AlarmController } from './alarm.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { AlarmSchema } from './alarm.schema';

@Module({
  imports: [AlarmModule,
    MongooseModule.forFeature([{
      schema: AlarmSchema,
      name: 'Alarm',
      collection: 'alarms'
    }]),
    MongooseModule.forRoot('mongodb://localhost:27017/alarm')],
      controllers: [AlarmController],
  providers: [AlarmService]
})
export class AlarmModule {}
