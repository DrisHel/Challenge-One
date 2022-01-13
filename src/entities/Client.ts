import internal from "stream";
import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn  } from "typeorm";
import{ v4 as uuid } from "uuid";
import { City } from "./City";

@Entity("clients")
export class Client{

    @PrimaryColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    gender: string;

    @Column()
    birthdate: Date;

    @Column()
    age:number;


    @Column()
    city_id: string;

    @ManyToOne(()=>City)
    @JoinColumn({ name: "city_id"})
    city: City;

    @CreateDateColumn()
    createde_at: Date;

}