import {  Column, Entity } from "typeorm";
import { Person } from "./utils/Person";

@Entity({ name: 'client' })
export class Client extends Person {

    @Column({
        type: "numeric",
    })
    balance: number;

    @Column({
        default: true,
        name: "active"
    })
    is_active: boolean;

    @Column({
        type: "simple-json",
        nullable: true
    })
    additional_info: {
        age: number,
        hair_color: string
    };

    //Works in postgres
    @Column({
        type: "simple-array",
        default: []
    })
    family_members: string[];
}