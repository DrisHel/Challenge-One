import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClients1642021977742 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'gender',
            type: 'varchar',
            enum: ['F', 'M', 'Other']
          },
          {
            name: 'birthdate',
            type: 'date'
          },
          {
            name: 'cityId',
            type: 'uuid'
          }
        ],
        foreignKeys: [
          {
            name: 'fk_clients_city',
            columnNames: ['cityId'],
            referencedTableName: 'cities',
            referencedColumnNames: ['id']
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients');
  }
}
