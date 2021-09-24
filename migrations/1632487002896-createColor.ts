import {Table, MigrationInterface, QueryRunner} from "typeorm";

export class createColor1632487002896 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
        name: "color_category",
        columns: [
            {
                name: "id",
                type: "int",
                isPrimary: true
            },
            {
                name: "color",
                type: "varchar",
            }
        ]
    }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("color_category");
   
    }

}
