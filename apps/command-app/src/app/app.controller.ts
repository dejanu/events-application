import { Controller } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateSpeakerEvent } from '@systematic/models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('speaker_created')
  handleSpeakerCreated(data: CreateSpeakerEvent ) {
    this.appService.handleSpeakerCreated(data);
  }
}