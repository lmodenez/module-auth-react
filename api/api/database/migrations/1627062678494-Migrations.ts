import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1627062678494 implements MigrationInterface {
    name = 'Migrations1627062678494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `disciplina` (`id` int NOT NULL AUTO_INCREMENT, `disciplina` varchar(255) NOT NULL, `descricao` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `usuario` DROP COLUMN `data_cadastro`");
        await queryRunner.query("ALTER TABLE `usuario` DROP COLUMN `cpf_cnpj`");
        await queryRunner.query("ALTER TABLE `usuario` ADD `cpf_cnpj` varchar(14) NOT NULL");
        await queryRunner.query("ALTER TABLE `usuario` CHANGE `nivel` `nivel` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `usuario` CHANGE `ativo` `ativo` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuario` CHANGE `ativo` `ativo` int NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `usuario` CHANGE `nivel` `nivel` varchar(255) NOT NULL DEFAULT ''CLIENTE''");
        await queryRunner.query("ALTER TABLE `usuario` DROP COLUMN `cpf_cnpj`");
        await queryRunner.query("ALTER TABLE `usuario` ADD `cpf_cnpj` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `usuario` ADD `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("DROP TABLE `disciplina`");
    }

}
