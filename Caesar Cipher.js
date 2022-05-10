
// -----That function is a decode of cypher ROT13----- //

//Create a function that gets a string in ROT13 and returns a decoded string 
function rot13(str){
//Hash table ROT13        
let hash={
    'A':'N','B':'O','C':'P','D':'Q','E':'R','F':'S','G':'T','H':'U','I':'V','J':'W','K':'X','L':'Y','M':'Z','N':'A','O':'B','P':'C','Q':'D','R':'E','S':'F','T':'G','U':'H','V':'I','W':'J','X':'K','Y':'L','Z':'M'         
}

//Array for store the decoded string
let string=[]

//Loop for iterate the string,filtering e decoding the string
for(let i=0;i<str.length;i++){
    if(str[i].match(/\W/)){
        string.push(str[i])
    }
    string.push(hash[str[i]])
}
//Reagroup the string and return it
return string.join("")
}


