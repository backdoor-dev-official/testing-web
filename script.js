function appendToInput(value) {
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function calculate() {
    var input = document.getElementById('input').value;
    try {
        var result = eval(input);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Operación inválida');
        }
        document.getElementById('input').value = result;
    } catch (error) {
        alert('Error: ' + error.message);
        clearInput();
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        calculate();
    }
}
