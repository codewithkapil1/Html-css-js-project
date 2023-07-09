document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbsInput = e.target.value;
    document.getElementById('output').style.visibility = 'visible';
   document.getElementById('gramsOutput').innerHTML = lbsInput/0.0022046;
   document.getElementById('KgOutput').innerHTML = lbsInput/2.2046;
   document.getElementById('ozOutput').innerHTML = lbsInput*16;
  

});