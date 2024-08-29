let shareBox = document.querySelector('.ShareBox-Container')
let sharebtns = document.querySelectorAll('.SharePro')
let closeShare =  document.querySelector('.ShareBox-Container .CloseShare')
let whatsapp = document.querySelector('.ShareBox-Container .whatsapp')
let linkdin = document.querySelector('.ShareBox-Container .linkdin')
let telegram = document.querySelector('.ShareBox-Container .telegram')

let productLink
sharebtns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        shareBox.classList.add('OpenShare')
        productLink = e.currentTarget.getAttribute('pro-link')
        console.log(productLink);
        whatsapp.setAttribute('href',`https://api.whatsapp.com/send?text=http://ebtw.undertest.ir/${productLink}`)
        linkdin.setAttribute('href',`https://www.linkedin.com/cws/share?url=http://ebtw.undertest.ir/${productLink}`)
        telegram.setAttribute('href',`https://t.me/share/url?url=http://ebtw.undertest.ir/${productLink}`)
    })
})
closeShare.addEventListener('click',()=>{
    shareBox.classList.remove('OpenShare')
})