import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateComments1713797765754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //升级数据库
        return await queryRunner.createTable(
            new Table({
                name: 'comments',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true, //主键
                        isGenerated: true, //自动增长
                        generationStrategy: 'increment'
                    }, {
                        name: 'user_id',
                        type: 'int'
                    } , {
                        name: 'post_id',
                        type: 'int'
                    } , {
                        name: 'content',
                        type: 'text'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //降级数据库
        return await queryRunner.dropTable('comments');
    }

}
