import { kind } from 'src/kind/models/kind.entity';
import { CatKindInterface } from 'src/kind/models/kind.interface';
import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn} from 'typeorm';

@Entity()
export class cat{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column({nullable:true})
    photo: string;
    
    @Column({nullable:true})
    cost: string;
    
    @Column({default:false})
    is_rent: boolean;

    @ManyToOne(type => kind, kind => kind.id)
    kind: kind;


}