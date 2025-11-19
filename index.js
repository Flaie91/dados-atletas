import { Atleta } from "./atleta.js";


let atleta1 = new Atleta ("Flávio Silva", 29, 45, 1.75, [10, 9, 8.5, 7, 7]  )

console.log("Nome: "+atleta1.obtemNomeAtleta());
console.log("Idade: "+atleta1.obtemIdadeAtleta()+ " anos");
console.log("Peso: "+atleta1.obtemPesoAtleta()+" Kg");
console.log("Altura: "+atleta1.altura+" m");
console.log("Notas: "+atleta1.obtemNotasAtleta());
console.log("Categoria: "+ atleta1.obtemCategoria());
console.log("IMC: "+ atleta1.obtemIMC());
console.log("Média válida: "+atleta1.obtemMediaValida().toFixed(2).replace(".", ","));


