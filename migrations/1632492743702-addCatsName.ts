import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addCatsName1632492743702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("cat",  new TableColumn({
            name: "name",
            type: "varchar"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("cat", "name")
    }

}
