import { CatKindInterface } from "src/kind/models/kind.interface";

export interface NameInterface{
    id:number;
    name: string;
    photo: string;
    is_rent: boolean;
    cost: string;
    kind: CatKindInterface;
}