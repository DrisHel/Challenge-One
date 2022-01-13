import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCities1642021927535 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"cities",
                columns:[
                    {
                      name:"id",
                      type:"uuid",  
                      isPrimary:true,
                      isGenerated:true
                    },
                
                    {
                        name:"city",
                        type:"varchar"
                        
                    },
                    {
                        name:"state",
                        type:"varchar"
                    },
                    {
                        name: "created_at",
                        type:"timestemp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cities"); 
    }

}
