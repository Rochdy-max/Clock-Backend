import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Alarm } from './alarm.model'

@Injectable()
export class AlarmService {
  constructor(@InjectModel('Alarm') private readonly alarmModel: Model<Alarm>) {}

  async create(alarm) {
    let newAlarm = new this.alarmModel(alarm)
    await newAlarm.save()
  }

  async findAll() {
    return await this.alarmModel.find().exec();
  }

  async findOne(id: number) {
    return await this.alarmModel.findById(id);
  }

  async update(id: number, alarm) {
    let result = await this.alarmModel.findById(id)
    result.hour = alarm.hour
    result.minute = alarm.minute
    result.save()
    return result
  }

  async remove(id: number) {
    await this.alarmModel.deleteOne({_id: id})
    return `This action removes a #${id} alarm`
  }
}
