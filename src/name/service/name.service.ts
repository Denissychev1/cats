import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {cat} from "../models/name.entity";
import {Repository} from "typeorm"
import {NameInterface} from "../models/name.interface";
import {Observable, from} from "rxjs";

@Injectable()
export class NameService {
    constructor(
        @InjectRepository(cat)
        private catRepository: Repository<cat>
    ) {
    }

    add(kind: NameInterface): Observable<NameInterface> {
        return from(this.catRepository.save(kind))
    }

    findAll(): Observable<NameInterface[]> {
        return from(this.catRepository.find({relations: ['kind']}));
 }
 
 findById(id:number): Observable<NameInterface[]> {
    return from(this.catRepository.find({where:{id}, relations: ['kind']}));
}

putKind(id: number,cat: NameInterface): Observable<any> {
    return from(this.catRepository.update(id,cat));
}

deleteKind(id: number): Observable<any> {
    return from(this.catRepository.delete(id));
}
findFree(free: boolean): Observable<NameInterface[]>{
    console.log(free)
    return from(this.catRepository.find({where:{is_rent: free}, relations: ['kind']}));

}
}
