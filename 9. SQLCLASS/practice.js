const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sigma_app',
    password: 'ayush',
  });
  let getRandomUser = () =>  {
    return [
      faker.string.uuid(),
      faker.internet.username(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  }

let q = "insert into user ( id , username , email, password ) values ?";
let data =[];
for( let i =1 ; i<=100; i++){
  // data.push(getRandomUser());
  data.push((getRandomUser()));
};
// let users = [
// ["123b" , "123_newuserb" , "abc@gmail.comb" , "abcb"], 
// ["123c" , "123_newuserc" , "abc@gmail.comc" , "abcc"]] ;

  try{
    connection.query(q ,[data] , (err , result ) => {
      if (err) throw err;
      console.log(result);
    })
  }
  catch (err) {
    console.loge(err);
  }

  connection.end();

