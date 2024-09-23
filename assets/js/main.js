var registerForm = document.querySelector('.regForm');
var nameInput = document.querySelector('#name');
var descInput = document.querySelector('#desc');
var prcInput = document.querySelector('#prc');

var prdcts = [];

registerForm.onsubmit = function(a){
    a.preventDefault();
    var prdct = {
        name: nameInput.value,
        description: descInput.value,
        price: prcInput.value
    }
    //console.log(prdct);
    prdcts.push(prdct);
    //console.log(prdcts);
    printData();
};

function printData(){
    var data = ``;
    for (var i = 0; i < prdcts.length;i++) {
        data +=`
            <tr>
                <td>${prdcts[i].name}</td>
                <td>${prdcts[i].description}</td>
                <td>${prdcts[i].price}</td>        
            </tr>  
        `
    }
    document.querySelector('tbody').innerHTML = data;
};