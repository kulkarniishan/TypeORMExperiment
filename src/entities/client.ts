import { Column, Entity, ManyToMany, OneToMany} from "typeorm";
import { Banker } from "./Banker";
import { Transaction } from "./Transaction";
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

    //Works only in postgres
    @Column({
        type: "simple-array",
        default: []
    })
    family_members: string[];


    //Relationships
    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[];


    @ManyToMany(
        () => Banker,
    )
    bankers: Banker[];
}