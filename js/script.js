const searchForm =document.querySelector(".search-form");
const cartItem =document.querySelector(".cart-items-container");
const navbar =document.querySelector(".navbar");



// buttons
// searchbtn butonuna eristik
const searchBtn =document.querySelector("#search-btn");
const cartBtn =document.querySelector("#cart-btn");
const menuBtn =document.querySelector("#menu-btn");



// arama kismini acip kapatmak icin toggle kullandik 
searchBtn.addEventListener("click",function () {
    searchForm.classList.toggle("active");
// arama kismina tikladigimizda baska yere tiklayip kapatiyoruz ama yazi yerine tikladigimizda kapatmiyoruz ifle yaptik
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)

            ) {
            searchForm.classList.remove("active");
        }
    })
});
// shopping kismini acip kapatmak icin toggle kullandik 
cartBtn.addEventListener("click",function () {
    cartItem.classList.toggle("active");
// arama kismina tikladigimizda baska yere tiklayip kapatiyoruz ama yazi yerine tikladigimizda kapatmiyoruz ifle yaptik
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItem)

            ) {
                cartItem.classList.remove("active");
        }
    })
});

menuBtn.addEventListener("click",function () {
    navbar.classList.toggle("active");
// arama kismina tikladigimizda baska yere tiklayip kapatiyoruz ama yazi yerine tikladigimizda kapatmiyoruz ifle yaptik
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)

            ) {
                navbar.classList.remove("active");
        }
    })
});

console.log(menuBtn)
