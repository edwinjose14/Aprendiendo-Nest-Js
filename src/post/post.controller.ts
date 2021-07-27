import { Controller, Get, Patch } from '@nestjs/common';

@Controller('post')
export class PostController {

    @Get()
    getPost(){
        return 'ok';
    }

    @Get('getOne')
    getOne(){
        return {
            message: 'one'
        };
    }

    @Patch('/:id')
    updatePost(){

    }

}
