import { QueryRunner } from 'typeorm';

export const useTransaction = async (
  queryRunner: QueryRunner,
  fn: () => Promise<void>,
  errFn?: (err) => Promise<void>,
) => {
  try {
    await queryRunner.startTransaction();
    await fn();
    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    await errFn(err);
  } finally {
    await queryRunner.release();
  }
};
