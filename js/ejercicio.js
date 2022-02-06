let name = document.getElementById('nombre');
let age = document.getElementById('edad');
let btn = document.getElementById('boton');
let mostrar = document.getElementById('mostrar');
let nomJuan = 0;
let mayor = 0;
let acum = 0;

const arreglo =[{nombre:"juan", edad:24}];

btn.onclick= function(e){
    arreglo.push({nombre:nombre.value, edad:parseInt(edad.value)});
}
mostrar.onclick = function(e){
    arreglo.forEach(function(arreglo, index) {
        document.getElementById("tbody").innerHTML += `
    <tr>
        <td>`+index+`</td>
        <td>`+arreglo.nombre+`</td>
        <td>`+arreglo.edad+`</td
    </tr>
    `;
        if(arreglo.nombre=="Juan"||arreglo.nombre=="juan"){
            nomJuan++;
        }
        if(arreglo.edad>=18){
            mayor++;
        }
        acum=acum+arreglo.edad;
    });
    document.getElementById("imprimir").innerHTML += `
        <label for="total" class="col-sm-4 col-form-label">El total de registros es:</label>
            <div class="col-sm-8">
                <input type="text" class="form-control-plaintext" id="total" value="`+arreglo.length+`">
            </div>`;
    document.getElementById("imprimir").innerHTML += `
        <label for="total" class="col-sm-4 col-form-label">Cantidad de registros con el nombre "Juan":</label>
            <div class="col-sm-8">
                <input type="text" class="form-control-plaintext" id="total" value="`+nomJuan+`">
            </div>`;
    document.getElementById("imprimir").innerHTML += `
        <label for="total" class="col-sm-4 col-form-label">Cantidad de registros mayores de edad es:</label>
            <div class="col-sm-8">
                <input type="text" class="form-control-plaintext" id="total" value="`+mayor+`">
            </div>`;
    document.getElementById("imprimir").innerHTML += `
        <label for="total" class="col-sm-2 col-form-label">La edad promedio es:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" id="total" value="`+(acum/arreglo.length)+`">
            </div>`;
}