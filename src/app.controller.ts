import { Controller, Get, Logger, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  /*    @Get()
          getHello(): string {
              return this.appService.getHello();
          }*/

  @Get('/**')
  get(@Res() res: Response) {
    this.logger.debug('Sending angular app');
    res.sendFile('index.html', {
      root: '../../Links/Links/dist/links/browser',
    });
  }
}
