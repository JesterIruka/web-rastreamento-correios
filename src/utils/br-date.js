function format(data){
    let dia = zeroAtLeft(data.getDate()),
        mes  = zeroAtLeft(data.getMonth()+1),
        ano = data.getFullYear(),
        hora = zeroAtLeft(data.getHours()),
        minuto = zeroAtLeft(data.getMinutes());
    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

function zeroAtLeft(number) {
    if (typeof(number) === 'number') number = number.toString();
    if (number.length == 1) return '0'+number;
    return number;
}

module.exports = format;