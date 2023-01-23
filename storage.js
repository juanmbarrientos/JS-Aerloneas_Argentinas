
    function guardar(){
        let txtNombre = document.getElementById("txtNombre").value;
        let txtApellido = document.getElementById("txtApellido").value;
        let txtEmail = document.getElementById("txtEmail").value;
        let txtPass = document.getElementById("txtPass").value;

        sessionStorage.setItem("nombre",JSON.stringify(txtNombre));
        sessionStorage.setItem("apellido",JSON.stringify(txtApellido));
        sessionStorage.setItem("email",JSON.stringify(txtEmail));
        sessionStorage.setItem("password",JSON.stringify(txtPass))

        alert("Los datos se guardaron exito")
    }

    function resultados(){
        let resultados = document.getElementById("txtResultados");
        let resNombre =  JSON.parse(sessionStorage.getItem("nombre"));
        resultados.innerHTML = resNombre;
    }

    function verificar(){
        let loginEmail = document.getElementById("loginEmail").value;
        let loginPassword = document.getElementById("loginPassword").value;
        let storageEmail =  JSON.parse(sessionStorage.getItem("email"));
        let storagePassword =  JSON.parse(sessionStorage.getItem("password"));
    
        if (loginEmail === storageEmail && loginPassword === storagePassword){
            // alert(`Bienvenido/a ${loginNombre} ${loginApellido}`),
            window.location.href = "main.html";
        }else{
            alert("ACCESO DENEGADO, VUELVA A INTENTAR");
        }

    }

    function logout(){
        alert("gracias por visitarnos");
        // window.localStorage.clear();
        // window.location.reload(true);
        window.location.replace('index.html');
    }


    
    
 
// traerDatos() se ejecuta solo - traerDatos solo se ejecuta cuando le haces clic
document.onload = traerDatos();
// document.querySelector("#boton").addEventListener('click', traerDatos());

function traerDatos(){
    // console.log("dentro de la funcion");

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'vuelos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            // console.log(datos);

            let res = document.querySelector('#row_vuelos');
            res.innerHTML= '';

            const txtNombreUser = document.getElementById("txtNombreUser");
            const txtNombreUser2 = document.getElementById("txtNombreUser2");
    
    
            txtNombreUser2.textContent = (JSON.parse(sessionStorage.getItem("nombre")));
            txtNombreUser.textContent = (JSON.parse(sessionStorage.getItem("nombre")));

            for(let item of datos){
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
                                <button type="submit"class="btn btn-warning" onclick="comprar()">¡Comprar! </button>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        }    
    }    
}    

let array_vuelo = []

function comprar(){

        const id = document.getElementById("promo").textContent
        const empresa = document.getElementById("empresa").textContent;
        const ruta = document.getElementById("ruta").textContent;
        let ida = document.getElementById("ida").value;
        let vuelta = document.getElementById("vuelta").value;
        const precio = document.getElementById("precio").textContent;

        const arr_vue = {
            "id": id,
            "buss": empresa,
            "rut": ruta,
            "idaa": ida,
            "vuelt": vuelta,
            "prec": precio, 
        }

        // ref 1
        array_vuelo.push(arr_vue);
        localStorage.setItem(id, JSON.stringify(array_vuelo));
        
        // localStorage.setItem("empresa", JSON.stringify(empresa));
        // localStorage.setItem("ruta", JSON.stringify(ruta));
        // localStorage.setItem("ida", JSON.stringify(ida));
        // localStorage.setItem("vuelta", JSON.stringify(vuelta));
        // localStorage.setItem("precio", JSON.stringify(precio));

        alert("se agregó correctamente");
    }

// ref 1





