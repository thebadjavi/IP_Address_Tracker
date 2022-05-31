// Suerte!

/* validar que la ip introducida 
 cargar la informacion de la ip en los campos
 colocar el mapa en la localizacion

*/
//copiado
//map.style.height = `${vh-225}px`;
var lattitude = 0;
var longitude = 0;

const API_KEY = 'f62c08003cb646dcb698199c8a40cc6f';
const url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=f62c08003cb646dcb698199c8a40cc6f';
const url2 = 'https://ipgeolocation.abstractapi.com/v1/?api_key='
const urlForOwnip = 'https://api.db-ip.com/v2/free/self';

const ip_address = document.querySelector('.ip_address');
const btSearch = document.querySelector('.search_button');


//validar que la ip introducida 
function validar(){
    var valueForm = object.value.split("\n"); 
    var isValid = valueForm.every(validateIp); //  
}
///^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;


function validateIp(ip_address) {
    var patronIp = new RegExp(
      "/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/"
    );
    
    var valores;
  
      if (ip_address.search(patronIp) !== 0) {
      return false;
    }
  
    valores = ip_address.split(".");
  
    return (
      valores[0] <= 255 &&
      valores[1] <= 255 &&
      valores[2] <= 255 &&
      valores[3] <= 255
    );
  }


//cargar la informacion de la ip en los campos

