import {Body, Controller, Param, Get, Post, Put, Delete} from '@nestjs/common';
import {CatKindService} from "../service/kind.service";
import {Observable} from "rxjs";
import {CatKindInterface} from "../models/kind.interface";

@Controller('kinds')
export class CatKindController {
    constructor(private service: CatKindService) {
    }

    @Post()
    add(@Body() kind: CatKindInterface): Observable<CatKindInterface> {
        return this.service.add(kind);
    }

    @Get()
    findAll(): Observable<CatKindInterface[]> {
        return this.service.findAll();
    }
    @Get(':id')
    findById(@Param('id') id: number): Observable<CatKindInterface[]> {
        return this.service.findById(id);
    }
    @Put(':id')
    putKind(@Param('id') id: number, @Body() kind: CatKindInterface): Observable<CatKindInterface> {
        return this.service.putKind(id,kind)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<CatKindInterface>{
        return this.service.deleteKind(id)

    }

}
