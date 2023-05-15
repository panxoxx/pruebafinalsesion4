let presupuesto = 0
let gastos = []
let saldo = 0


document.getElementById("botonRegistrar").addEventListener("click",function(){


    let ingresaPresupuesto = document.getElementById("presupuesto").value;
     let expression = /^[\d]+$/

     if (expression.test(ingresaPresupuesto)==false){

        alert(" verifique valor campo presupuesto,debe ser un numero")
        return
     }

    presupuesto = ingresaPresupuesto

    document.getElementById("presupuestoInfo").innerHTML= "$"+ Number(presupuesto).toLocaleString("es-CL")
})


document.getElementById("botonGasto").addEventListener("click",function(){
alert("hizo click")

let nombreGasto = document.getElementById("nombredelgasto").value;
let cantidadGasto =Number(document.getElementById("cantidaddelgasto").value);
let gasto={nombre:nombreGasto,precio:cantidadGasto}

gastos.push(gasto)

console.log(gastos)

calculargastos();
inyectarGastos(gastos);

})



function calculargastos(){
    let resultado=0
    gastos.forEach(gasto=>{

    resultado+=gasto.precio
    })

    document.getElementById("gastoInfo").innerHTML= "$"+ Number(resultado).toLocaleString("es-CL")

    saldo = presupuesto - resultado

    document.getElementById("saldoInfo").innerHTML= "$"+ Number(saldo).toLocaleString("es-CL")


}


function inyectarGastos(data){
 
let cuerpotabla = document.getElementById("parteabajo")
    cuerpotabla.innerHTML=""
data.forEach(item1=>{
    cuerpotabla.innerHTML +=`   
     <tr>
                    <td>${item1.nombre}</td>
                    <td>${item1.precio}</td>
                     
    </tr>
    `

})
}
