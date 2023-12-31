const fs = require("fs");

// fs.readFile("index.html", "utf-8", (err, contenido) => {
//   if (err) {
//     throw e
//   } else {
//     console.log(contenido);
//   }
//   console.log("Mensaje...");
// });

// fs.rename("index.html", "main.html", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Nombre cambiado exitosamente");
// });

// agregar contenido al final de una lista

// fs.appendFile("index.html", "<p>Hello</p>", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Archivo actualizado...");
// });

//Reemplar todo el contenido del archivo

fs.writeFile("index.html", "contenido nuevo", (err) => {
  if (err) {
    throw err;
  }
  console.log("Contenido actualizado...");
});
