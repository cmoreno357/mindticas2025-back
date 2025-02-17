import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Appointment } from './index';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 6, scale: 2 })
  price: number;

  @Column()
  duration: number;

  @Column()
  description: string;

  @ManyToMany(() => Appointment, (appointment) => appointment.services)
  appointments: Appointment[];
}
