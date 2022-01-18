/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { getConnection } from 'typeorm';
import { connection } from '../src/database';

beforeAll(async () => {
  await connection();
});

beforeEach(async () => {
  const entities = getConnection(process.env.NODE_ENV).entityMetadatas;

  for (const entity of entities) {
    const repository = getConnection(process.env.NODE_ENV).getRepository(entity.name);

    await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
  }
});

afterAll(async () => {
  getConnection(process.env.NODE_ENV).close();
});
