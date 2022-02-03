import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";

@Entity({ name: 'banker' })
export class Banker extends Person {
    @PrimaryColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        unique: true,
        length: 10
    })
    card_number: string;

    @Column({
        unique: true,
    })
    employee_number: number;

    //Relationships
    @ManyToMany(
        () => Client, {
        cascade: true,
    }
    )
    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: "banker",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "client",
            referencedColumnName: "id",
        },
    })
    clients: Client[];
}