module.exports ={
  client:'postgresql',
  connection:{
    database:'tasks',
    user:'clear',
    password:"password"
  },
  pool:{
    min:2,
    max:10
  },
  migrations:{
    tableName:'knex_migrations'
  }
}