//delgets
var uiController = (function(){
   
})();
// sanhuu
var financeController = (function(){
    
})();

//holbogch
var appController = (function(uController, fnController){
    var ctrlAddItem = function(){
        console.log("ctrl function");
    }
    document.querySelector('.add__btn').addEventListener('click', function(){
        ctrlAddItem();
        //1. ogodol delgetses awna
        //2. sanhuu luu damjuulj ogno 
        //3. income expensis oruulna
        //4. tosov tootsno
        //5. etsiin uldegdel totsoo delgetsen harulna
    });
    document.addEventListener("keypress",function(event){
        console.log("key = " + event.key + " " + event.keyCode);
        if(event.keyCode === 13 || event.which === 13) // deer uyiin browserder which gj hiadag.
            ctrlAddItem();
    });
})(uiController, financeController); // ui bolon fn n orj paramettrn orj irj tedniig holboj ogoh module
