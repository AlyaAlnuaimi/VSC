var x;
/*
[Data Types]
Number
    12.5
    -50.3333
    -50
    12

String - all quotes are accepted in JS 
    "This is a string"
    'still a string'
    `another String` عند حرف الذال
    
Boolean
    true
    false

null
undefined
*/
/*
Variable Decleration
var : old fashion don't use it 
const: 8eemh will not changed at all
let : 8eemh agdr a'3yerha 3gb
    var, let, const
*/
//Variable Hoisting - لازم اعرف الفاريبل قبل ما اسوي console.log
/* or it will display an error (NaN) Mean the variable mafeeh 8eemh 


console.log(x);
x=5;
console.log(x);
console.log(y);
//Reference Error
let y=5;
starts with a-z, A-Z, _
inside variable name: a-z, A-Z, 0-9, _
*/
let firstName = "Mohamed Ahmed";
let last_name = "Mohamed Ahmed";
let age = 55;
let score = 68;

let first_number = "13";
let second_number = "14";
console.log(first_number);
let sum = Number(first_number) + Number(second_number);
//first_number = first_number + 1;
console.log(first_number);
console.log(sum);

//Types Conversions
    //Number('12')
    //String('')
    //Boolean('')
    //parseFloat('12.5$')
    //parseInt()
//Type Coercing
    //1+"5" => concatenation (convert number into string)
    //output = 15
    //1-"5" => negation (convert string into number)
    //output = 4 لانه ما يستوي الا فالجمع باقي العمليات الحسابيه بتستوي حتى لو عندي سترنق


//Operators and Operator Presedence
    //Arithmetic (return Value)
        // +,-,*,/,%,**
    //Assigment (return Value)
        // x=5 , x+=5; mean --> (x=x+5),x-=5;

        // x+1;
        //, x++ : mean (x+1)
        //, x--;: mean (x-1)
        // --x : subtract 1 mn elx w 3gb e3r'6ha = 4
        // ++x : add 3la (x) 1 =6

    //Conditional Assigment
        //x=condition?true_value:false_value;

    //Comparison (return Boolean) -> true or false
        //x==5 equals (type coercing)
        //==, >,>=, <, <=, !=
        // === , !== (comapre value and type, no type coercing)
        
    //Logical (return Boolean)
        //&& (and operator)
        //|| (or operator)
        // !
    // (2+5)*6 //42, 32

//Conditional Statements
x=67;
if(x==5){
    console.log('x=5');   
}
else if(x>=4){
    console.log('x is greater than 5');
}
else{
    console.log('x is not equal 5');
    alert('You are wrong');
}

switch(x){
    case 5:
        console.log('5 (switch)');
        break;
    case 6:
        console.log('6 (switch)');
        break;
    default:
        console.log('x is not equals to 6,5');
}
if(0){
console.log(0);
}
//Falsely Values
    //0,'',undefined,null,NaN,false
    //otherwise = > true