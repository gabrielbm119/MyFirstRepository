


var upload = document.querySelector('input#upload')

var txt = document.querySelector('p#output')

var button = document.querySelector('input#button')

upload.addEventListener('change', ()=>{
    let fr = new FileReader()
    
    fr.readAsText(upload.files[0])

    fr.onload = function() {
        txt = `${fr.result}` // *txt* recebe o texto original
        
        const ExpReg = /;|\n/
        
        var splittxt = txt.split(ExpReg) // *splittxt* recebe o texto original separado num array de acordo com a quebra de linha e ;
        
        for (let i = 0; i<17; i++){
            splittxt.shift() // exclui os elementos contendo o conteúdo do cabeçalho do texto
        }
        
        for (let i=splittxt.length; i=0; i--){
            new Array(splittxt[0],splittxt[1],splittxt[2],splittxt[3],splittxt[4],splittxt[5],splittxt[6],splittxt[7],splittxt[8],splittxt[9],splittxt[10],splittxt[11],splittxt[12],splittxt[13],splittxt[14],splittxt[15],splittxt[16])
            for (let i=0; i<17; i++){
                splittxt.shift()
            }
            for (i of new Array) {
                document.write(i)
            }
        }
        
        /*for(let i=0; i<splittxt.length;i++){
            document.write(`${splittxt[i]} <br>`) // escreve indice por indice do array no documento 
        }*/
        
    }
})

