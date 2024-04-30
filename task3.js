// p = (a + b + c) / 2
// s = V p * (p-a) * (p-b) * (p-c)

let a =  Number (prompt ("a ededini daxil edin") )
let b =   Number (prompt ("b ededini daxil edin") )
let c =   Number (prompt ("c ededini daxil edin") )


let p = (a + b + c) / 2

let S = Math.sqrt(p * (p-a) * (p-b) * (p-c))

alert ("Bu ucbucagin sahesi " + S + " sm-dir")

