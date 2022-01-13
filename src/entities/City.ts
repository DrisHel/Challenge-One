import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';



@Entity('cities')

export class City {

  @PrimaryGeneratedColumn()
  id:string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

}