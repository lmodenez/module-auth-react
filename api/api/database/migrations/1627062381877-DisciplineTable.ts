import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class DisciplineTable1627062381877 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    new Table({
      name: 'disciplina',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'disciplina',
          type: 'varchar',
        },
        {
          name: 'descricao',
          type: 'varchar',
        },
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('disciplina');
  }
}
