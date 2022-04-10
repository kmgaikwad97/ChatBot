function getBotResponse(input){
    // rock paper scissors
    if(input == "rock"){
        return "paper";
    }else if(input == "paper"){
        return "scissors";
    }else if(input == "scissors"){
        return "rock";
    }



    // Simple Responses
    if(input == "hello"){
        return "Hello there";
    }else if(input == "goodbye"){
        return "Talk to you later!";
    }else if(input == "hi"){
        return "hey ! How are You ?";
    }else if(input == "Fine"){
        return "Cool";
    }else if(input == "jevlis ka?"){
        return "You are blocked by the Bot"
    }
    
    else{
        return "Try asking something else";
    }   


    
    
    
}