
exports.up = function(knex) {
  return knex.schema.createTable('tasks',t=>{
    t.increments('id').primary()
    t.string('desc').notNull()
    t.datetime('estimateAt')
    t.datetime('doneAt')
    t.integer('userId').references('id').inTable('users').notNull() 
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
