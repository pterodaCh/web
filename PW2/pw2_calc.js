
function calculate() { 

    var mas_donetsk_coal_fuel = document.getElementById("donetsk_coal_fuel").value; // Донецьке газове вугілля марки ГР
    var mas_s_mazut = document.getElementById("s_mazut").value; // Високосірчистий мазут марки 40
    var mas_nat_gas_fuel = document.getElementById("nat_gas_fuel").value; // Природний газ із газопроводу Уренгой-Ужгород
  
      
      // константі значенння
      var Qri_coal = 20.47; 
      var Qri_mazut = 39.48;
      var Qri_gas = 33.08;
      var avyn_coal = 0.8;
      var avyn_mazut = 1;
      var mass_ash_coal = 25.2;
      var mass_ash_mazut = 0.15;
      var mass_combustion_coal = 1.5;
      var mass_combustion_mazut = 0;
      var efficiency_clean = 0.985;
  
      //  обрахунки
      var em_coal = (Math.pow(10, 6) / Qri_coal) * avyn_coal * (mass_ash_coal / (100 - mass_combustion_coal)) * (1 - efficiency_clean);
      var vuk_coal = Math.pow(10, -6) * em_coal * Qri_coal * mas_donetsk_coal_fuel;
      var em_mazut = (Math.pow(10, 6) / Qri_mazut) * avyn_mazut * (mass_ash_mazut / (100 - mass_combustion_mazut)) * (1 - efficiency_clean);
      var vuk_mazut = Math.pow(10, -6) * em_mazut * Qri_mazut * mas_s_mazut;
      var em_gas = 0;
      var vuk_gas = Math.pow(10, -6) * em_gas * Qri_gas * mas_nat_gas_fuel;

      // Результати
      document.getElementById("result").innerText = `Kтв при спалюванні вугілля становитиме: ${em_coal.toFixed(2)} г/ГДж\nЕтв при спалюванні вугілля становитиме: ${vuk_coal.toFixed(2)} т.\n\nKтв при спалюванні мазуту становитиме:${em_mazut.toFixed(2)} г/ГДж\nEтв при спалюванні мазуту становитиме: ${vuk_mazut.toFixed(2)} т.\n\nKтв при спалюванні природного газу становитиме: ${em_gas} г/ГДж\nEтв при спалюванні природного газу становитиме: ${vuk_gas} т.`
  
                 
  }