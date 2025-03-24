function calculate() {
    // Отримання значень з полів вводу
    var HP = parseFloat(document.getElementById("hp").value);
    var CP = parseFloat(document.getElementById("cp").value);
    var SP = parseFloat(document.getElementById("sp").value);
    var NP = parseFloat(document.getElementById("np").value);
    var OP = parseFloat(document.getElementById("op").value);
    var WP = parseFloat(document.getElementById("wp").value);
    var AP = parseFloat(document.getElementById("ap").value);

    // Розрахунок коефіцієнтів переходу
    var k1 = 100 / (100 - WP);
    var k2 = 100 / (100 - WP - AP);

    // Розрахунок складу сухої маси
    var HS = HP * k1;
    var CS = CP * k1;
    var SS = SP * k1;
    var NS = NP * k1;
    var OS = OP * k1;
    var AS = AP * k1;

    // Розрахунок складу горючої маси
    var HG = HP * k2;
    var CG = CP * k2;
    var SG = SP * k2;
    var NG = NP * k2;
    var OG = OP * k2;

    // Розрахунок нижчої теплоти згоряння
    var QRN = ((339 * CP) + (1030 * HP) - (108.8 * (OP - SP)) - (25 * WP))/1000;
    var QF = QRN;
    var QD = (QF + 0.025 * WP) *(100 /(100 - WP));

    var QRG = (QRN + 0.025 * WP) * (100/( 100 - WP - AP));
    // Відображення результатів
    document.getElementById("result").innerText = `Коефіцієнт переходу робочої до сухої: ${k1.toFixed(2)}\nКоефіцієнт переходу робочої до горючої: ${k2.toFixed(2)}\nСуха маса: \nH=${HS.toFixed(2)}%,\n C=${CS.toFixed(2)}%,\n S=${SS.toFixed(2)}%,\n N=${NS.toFixed(2)}%,\n O=${OS.toFixed(2)}%,\n A=${AS.toFixed(2)}%\n
Горюча маса: \nH=${HG.toFixed(2)}%,\n C=${CG.toFixed(2)}%,\n S=${SG.toFixed(2)}%,\n N=${NG.toFixed(2)}%,\n O=${OG.toFixed(2)}%\n
Нижча теплота згоряння: ${QRN.toFixed(4)}\n Нижча теплота згоряння для сухої маси: ${QD.toFixed(2)}%,\n Нижча теплота згоряння для горючої маси: ${QRG.toFixed(2)}`;
}