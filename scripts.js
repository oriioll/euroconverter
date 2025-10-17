document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault();
    const value1 = parseFloat(document.getElementById('value1').value);
    const currency = document.getElementById('currency').value;
    let conversion;

    switch (currency) {
        case 'CHF':
            conversion = 0.95;
            break;
        case 'USD':
            conversion = 1.1;
            break;
        case 'GBP':
            conversion = 0.85;
            break;
        case 'JPY':
            conversion = 130;
            break;
        case 'AUD':
            conversion = 1.5;
            break;
        case 'CAD':
            conversion = 1.4;
            break;
        case 'CNY':
            conversion = 7.5;
            break;
        case 'INR':
            conversion = 80;
            break;
        case 'RUB':
            conversion = 75;
            break;
        case 'BRL':
            conversion = 5.5;
            break;
        case 'MXN':
            conversion = 22;
            break;
        case 'KRW':
            conversion = 1300;
            break;
        default:
            conversion = 1;
    }

    const convertedValue = value1 * conversion;
    document.getElementById('value2').value = convertedValue.toFixed(2);
});
