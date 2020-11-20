var Vowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){
        if(letter === vowels[i]){
            return ("This is a vowel");
         }
    }

    return ("This is not a vowel");

};
console.log(Vowel("o"));  