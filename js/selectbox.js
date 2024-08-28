// SELECTBOX
let defOP = document.querySelectorAll('.default_option')
defOP.forEach((d)=>{
    d.addEventListener('click',(e)=>{
   e.currentTarget.parentElement.classList.toggle("active")
   let lis =e.currentTarget.nextElementSibling.querySelectorAll('.select_ul li')
   lis.forEach(l=>{
    l.addEventListener('click',(e1)=>{
        let currentele = e1.currentTarget.querySelector('p').innerHTML
        console.log(e1.currentTarget);
        // let catid = e1.currentTarget.getAttribute('data-catid')
        // var url = `/load-product.bc?catid=${catid}`;
        // $(".ProductList-Container").load(url);
        e1.currentTarget.parentElement.previousElementSibling.querySelector('p').innerHTML = currentele;
        $('.select_ul li').removeClass( 'active' )
        e1.currentTarget.classList.add("active")
        e1.currentTarget.parentElement.parentElement.classList.remove("active")
       })
   })
})
})