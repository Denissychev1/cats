import { cat } from 'src/name/models/name.entity';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from 'typeorm';
import{NameInterface} from "../../name/models/name.interface"

@Entity()
export class kind {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @OneToMany(type => cat, cat => cat.kind)
    @JoinColumn()
    names: cat[]

}