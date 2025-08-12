import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('health/check')
    getHello(): { status: string } {
        return {
            status: 'OK',
        };
    }
}
