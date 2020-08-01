    const form = document.querySelector('form');
    const store = document.getElementById('store');

    const quantity = document.getElementById('quantity');
    const product = document.getElementById('product');
    const submitbt = document.querySelector('.submit');

    form.addEventListener('submit', results);

    function results(e){
        e.preventDefault();

        let x = store.value;
        let y = quantity.value;
        let z = product.value;
        
        document.getElementById('demo').innerText = `I shopped at ${x} for ${y} ${z}.`
        console.log(document.getElementById('demo').innerText = `I shopped at ${x} for ${y} ${z}.`);

    };

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//     document.getElementById('store').addEventListener('keyup', (event)=>{
//         let x = event.target.value;
//         // console.log(x);
//     })
//     document.getElementById('quantity').addEventListener('keyup',(event)=>{
//         let z = event.target.value;
//         // console.log(z);
//     })
//     document.getElementById('product').addEventListener('keyup',(event)=>{
//         let y = event.target.value;
//         // console.log(y);
//     })
// function event(){
//     document.getElementById('demo').innerHTML = `${x}`;
//     console.log(demo);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// let x = document.getElementById('submit').innerText = `I shopped at ${event} for `;
// console.log(x);

//    let store1 = document.getElementById("store").addEventListener('input', submit);
//     let quantity = document.getElementById("quantity").addEventListener('onkeyup', submit);
//     let product = document.getElementById("product").addEventListener('onkeyup', submit);


//     function submit(){
//         document.getElementById('demo').innerHTML = `${store}`;
//     }

//     store1.addEventListener('keyup',submit);
//     quantity.addEventListener('keyup' , submit);
//     product.addEventListener('keyup', submit);

// function submit(){
// // document.getElementById('store').value;
//     document.getElementById('demo').innerHTML = 'the' + store1 + 'one' + quantity;
// }



//        store1.addEventListener('keyup',submit5);
//     quantity.addEventListener('keyup' , submit5);
//     product.addEventListener('keyup', submit5); 

// window.onload=function submit5(){
//         document.getElementById('demo').innerHTML = 'the' + store1 + 'one' + quantity;

// }