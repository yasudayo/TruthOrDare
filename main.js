document.getElementById('mekuru').addEventListener('click', function () {
   var kekka = document.getElementById('kekka');
   let nomvers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
   let nomvers2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
   let nomver = Math.floor(Math.random () * 13);
   let nomver1 = Math.floor(Math.random () * 13);
    kekka.innerHTML = "左の人"　+ nomvers[nomver] + "　右の人" + nomvers2[nomver1];
});
