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
    let resultadoPassword = document.getElementById("resultadoPassword");
  
    // Validar campo Nombre
    if (txtNombre.trim() == "") {
      txtNombreInput.classList.add("campo_incorrecto");
      resultadoNombre.innerHTML = `<span class="error_validacion">El campo Nombre no puede estar vacio.</span>`;
      // return false;
    } else {
      txtNombreInput.classList.add("campo_correcto");
      resultadoNombre.innerHTML = `<span class="aprobada_validacion">Campo validado.</span>`;
    }
  
    // Validar campo Apellido
    if (txtApellido.trim() == "") {
      txtApellidoInput.classList.add("campo_incorrecto");
      resultadoApellido.innerHTML = `<span class="error_validacion">El campo Apellido no puede estar vacio.</span>`;
      // return false;
    } else {
      txtApellidoInput.classList.add("campo_correcto");
      resultadoApellido.innerHTML = `<span class="aprobada_validacion">Campo validado.</span>`;
    }
  
    // Validar campo Email
    if (txtEmail.trim() == "") {
      txtEmailInput.classList.add("campo_incorrecto");
      resultadoEmail.innerHTML = `<span class="error_validacion">El campo Email no puede estar vacio.</span>`;
      // return false;
    } else if (!/\S+@\S+\.\S+/.test(txtEmail)) {
      txtEmailInput.classList.add("campo_incorrecto");
      resultadoEmail.innerHTML = `<span class="error_validacion">El Email es inválido.</span>`;
      // return false;
    } else {
      txtEmailInput.classList.add("campo_correcto");
      resultadoEmail.innerHTML = `<span class="aprobada_validacion">Campo validado.</span>`;
    }
  
    // Validar campo Contraseña
    if (txtPass.trim() == "") {
      txtPassInput.classList.add("campo_incorrecto");
      resultadoPassword.innerHTML = `<span class="error_validacion">Contraseña vacia, recuerde que son mínimo 10 caracteres debe incluir al menos un número, un símbolo y una letra mayúscula y minúscula.</span>`;
      return false;
    } else if (txtPass.length > 10) {
      txtPassInput.classList.add("campo_incorrecto");
      resultadoPassword.innerHTML = `<span class="error_validacion">Contraseña inválida, recuerde que son mínimo 10 caracteres debe incluir al menos un número, un símbolo y una letra mayúscula y minúscula.</span>`;
      return false;
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(txtPass)
    ) {
      txtPassInput.classList.add("campo_incorrecto");
      resultadoPassword.innerHTML = `<span class="error_validacion">Contraseña inválida, recuerde que son mínimo 10 caracteres debe incluir al menos un número, un símbolo y una letra mayúscula y minúscula.</span>`;
      return false;
    } else {
      txtPassInput.classList.add("campo_correcto");
      resultadoPassword.innerHTML = `<span class="aprobada_validacion">Campo validado.</span>`;
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
  
  function validarLogin() {
    // captura los valores de los inputs
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;
  
    // captura los inputs
    let loginEmailInput = document.getElementById("loginEmail");
    let loginPasswordInput = document.getElementById("loginPassword");
    let resultadoLoginEmail = document.getElementById("resultadoLoginEmail");
    let resultadoLoginPassword = document.getElementById("resultadoLoginPassword");
  
    // compara con el SessionStorage
    let storageEmail = JSON.parse(sessionStorage.getItem("email"));
    let storagePassword = JSON.parse(sessionStorage.getItem("password"));
  
    if (loginEmail.trim() == "" || loginEmail !== storageEmail ) {
      loginEmailInput.classList.add("campo_incorrecto");
      resultadoLoginEmail.innerHTML = `<span class="error_validacion">El campo Email no puede estar vacio o no coincide con el registro, ingrese nuevamente el Email.</span>`;
      // return false;
    } else {
      loginEmailInput.classList.add("campo_correcto");
      resultadoLoginEmail.innerHTML = `<span class="aprobada_validacion">Campo validado.</span>`;
    }
  
    if (loginPassword.trim() == "" || loginPassword !== storagePassword) {
      loginPasswordInput.classList.add("campo_incorrecto");
      resultadoLoginPassword.innerHTML = `<span class="error_validacion">El campo Contraseña no puede estar vacio o no coincide con el registro, ingrese nuevamente la contraseña.</span>`;
      return false;
    } else {
      loginPasswordInput.classList.add("campo_correcto");
      resultadoLoginPassword.innerHTML = `<span class="aprobada_validacion">Campo validado.</span>`;
    }
    return true;
  }
  
  function verificar() {
    if (validarLogin()) {
      alert("Bienvenido");
      window.location.href = "main.html";
    } else {
      alert("ACCESO DENEGADO, VUELVA A INTENTAR");
    }
  }
  