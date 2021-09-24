import {MigrationInterface, QueryRunner, TableForeignKey, TableColumn, Table} from "typeorm";

export class addColumnsCatName1632487764701 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "cat",
            columns:[ {
                name: "id",
                type: "int",
                isPrimary: true
            },{
                name: "is_rent",
                comment: "shows if cat is rented",
                type: "boolean",
                default: false,
            },
            {
                name: "photo",
            type: "varchar",
            isNullable: true
            },
            {
                name: "cost",
                comment: "cost for rent per hour",
                type: "varchar",
                isNullable: true
          
            }, {
                name: "kindId",
                type: "int",
                isNullable: true
          
            },
            {
                name: "weight",
                type: "varchar",
                isNullable: true
            },
            {
                name: "color",
                type: "varchar",
                isNullable: true
            }
            ]}), true);
        
        await queryRunner.createForeignKey("cat", new TableForeignKey({
            columnNames: ["kindId"],
            referencedColumnNames: ["id"],
            referencedTableName: "kind",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("cat");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("kindId") !== -1);
        await queryRunner.dropForeignKey("cat", foreignKey);
        await queryRunner.dropColumn("cat", "kindId");
        await queryRunner.dropTable("cat")
    }

}
