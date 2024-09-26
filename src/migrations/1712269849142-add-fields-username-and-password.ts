import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddFieldsUsernameAndPassword1712269849142
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'username',
        type: 'varchar',
        isNullable: false,
      }),
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: false,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('users', ['username', 'password']);
  }
}
