function validar() {
  let txtNombreInput = document.getElementById("txtNombre");
  let txtApellidoInput = document.getElementById("txtApellido");
  let txtEmailInput = document.getElementById("txtEmail");
  let txtPassInput = document.getElementById("txtPass");
  let txtNombre = document.getElementById("txtNombre").value;
  let txtApellido = document.getElementById("txtApellido").value;
  let txtEmail = document.getElementById("txtEmail").value;
  let txtPass = document.getElementById("txtPass").value;
  let resultadoNombre = document.getElementById("resultadoNombre");
  let resultadoApellido = document.getElementById("resultadoApellido");
  let resultadoEmail = document.getElementById("resultadoEmail");
  let resultadoPassword = document.getElementById("resultadoPassword")

  // Validar campo Nombre
  if (txtNombre.trim() == "") {
    txtNombreInput.classList.add("campo_incorrecto");
    resultadoNombre.innerHTML = `<span id="ayudaNombre" class="error_validacion">El campo Nombre no puede estar vacio.</span>`
    // return false;
  } else {
    txtNombreInput.classList.add("campo_correcto");
    resultadoNombre.innerHTML = `<span id="ayudaNombre" class="aprobada_validacion">Campo validado.</span>`
  }

  // Validar campo Apellido
  if (txtApellido.trim() == "") {
    txtApellidoInput.classList.add("campo_incorrecto");
    resultadoApellido.innerHTML = `<span id="ayudaApellido" class="error_validacion">El campo Apellido no puede estar vacio.</span>`
    // return false;
  } else {
    txtApellidoInput.classList.add("campo_correcto");
    resultadoApellido.innerHTML = `<span id="ayudaApellido" class="aprobada_validacion">Campo validado.</span>`
  }

  // Validar campo Email
  if (txtEmail.trim() == "") {
    txtEmailInput.classList.add("campo_incorrecto");
    resultadoEmail.innerHTML = `<span id="ayudaApellido" class="error_validacion">El campo Email no puede estar vacio.</span>`
    // return false;
  } else if (!/\S+@\S+\.\S+/.test(txtEmail)) {
    txtEmailInput.classList.add("campo_incorrecto");
    resultadoEmail.innerHTML = `<span id="ayudaApellido" class="error_validacion">El Email es inválido.</span>`
    // return false;
  } else {
    txtEmailInput.classList.add("campo_correcto");
    resultadoEmail.innerHTML = `<span id="ayudaApellido" class="aprobada_validacion">Campo validado.</span>`
  }

  // Validar campo Contraseña
  if (txtPass.trim() == "") {
    txtPassInput.classList.add("campo_incorrecto");
    resultadoPassword.innerHTML = `<span id="ayudaApellido" class="error_validacion">Contraseña vacia, recuerde que son mínimo 10 caracteres debe incluir al menos un número, un símbolo y una letra mayúscula y minúscula.</span>`
    return false;
  } else if (txtPass.length > 10) {
    txtPassInput.classList.add("campo_incorrecto");
    resultadoPassword.innerHTML = `<span id="ayudaApellido" class="error_validacion">Contraseña inválida, recuerde que son mínimo 10 caracteres debe incluir al menos un número, un símbolo y una letra mayúscula y minúscula.</span>`
    return false;
  } else if (
    !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(txtPass)
  ) {
    txtPassInput.classList.add("campo_incorrecto");
    resultadoPassword.innerHTML = `<span id="ayudaApellido" class="error_validacion">Contraseña inválida, recuerde que son mínimo 10 caracteres debe incluir al menos un número, un símbolo y una letra mayúscula y minúscula.</span>`
    return false;
  } else {
    txtPassInput.classList.add("campo_correcto");
    resultadoPassword.innerHTML = `<span id="ayudaApellido" class="aprobada_validacion">Campo validado.</span>`
  }
  // Si todos los campos son válidos, retornar true
  return true;
}

function guardar() {
  if (validar()) {
    let txtNombre = document.getElementById("txtNombre").value;
    let txtApellido = document.getElementById("txtApellido").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtPass = document.getElementById("txtPass").value;

    alert("Los datos se guardaron exitosamente");
    sessionStorage.setItem("nombre", JSON.stringify(txtNombre));
    sessionStorage.setItem("apellido", JSON.stringify(txtApellido));
    sessionStorage.setItem("email", JSON.stringify(txtEmail));
    sessionStorage.setItem("password", JSON.stringify(txtPass));
  }
}

function verificar() {
  // captura los valores de los inputs
  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  // captura los inputs
  let loginEmailInput = document.getElementById("loginEmail");
  let loginPasswordInput = document.getElementById("loginPassword");

  // captura los span html para insertar el resultado de la validación
  let resultadoLoginPassword = document.getElementById("resultadoLoginPassword");
  let resultadoLoginEmail = document.getElementById("resultadoLoginEmail");

  let storageEmail = JSON.parse(sessionStorage.getItem("email"));
  let storagePassword = JSON.parse(sessionStorage.getItem("password"));

  if (loginEmail === storageEmail && loginPassword === storagePassword) {
    loginEmailInput.classList.add("campo_correcto");
    loginPasswordInput.classList.add("campo_correcto");
    resultadoLoginEmail.innerHTML = `<span id="ayudaApellido" class="aprobada_validacion">Campo validado.</span>`;
    resultadoLoginPassword.innerHTML = `<span id="ayudaApellido" class="aprobada_validacion">Campo validado.</span>`;
      (window.location.href = "main.html");
  } else {
    // alert("ACCESO DENEGADO, VUELVA A INTENTAR");
    if (loginEmail !== storageEmail && loginPassword !== storagePassword) {
      loginEmailInput.classList.add("campo_vacio");
      loginPasswordInput.classList.add("campo_vacio");
      resultadoLoginPassword.innerHTML = `<span id="ayudaApellido" class="error_validacion">El campo Contraseña está vacio.</span>`;
      resultadoLoginEmail.innerHTML = `<span id="ayudaApellido" class="error_validacion">El campo Email está vacio.</span>`;
    } else if (loginEmail !== storageEmail) {
      resultadoLoginEmail.innerHTML = `<span id="ayudaApellido" class="error_validacion">El Email no coincide con el registro.</span>`;
      loginEmailInput.classList.add("campo_vacio");
      loginPasswordInput.classList.add("campo_correcto");
    } else {
      resultadoLoginPassword.innerHTML = `<span id="ayudaApellido" class="error_validacion">La contraseña no coincide con el registro.</span>`;
      loginPasswordInput.classList.add("campo_vacio");
      loginEmailInput.classList.add("campo_correcto");
    }
  }
}

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
