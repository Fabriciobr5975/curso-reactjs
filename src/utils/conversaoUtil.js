
export function tratarNumeroComVirgula(valor) {
    return Number(valor.replaceAll(',', '.'));
}

export function imprimirNumeroComVirgula(valor) {
    return String(valor).replaceAll('.', ',');
}