module.exports = function reverse (n) {
    let absloute = Math.abs(n);
    const newStr = String(absloute);
    let massive = newStr.split('');
    let reverMas = massive.reverse();
    
    let word = +reverMas.join('');
    // let number = +word;
    return word;
}



