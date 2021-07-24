import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('disciplina')
export class Discipline {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  disciplina: string;

  @Column()
  descricao: string;
}

export default Discipline;
