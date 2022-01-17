import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('cities')
export class City {
  @PrimaryColumn()
  id: string;

  @Column()
  city: string;

  @Column()
  state: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
