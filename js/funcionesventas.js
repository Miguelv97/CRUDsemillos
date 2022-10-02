var objetoVentas = [{
  id:1,
  fecha:'30/09/22',
  cliente:'Ricardo',
  producto:'licuadora',
  valor:00000,
  cantidad:00000
},{
  id:2,
  fecha:'30/09/22',
  cliente:'Miguel',
  producto:'lavadora',
  valor:00000,
  cantidad:00000
}]

//funcion ver las Ventas
function verVentas(){
  var lista=document.getElementById('lista');
  objetoVentas.forEach(function(data){
      var linea=document.createElement('label');
      var contenido=document.createTextNode(data.id+'      '+data.fecha+'     '+data.cliente+'       '+data.producto+'      '+data.valor+'      '+ data.cantidad+'     ');
      lista.appendChild(linea);
      linea.appendChild(contenido);
  })
}

//funcion agregar
function agregarVentas(){
  var ide=document.getElementById('id').value;
  var fec=document.getElementById('fecha').value;
  var clie=document.getElementById('nom').value;
  var pro=document.getElementById('pro').value;
  var valo=document.getElementById('valor').value;
  var cant=document.getElementById('can').value;
  parseInt(valo);
  parseInt(cant);
  objetoVentas.push({id:ide,fecha:fec,cliente:clie,producto:pro,valor:valo,cantidad:cant});
  alert('Creado');
}

//funcion eliminar ventas
function eliminarVenta(){
    var iden=document.getElementById('id').value;
    for(let item in objetoVentas){
      if(iden == objetoVentas[item].id){
        delete objetoVentas[item].id;
        delete objetoVentas[item].fecha;
        delete  objetoVentas[item].cliente;
        delete  objetoVentas[item].producto;
        delete objetoVentas[item].valor;
        delete objetoVentas[item].cantidad;
        alert('eliminado');
      }
    }
  }
//funcion para Actualizar Corregir
function actualizarVentas(){
  var ide=document. getElementById('id').value;
  if(ide==''){
    alert('Escribe el id');
  }else{
    var fec=document.getElementById('fecha').value;
    var clie=document.getElementById('nom').value;
    var pro=document.getElementById('pro').value;
    var valo=document.getElementById('valor').value;
    var cant=document.getElementById('can').value;
    elementoNuevo=objetoVentas.findIndex(obj => obj.id == ide);
    objetoVentas[elementoNuevo].fecha=fec;
    objetoVentas[elementoNuevo].cliente=clie;
    objetoVentas[elementoNuevo].producto=pro;
    objetoVentas[elementoNuevo].valor=valo;
    objetoVentas[elementoNuevo].cantidad=cant;
    alert('Actualizado');
  }
}

//calculo del Subtotal
function subTotal(){
  var cant=document.getElementById('can').value;
  var val=document.getElementById('valor').value;
  var subt=cant*val;
  var subTo=document.getElementById('sub').value=subt+"$";
}

//calculo del total
function Total(){
  var c=document.getElementById('can').value;
  var v=document.getElementById('valor').value;
  var subtotal=c*v;
  var tot=(subtotal+(subtotal*0.19)).toFixed(2);
  var t=document.getElementById('to').value=tot+"$";
}
