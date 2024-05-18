

let button = document.getElementById("imcBtn")

button.addEventListener("click",function(){
    let cms = document.getElementById("cms").value
    let kgs = document.getElementById("kgs").value
    let estatura2
     estatura2 = cms * cms
    let imcR = kgs / estatura2
    imcR = parseFloat(imcR).toFixed(2)
    document.getElementById("result").value = imcR



})

const dolar = document.querySelector('#dolarInt')
const cop = document.querySelector('#pesoInt')
dolar.addEventListener('input',()=>{
    let converso = dolar.value * 3824.06
    converso = parseFloat(converso).toFixed(2)
    document.getElementById('pesoInt').value = converso
})
cop.addEventListener('input', ()=>{
    let converso = cop.value / 3824.06
    converso = parseFloat(converso).toFixed(2)
    document.getElementById('dolarInt').value = converso

})
































// document.addEventListener('DOMContentLoaded',function(){

//     const dolarInput = document.getElementById('dolar');
//     const pesoColombianoInput = document.getElementById('pesoColomniano');

//     let conversionaDolar = true;
//     const oneDolarToCop = 3890.460;


// dolarInput.addEventListener('input', function(){
//     const cantDolar  = parseFloat(dolarInput.value);
//     const cantPesoCop = conversionaDolar ? (isNaN(cantDolar) ? '' : cantDolar * oneDolarToCop) : '';
//     pesoColombianoInput.value = cantPesoCop ? cantPesoCop.toFixed(2): '';
// });

// pesoColombianoInput.addEventListener('input', function(){
//     const cantPesoCop = parseFloat(pesoColombianoInput.value);
//     const cantDolar = ! conversionaDolar ? (isNaN(cantPesoCop) ? '' : cantPesoCop / oneDolarToCop) : '';
//     dolarInput.value = cantDolar ? cantDolar.toFixed(2): '';
// });

// });