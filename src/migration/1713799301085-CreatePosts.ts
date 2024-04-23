import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePosts1713799301085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //升级数据库
        return await queryRunner.createTable(
            new Table({
                name: 'posts',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true, //主键
                        isGenerated: true, //自动增长
                        generationStrategy: 'increment'
                    }, {
                        name: 'title',
                        type: 'varchar'
                    } , {
                        name: 'content',
                        type: 'text'
                    } , {
                        name: 'author_id',
                        type: 'int'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //降级数据库
        return await queryRunner.dropTable('posts');
    }

}
