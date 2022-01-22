function insert(number) {
    let insertNumber = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = insertNumber + number;
    if ((insertNumber + number).length > 12) {
        document.getElementById('result').innerHTML = '[ERRO]';
        document.getElementById('result').innerHTML = '';
        alert('Número máxixo de digitos foi excedido');
    }
}

function clean() {
    document.getElementById('result').innerHTML = '';
}

function oneClear() {
    let res = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = res.substring(0, res.length - 1)
}

function buttonEquality() {
    let answer = document.getElementById('result').innerHTML;
    if (buttonEquality) {
        document.getElementById('result').innerHTML = eval(answer);
    } else {
        document.getElementById('result').innerHTML = '[ERROR]';
    }
}