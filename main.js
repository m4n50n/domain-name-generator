window.onload = function() {
  let ndomains = 15; // Número de dominios a generar

  let pronoun = ["the", "our"];
  let adj = ["great", "big", "little", "random"];
  let noun = ["jogger", "racoon", "car", "goal"];
  let end = ["com", "es", "net", "org", "co", "dev", "tv"];

  let ol = document.querySelector("#generated-domain-name"); // Lista ordenada donde mostraremos los nombres de dominio generados

  let number = 1;
  while (number != ndomains + 1) {
    let domain_name = domain_name_generator(pronoun, adj, noun, end); // Obtener nombre de dominio
    let li = document.createElement("li"); // Crear elemento li
    li.classList.add("ps-2"); // Agregar clase al elemento
    li.innerHTML = domain_name; // Añadir contenido al elemento

    ol.appendChild(li); // Añadir elemento a la lista

    number++;
  }
};

// Función para generar un nombre de dominio aleatorio
const domain_name_generator = (pronoun, adj, noun, end) => {
  let name = "";
  name += pronoun[Math.floor(Math.random() * pronoun.length)];
  name += adj[Math.floor(Math.random() * adj.length)];
  name += noun[Math.floor(Math.random() * noun.length)];
  name += "." + end[Math.floor(Math.random() * end.length)];

  return name;
};
