import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {kind} from "../models/kind.entity";
import {Repository, FindManyOptions, FindRelationsNotFoundError} from "typeorm"
import {CatKindInterface} from "../models/kind.interface";
import {Observable, from} from "rxjs";

@Injectable()
export class CatKindService {
    constructor(
        @InjectRepository(kind)
        private catKindRepository: Repository<kind>
    ) {
    }

    add(kind: CatKindInterface): Observable<CatKindInterface> {
        return from(this.catKindRepository.save(kind))
    }

    findAll(): Observable<CatKindInterface[]> {
        return from(this.catKindRepository.find({relations: ['names']}));
    }
    findById(id:number): Observable<CatKindInterface[]> {
        return from(this.catKindRepository.find({id}));
    }

    putKind(id: number,kind: CatKindInterface): Observable<any> {
        return from(this.catKindRepository.update(id,kind))
    }

    deleteKind(id: number): Observable<any> {
        return from(this.catKindRepository.delete(id))
    }
}
