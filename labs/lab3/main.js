let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');

}

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// $(document).ready(function(){
//     update_amounts();
//     $('.qty, .price').on('keyup keypress blur change', function(e){
//         update_amounts();
//     });
// });

// function update_amounts(){
//     var sum = 0.0;
//     $('#cart_table > tbody > tr').each(function(){
//         var qty = $(this).find('.qty').val();
//         var price = $(this).find('.price').val();
//         var amount = (qty*price);
//         sum += amount;
//         $(this).find('.amount').text('' + amount);
//     });
//     $('.total').text(sum);
// }

// var incrementQty;
// var decrementQty;
// var plusBtn = $(".cart_qty_plus");
// var minusBtn = $(".cart_qty_minus");
// var incrementQty = plusBtn.click(function(){
//     var $n = $(this)
//     .parent(".box")
//     .find(".qty");
//     $n.val(Number($n.val())+1);
//     update_amounts();
// });
// var decrementQty = minusBtn.click(function(){
//     var $n = $(this)
//     .parent(".box")
//     .find(".qty");
//     var QtyVal = Number($n.val());
//     if (QtyVal > 0){
//         $n.val(QtyVal - 1);
//     }
//     update_amounts();
// });

let modalOpen = ()=>{
    modalWindow.style.display = 'flex';
}
function modalClose(){
    modalWindow.style.display = 'none';
    
}
let modalButton = document.querySelector('.box-modal');
let modalWindow = document.querySelector('.modal-window');
modalButton.addEventListener('click', modalOpen);

let modalCloseButton= document.querySelector('.modal-close');
modalCloseButton.addEventListener('click', modalClose);



// let promise = new Promise(
//     (resolve, reject) =>{
//         let a = 1 +1;
//         if(a == 2){
//             resolve(2);
//         }else{
//             reject('fail');
//         }
//     }
// )
// console.log(promise);
// let div = document.querySelector('.result1');
// promise.then((result)=>{
//         div.innerHTML = result * 10;
//         console.log('promise completed');
// }).catch((r)=>{
//     console.log(r);
// })
// const pr1 = new Promise(
//     (s,e)=>{
//         if(false){ e(` pr1 not resolved `)};
//         s(`pr1 resolved`);
//     }
// )
// const pr2 = new Promise(
//     (s,e)=>{
//         if(false){ e(` pr2 not resolved `)};
//         s(`pr2 resolved`);
//     }
// )

// const pr3 = new Promise(
//     (s,e)=>{
//         if(false){ e(` pr2 not resolved `)};
//         s(`pr3 resolved`);
//     }
// )
// async function doPromises(){
//     let s1 = '';
//     try{
//         const promise1 = await pr1;
//         const promise2 = await pr2;
//         const promise3 = await pr3;
//         return await promise1 + promise2 + promise3;
//     } catch(a){
//         console.log(a);
//     }
// }
// let res1 = doPromises();
// res1.then((r)=>{console.log(r)});

// const qetUrl = (url)=>{
//     let res;
//     return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest();
//         request.addEventListener(`readyatatechange`, ()=>{
//             if (request.readyState==4){
//                 if(request.status==200){
//                     let res = JSON.parse(request.responseText);
//                     resolve(res);
//                 }else{
//                     res = `something wrong `+request.status;
//                     reject(res);
//                 }
//             }


//         })
//         try{
//             request.open('GET', url);
//             request.send();
//         }
//         catch(e) {console.log(e)};
        
        
//     })
// }
// qetUrl('https://jsonplaceholder.typicode.com/users')
//     .then(r=>{
//         console.log(r);
//         return getUrl('data.json');
//     })
//     .then(r=>{
//         console.log(r);
//         return getUrl('data2.json');
//     })
//     .then(r=> console.log(r))
//     .then(r=> console.log('finished'))
//     .catch(e=> console.log(e));
let div = document.querySelector('.output_com')
let str = '';
let response = fetch('https://dummyjson.com/comments')
    .then(r=>{return r.json()})
    .then(r=>console.log(r))

div.innerHTML = response[0].body;
    // r.json.forEach(element => {
    //     str += element;
    // });
    // div.innerHTML = str;

// Promise.all([pr1, pr2, pr3]).then((result)=>{
//     console.log(result);
// }).catch((r)=>{console.log('error: ', r)});

