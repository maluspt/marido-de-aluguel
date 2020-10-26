import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('service_budget', table => {
        table.increments('id').primary();
        table.string('day').notNullable();
        table.string('time').notNullable();
        table.string('work_description').notNullable();
        table.string('images');
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('services_budget');
}