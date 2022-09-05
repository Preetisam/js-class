(function(){
    function outerFunction(){
        let firstName ="Tony";
        function innerFunction(){
            let lastName ="Stark";
            console.log (firstNAme +lastName)   ;
        }

        innerFunction();
    }
    //inovking outer function
    console.log(outerFunction());
})();