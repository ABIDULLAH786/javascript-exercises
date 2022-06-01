function replaceVowel(str){

    let withOutVowels=''
    vowels = 'aeiou';
    for(let i=0; i<str.length;i++)
    {
        if(!vowels.includes(str[i]))
            withOutVowels+=str[i];
        else
            withOutVowels+="*";

    }
    return withOutVowels;
}

console.log(replaceVowel("Hello World")); //Hll Wrld