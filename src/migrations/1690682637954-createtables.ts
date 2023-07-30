import { MigrationInterface, QueryRunner } from "typeorm";

export class Createtables1690682637954 implements MigrationInterface {
    name = 'Createtables1690682637954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "phones" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "phones" ADD "phone" character varying(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "phones" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "phones" ADD "phone" character varying(12)`);
    }

}
