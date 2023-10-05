import { CRUD } from "./CRUD.js";

function app(){
	let crud = new CRUD("ejemplo");
    crud.create([1, 2, 3]);
    crud.create({ messge: "Hola Mundo"});

    let crud2 = new CRUD("ejemplo");
    console.log(crud2.readALL());
}
app();