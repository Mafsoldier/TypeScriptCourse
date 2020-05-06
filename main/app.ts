let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

if(typeof userInput === 'string'){
    userName = userInput;
}
    

function generateError(message: string, code: number): never{

    throw {message: message, errocode: code};
}


generateError('An error occured!', 11);
