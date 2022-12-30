let text = 'bnno'

let cont = 0
let Obj = []

for (let carac of text) {
    if (Obj.indexOf(carac) == -1) {
        Obj.push(carac)
    } else{
        cont++
    }
}
console.log(cont)


