function three(callback){
    setTimeout(function(){
        
        callback(3);
    },500);
}

function addOne(addend){
    console.log(addend + 1);
}

addOne(three())