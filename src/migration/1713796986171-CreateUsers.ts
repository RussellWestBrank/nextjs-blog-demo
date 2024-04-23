import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1713796986171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //升级数据库
        return await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true, //主键
                        isGenerated: true, //自动增长
                        generationStrategy: 'increment'
                    }, {
                        name: 'username',
                        type: 'varchar'
                    } , {
                        name: 'password_digest',
                        type: 'varchar'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //降级数据库
        return await queryRunner.dropTable('users');
    }


}
