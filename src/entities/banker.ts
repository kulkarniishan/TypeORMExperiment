import { Column, Entity, PrimaryColumn } from "typeorm";
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
}