import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { City } from './City';

@Entity('clients')
export class Client {
  @PrimaryColumn()
  id: string;

  @Column() // nome completo
  name: string;

  @Column() // sexo
  gender: string;

  @Column() // data de nascimento
  birthdate: Date;

  @Column() // idade
  age: number;

  @Column() // cidade
  cityId: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'cityId' })
  city: City;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
