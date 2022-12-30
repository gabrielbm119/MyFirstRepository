

function podeSacar(saldo, saque) {
    
    if (saque < 0){
        console.log('erro')
    } else if (saque <= saldo){
        console.log('pode sacar')
    } else {
        console.log('saldo insuficiente')
    }
}

podeSacar(4000, 563)
podeSacar(5000, 54)
podeSacar(6, 50)