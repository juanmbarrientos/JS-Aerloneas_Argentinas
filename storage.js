
    function guardar(){
        let txtNombre = document.getElementById("txtNombre").value;
        let txtApellido = document.getElementById("txtApellido").value;
        let txtCiudad = document.getElementById("txtCiudad").value;
        let txtCp = document.getElementById("txtCp").value;

        sessionStorage.setItem("nombre",JSON.stringify(txtNombre));
        sessionStorage.setItem("apellido",JSON.stringify(txtApellido));
        sessionStorage.setItem("ciudad",JSON.stringify(txtCiudad));
        sessionStorage.setItem("cp",JSON.stringify(txtCp));

        alert("Los datos se guardaron exito")
    }

    function resultados(){
        let resultados = document.getElementById("txtResultados");
        let resNombre =  JSON.parse(sessionStorage.getItem("nombre"));
        resultados.innerHTML = resNombre;
    }

    function verificar(){
        let loginNombre = document.getElementById("loginNombre").value;
        let loginApellido = document.getElementById("loginApellido").value;
        let storageNombre =  JSON.parse(sessionStorage.getItem("nombre"));
        let storageApellido =  JSON.parse(sessionStorage.getItem("apellido"));
    
        if (loginNombre === storageNombre && loginApellido === storageApellido){
            alert(`Bienvenido/a ${loginNombre} ${loginApellido}`),
            window.location.href = "main.html";
        }else{
            alert("ACCESO DENEGADO, VUELVA A INTENTAR");
        }

    }

    function logout(){
        alert("gracias por visitarnos");
        // window.localStorage.clear();
        // window.location.reload(true);
        window.location.replace('form_localstorage.html');
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

            for(let item of datos){
                res.innerHTML += `
                <div class="col col-3">               
                    <div class="card rounded mb-5">
                        <img src="${item.foto}" class="vuelo_card" alt="...">
                        <div class="card-body">
                            <h5 class="card-title empresa" id="empresa">${item.empresa}</h5>
                            <p class="card-text ruta" id="promo">${item.index}</p>
                            <p class="card-text ruta" id="ruta">${item.ruta}</p>
                            <hr class="hr-sep">
                            <p class="card-text descripcion">${item.descripción}</p>
                            <form action="">
                                <label for="">ida</label>
                                <input type="date" name="" id="ida">
                                <br>
                                <label for="">vuelta</label>
                                <input type="date" name="" id="vuelta">
                            </form>
                            <p id="precio" class="precio">$ ${item.precio}</p>
                            <button type="submit"class="btn btn-warning" onclick="comprar()">¡Comprar! </button>
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





