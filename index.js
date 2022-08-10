

function receivesAFunction(callback){
    callback();
};

function returnsANamedFunction(){
     
    thisFunction = function(){console.log(`This is a returned function.`)};    
    return thisFunction;
    };


function returnsAnAnonymousFunction (thisFunction){
       return function(){console.log(`This is a returned anonymous function.`)};
};



function callback(){
    console.log(`This is just a comment from the callback.`);
}

