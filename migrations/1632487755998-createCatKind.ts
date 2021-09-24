import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCatKind1632487755998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "kind",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                }
            ]
        }), true)
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("kind");
    }

}
