/*function fun (parameters)
{

}

fun(argument)
*/

// type of user define
// 1. no argument & no return
// 2. argument & no return
// 3. argument & return
// 4. no argument & return



// 2. function demo(num)
// {
//     console.log(num+num)
// }
// demo(20)


//wap to check number is even or odd using argument & no return

// let n=parseInt(prompt("enter a number"))
// function check (num)
// {
//     if (num%2==0){
//         document.write("even")
//     }
//     else{
//         document.write("odd")
//     }
// }

// check(n)



// 3. function fun(num)
// {
//   return num*num
// }
// fun(20)

// function check  (num){
//     return num*num
// }

// console.log(check(10))

// let a=fun(10)
// console.log(a)

//W.A.P to find area of circle using argument & return


let r=parseInt(prompt("enter a number"))
 function fun(num)
{
//   return 2*3.14*r
  return 3.14*r*r
}
console.log(fun(r))