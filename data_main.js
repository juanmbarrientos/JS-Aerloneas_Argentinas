
function logout() {
  alert("gracias por visitarnos");
  // window.localStorage.clear();
  // window.location.reload(true);
  window.location.replace("index.html");
}

// traerDatos() se ejecuta solo - traerDatos solo se ejecuta cuando le haces clic
document.onload = traerDatos();
// document.querySelector("#boton").addEventListener('click', traerDatos());

function traerDatos() {
  // console.log("dentro de la funcion");

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "vuelos.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      // console.log(datos);

      let res = document.querySelector("#row_vuelos");
      res.innerHTML = "";

      const txtNombreUser = document.getElementById("txtNombreUser");
      const txtNombreUser2 = document.getElementById("txtNombreUser2");

      txtNombreUser2.textContent = JSON.parse(sessionStorage.getItem("nombre"));
      txtNombreUser.textContent = JSON.parse(sessionStorage.getItem("nombre"));

      for (let item of datos) {
        res.innerHTML += `
                <div class="col col-lg-3 col-md-6 col-12">               
                    <div class="card rounded mb-5">
                        <img src="${item.foto}" class="vuelo_card" alt="...">
                        <div class="card-body">
                        <p class="card-text ruta" id="ruta">${item.ruta}</p>
                        <p class="card-text promo" id="promo">Promo ${item.index}</p>
                        <h5 class="card-title empresa" id="empresa">Operado por: ${item.empresa}</h5>
                            <hr class="hr-sep">
                            <p class="card-text descripcion">${item.descripción}</p>
                            <form action="" class="mb-1">
                                <label class= "label-control descripcion" for="">Ida</label>
                                <input class="form-control" type="date" name="" id="ida">
                                <label class= "label-control descripcion" or="">Vuelta</label>
                                <input class="form-control" type="date" name="" id="vuelta">
                            </form>
                            <div>
                                <p class="descripcion">Incluye</p>
                                <div class="incluye">
                                    <img src="${item.equipaje}">
                                    <img src="${item.refrigerio}">
                                    <img src="${item.ticket}">
                                </div>
                            </div>
                            <div class="precio_comprar">
                                <p id="precio" class="precio">$${item.precio}</p>
                                <button type="button" class="btn btn-warning" onclick="comprar(this)">¡Comprar! </button>
                                </div>
                        </div>
                    </div>
                </div>
                `;
      }
    }
  };
}

// let array_vuelo = [];

function comprar(btn) {
  let card = btn.closest(".card");
  let id = card.querySelector(".promo").textContent;
  let empresa = card.querySelector(".empresa").textContent;
  let ruta = card.querySelector(".ruta").textContent;
  let ida = card.querySelector("#ida").value;
  let vuelta = card.querySelector("#vuelta").value;
  let precio = card.querySelector(".precio").textContent;

  const arr_vue = {
    id: id,
    empresa: empresa,
    ruta: ruta,
    ida: ida,
    vuelta: vuelta,
    precio: precio,
  };

  //Agregado
  let array_vuelo = JSON.parse(localStorage.getItem(id)) || [];

  array_vuelo.push(arr_vue);
  localStorage.setItem(id, JSON.stringify(array_vuelo));

  alert("El vuelo se agregó correctamente");
}
