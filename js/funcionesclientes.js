//creacion del objeto
var myObject =[{
  id:1, nombre:'ricardo',apellido:'zabaleta',correo:'rrccdd10@gmail.com'
},{
  id:2, nombre:'miguel',apellido:'vidal',correo:'migueldavidvidalguerrero@gmail.com'
}];

//saludo
function binevenido(){
  alert('binevenido')
}

//crear elementos
function crearCliente() {
  var ide = document.getElementById('id').value;
  var nombre = document.getElementById('nom').value;
  var apell = document.getElementById('ape').value;
  var mail = document.getElementById('email').value;
      myObject.push({id: ide,nombre: nombre, apellido: apell, correo: mail});
      alert('creado')
}
//agregar elementos
function verCliente(){
  var lista=document.getElementById('lista');
  myObject.forEach(function(data){
      var linea= document.createElement('label');
      var contenido=document.createTextNode(data.id+'      '+data.nombre+'       '+data.apellido+'      '+data.correo+'      '+'   ');
      lista.appendChild(linea);
      linea.appendChild(contenido);
  })
}
//imprimir 
function imprimir(){
  var ide=document.getElementById('id').value;
  for(let item in myObject){
    if(ide == myObject[item].id){
      document.write("Identificacion: "+myObject[item].id+"<br>Nombre: "+myObject[item].nombre+"<br>Apellido: "+myObject[item].apellido+"<br>Email: "+myObject[item].correo);
      window.print();
    }else if(ide==" "){
    alert("Busca por id");
    }
  }
}
//Eliminar cliente
function eliminar(){
  var ide=document.getElementById('id').value;
  for(let item in myObject){
    if(ide == myObject[item].id){
      delete myObject[item].id;
      delete myObject[item].nombre;
      delete  myObject[item].apellido;
      delete  myObject[item].correo;
      alert('Registro: '+ide+' Eliminado');
    }
  }
}
//actualizar cleinte
function actualizar(){
  var ide=document.getElementById('id').value;
  if(ide==''){
    alert('Escribe el id');
  }else{
    var nombre = document.getElementById('nom').value;
    var apell = document.getElementById('ape').value;
    var mail = document.getElementById('email').value;
    elementoNuevo=myObject.findIndex(obj => obj.id == ide);
    myObject[elementoNuevo].nombre=nombre;
    myObject[elementoNuevo].apellido=apell;
    myObject[elementoNuevo].email=mail;
    alert('Actualizado');
  }
}
