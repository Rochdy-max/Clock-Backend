import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpCode, Put } from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { Response } from 'express';

@Controller('alarm')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Post()
  @HttpCode(200)
  async create(@Body() alarm: any, @Res() res: Response) {
    await this.alarmService.create(alarm)
    return res.json(alarm)
  }

  @Get()
  @HttpCode(200)
  async findAll(@Res() res: Response) {
    let result = await this.alarmService.findAll()
    return res.json(result)
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: number, @Res() res: Response) {
    let result = await this.alarmService.findOne(id)
    return res.json(result)
  }

  @Put(':id')
  @HttpCode(200)
  async update(@Param('id') id: number, @Body() alarm: any, @Res() res: Response) {
    let result = await this.alarmService.update(id, alarm)
    return res.json(result)
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id') id: number) {
    return await this.alarmService.remove(id)
  }
}
