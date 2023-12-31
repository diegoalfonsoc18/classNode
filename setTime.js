const mostrarTema = (tema) => {
  console.log(`Estoy aprendiendo ${tema}`);
};

//setTimeout(mostrarTema, 5000, "Node.js");
//setImmediate(mostrarTema, "Node.js");
setInterval(mostrarTema, 1000, "Node.js");
