let displayInfo = document.querySelector('.principal')

let fourCards = document.querySelector('.cuatro_cards')
fourCards.addEventListener('click', e => {
    e.preventDefault()

    displayInfo.innerHTML = `
<div class="automotor">
    <div class="mainT">
  
        <i class="bi bi-arrow-left" id="volver"></i>
     
        <h4>Pagar y ver deuda</h4>
        <p class="subT">Ingresá la patente que deseas consultar</p>
        <div class="container">
            <div class="card_auto">
                <div class="card_header">

                    <div class="icono">
                        <i class="fas fa-car"></i>
                    </div>
                    <p>Automotor</p>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <input type="text" name="patente" id="patente" placeholder="Patente">
                        <p>Sólo ingresar letras y números, sin puntos, comas, barras, guiones.</p>
                    </div>
                    <div class="btn btn-claro" id="consultar">Consultar</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
     volver()//funcion para el boton volver.
     consultar()//funcion para el boton consultar.
})

function volver() {
    let btnVolver = document.querySelector('#volver')

    btnVolver.addEventListener('click', e => {
        e.preventDefault()
        location.href = 'http://127.0.0.1:5500/rentas%20BS/index.html';
    })
}

function consultar() {


    let btnConsult = document.querySelector('#consultar')
    btnConsult.addEventListener('click', e => {
        e.preventDefault()
        // console.log('consultando...')
displayInfo.innerHTML = `  <main>
<div class="container main-container">    

        <div class="mainDetail row">
            <div class=" col-10 col-sm-8 d-flex justify-content-start align-items-center">
                <div class="mb-4 mt-3">
                    <h4 class="mb-0"> Detalle de cuotas</h4>
                    <a href="">Ver preguntas frecuentes</a>
                </div>
            </div>                    
                <div class="col-2 col-sm-4 d-flex justify-content-end align-items-center">                                                                    
                    <a class="dropdown-toggle href:"" ">Notificaciones</a>                                                                                                                                                    
                </div>
        </div> 
        <div class="cards p-4">                    
                <p class="mb-2">ISG166</p>
                <p class="mb-2">Titular: JUAN CARLOS LARRETA</p>
                <p class="mb-3">YAMAHA - MOTOCICLETA - YBR CB125-12</p>
        </div>
        <div class="col-12 justify-content-start d-flex align-items-center">
            <div class="subtitle mt-3">
                <h6 class=" mb-0"> También podés pagar </h6>
                <p class="subtitle "> Otras obligaciones que están a tu nombre e incluyen el impuesto consultado </p>
            </div>
        </div>      
        <hr> 
        <div class="cards">                                                                                                                                                       
            <h3 class="planesYjuicios mt-1 mb-1 p-2" > Juicios y planes </h3>                                                                      
        <div class="p-2"></div>     
        <div class="alert alert-secondary"> No se registran próximos vencimientos. </div>                 
    </div>  
</main>
  
`
})
}


