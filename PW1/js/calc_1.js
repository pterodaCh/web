function calculate() {
    // Отримання значень з полів вводу
    var x1 = parseFloat(document.getElementById("x1").value); //вуглець
    var x2 = parseFloat(document.getElementById("x2").value); //водень
    var x3 = parseFloat(document.getElementById("x3").value); //кисень
    var x4 = parseFloat(document.getElementById("x4").value); //сірка
    var x5 = parseFloat(document.getElementById("x5").value); //нижча теплота згорання
    var x6 = parseFloat(document.getElementById("x6").value); //вологість палива
    var x7 = parseFloat(document.getElementById("x7").value); //зольність
    var x8 = parseFloat(document.getElementById("x8").value); //вміст ванадію

    // Розрахунок коефіцієнтів переходу
    var k1 = (100 - x6 - x7) / 100;
    var k2 = (100 - x6) / 100;

    // Розрахунок складу робочої маси
    var x1_r = x1 * k1;
    var x2_r = x2 * k1;
    var x3_r = x3 * k1;
    var x4_r = x4 * k1;
    var x7_r = x7 * k2;
    var x8_r = x8 * k2
    
    // Розрахунок нижчої теплоти згоряння
    var QrH = x5 * k1;

    // Відображення результатів
    document.getElementById("result").innerText = `
        Склад робочої маси мазуту: \nC = ${x1_r.toFixed(2)}%,\nH = ${x2_r.toFixed(2)}%,\nO = ${x3_r.toFixed(2)}%,\nS = ${x4_r.toFixed(2)}%\nЗола = ${x7_r.toFixed(2)}%\nВанадій = ${x8_r.toFixed(2)} мг/кг, \nНижча теплота згоряння: ${QrH.toFixed(2)} МДж/кг`;
        
}
