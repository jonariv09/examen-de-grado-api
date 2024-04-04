import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1712221948134 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'first_name',
            type: 'varchar',
          },
          {
            name: 'last_name',
            type: 'varchar',
          },
          {
            name: 'is_active',
            type: 'boolean',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('users');
  }
}
