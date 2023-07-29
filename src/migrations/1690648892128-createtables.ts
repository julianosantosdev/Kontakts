import { MigrationInterface, QueryRunner } from "typeorm";

export class Createtables1690648892128 implements MigrationInterface {
    name = 'Createtables1690648892128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(30) NOT NULL, "phone" character varying(12), "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emails" ("id" SERIAL NOT NULL, "email" character varying(50) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "contactId" integer, CONSTRAINT "PK_a54dcebef8d05dca7e839749571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phones" ("id" SERIAL NOT NULL, "phone" character varying(12), "createdAt" date NOT NULL DEFAULT now(), "contactId" integer, CONSTRAINT "PK_30d7fc09a458d7a4d9471bda554" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "fullName" character varying(50) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(50) NOT NULL, "number" character varying(7), "city" character varying(30) NOT NULL, "state" character varying(2) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "contactId" integer, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "emails" ADD CONSTRAINT "FK_43abc580d6e98a6e8eb96ffe86d" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phones" ADD CONSTRAINT "FK_50c0e61a19e6a26dd8116e1e315" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_4b3866faeb7c87d481e073fc7cd" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_4b3866faeb7c87d481e073fc7cd"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`ALTER TABLE "phones" DROP CONSTRAINT "FK_50c0e61a19e6a26dd8116e1e315"`);
        await queryRunner.query(`ALTER TABLE "emails" DROP CONSTRAINT "FK_43abc580d6e98a6e8eb96ffe86d"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "phones"`);
        await queryRunner.query(`DROP TABLE "emails"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
