import { Controller } from '@nestjs/common';
import { NameInterface } from '../models/name.interface';
import { NameService } from '../service/name.service';
import {Body, Get, Post, Param, Put, Delete, Query} from '@nestjs/common';
import {Observable} from "rxjs";

@Controller('cats')
export class NameController {
    constructor(private service: NameService) {
    }

    @Post()
    add(@Body() name: NameInterface): Observable<NameInterface> {
        return this.service.add(name);
    }

    @Get()
    findAll(@Query('rent') rent?: boolean): Observable<NameInterface[]> {
        if (!!rent){
            return this.service.findFree(rent);     
        }
        return this.service.findAll();
    }
    @Get(':id')
    findById(@Param('id') id: number): Observable<NameInterface[]> {
        return this.service.findById(id);
    }
    @Put(':id')
    putKind(@Param('id') id: number, @Body() cat: NameInterface): Observable<NameInterface> {
        return this.service.putKind(id,cat)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<NameInterface>{
        return this.service.deleteKind(id)

    }

}
