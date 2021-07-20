import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('usuario')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column({
    length: 14,
  })
  cpf_cnpj: string;

  @Column()
  email: string;

  @Column()
  usuario: string;

  @Column()
  senha: string;

  @Column()
  nivel: string;

  @Column()
  ativo: number;

  @BeforeInsert()
  @BeforeUpdate()
  hashPasswaord() {
    var salt = bcrypt.genSaltSync(10);
    this.senha = bcrypt.hashSync(this.senha, salt);
  }
}

export default User;
