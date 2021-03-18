document.addEventListener( "DOMContentLoaded" , (e) => {
  const svgDocument = document.getElementById("map"); 
  

  const countInfo = {
    "AF": "Afghanistan", 
     "AL": "Albania", 
     "DZ": "Algeria", 
     "AI": "Anguilla", 
     "AM": "Armenia", 
     "AW": "Aruba", 
     "AT": "Austria", 
     "BH": "Bahrain", 
     "BD": "Bangladesh", 
     "BB": "Barbados", 
     "BY": "Belarus", 
     "BE": "Belgium", 
     "BZ": "Belize", 
     "BJ": "Benin", 
     "BM": "Bermuda", 
     "BT": "Bhutan", 
     "BO": "Bolivia", 
     "BA": "Bosnia and Herzegovina", 
     "BW": "Botswana", 
     "BR": "Brazil", 
     "VG": "British Virgin Islands", 
     "BN": "Brunei Darussalam", 
     "BG": "Bulgaria", 
     "BF": "Burkina Faso", 
     "BI": "Burundi", 
     "KH": "Cambodia", 
     "CM": "Cameroon", 
     "CF": "Central African Republic", 
     "TD": "Chad", 
     "CO": "Colombia", 
     "CR": "Costa Rica", 
     "HR": "Croatia", 
     "CU": "Cuba", 
     "CW": "Curaçao", 
     "CZ": "Czech Republic", 
     "CI": "Côte d'Ivoire", 
     "KP": "Dem. Rep. Korea", 
     "CD": "Democratic Republic of the Congo", 
     "DJ": "Djibouti", 
     "DM": "Dominica", 
     "DO": "Dominican Republic", 
     "EC": "Ecuador", 
     "EG": "Egypt", 
     "SV": "El Salvador", 
     "GQ": "Equatorial Guinea", 
     "ER": "Eritrea", 
     "EE": "Estonia", 
     "ET": "Ethiopia", 
     "FI": "Finland", 
     "GF": "French Guiana", 
     "GA": "Gabon", 
     "GE": "Georgia", 
     "DE": "Germany", 
     "GH": "Ghana", 
     "GL": "Greenland", 
     "GD": "Grenada", 
     "GU": "Guam", 
     "GT": "Guatemala", 
     "GN": "Guinea", 
     "GW": "Guinea-Bissau", 
     "GY": "Guyana", 
     "HT": "Haiti", 
     "HN": "Honduras", 
     "HU": "Hungary", 
     "IS": "Iceland", 
     "IN": "India", 
     "IR": "Iran", 
     "IQ": "Iraq", 
     "IE": "Ireland", 
     "IL": "Israel", 
     "JM": "Jamaica", 
     "JO": "Jordan", 
     "KZ": "Kazakhstan", 
     "KE": "Kenya", 
     "XK": "Kosovo", 
     "KW": "Kuwait", 
     "KG": "Kyrgyzstan", 
     "LA": "Lao PDR", 
     "LV": "Latvia", 
     "LB": "Lebanon", 
     "LS": "Lesotho", 
     "LR": "Liberia", 
     "LY": "Libya", 
     "LT": "Lithuania", 
     "LU": "Luxembourg", 
     "MK": "Macedonia", 
     "MG": "Madagascar", 
     "MW": "Malawi", 
     "MV": "Maldives", 
     "ML": "Mali", 
     "MH": "Marshall Islands", 
     "MQ": "Martinique", 
     "MR": "Mauritania", 
     "YT": "Mayotte", 
     "MX": "Mexico", 
     "MD": "Moldova", 
     "MN": "Mongolia", 
     "ME": "Montenegro", 
     "MS": "Montserrat", 
     "MA": "Morocco", 
     "MZ": "Mozambique", 
     "MM": "Myanmar", 
     "NA": "Namibia", 
     "NR": "Nauru", 
     "NP": "Nepal", 
     "NL": "Netherlands", 
     "BQBO": "Netherlands", 
     "NI": "Nicaragua", 
     "NE": "Niger", 
     "NG": "Nigeria", 
     "PK": "Pakistan", 
     "PW": "Palau", 
     "PS": "Palestine", 
     "PA": "Panama", 
     "PY": "Paraguay", 
     "PE": "Peru", 
     "PL": "Poland", 
     "PT": "Portugal", 
     "QA": "Qatar", 
     "CG": "Republic of Congo", 
     "KR": "Republic of Korea", 
     "RE": "Reunion", 
     "RO": "Romania",
     "RU": 50, 
     "RW": "Rwanda", 
     "BQSA": "Saba (Netherlands)", 
     "LC": "Saint Lucia", 
     "VC": "Saint Vincent and the Grenadines", 
     "BL": "Saint-Barthélemy", 
     "MF": "Saint-Martin", 
     "SA": "Saudi Arabia", 
     "SN": "Senegal", 
     "RS": "Serbia", 
     "SL": "Sierra Leone", 
     "SX": "Sint Maarten", 
     "SK": "Slovakia", 
     "SI": "Slovenia", 
     "SO": "Somalia", 
     "ZA": "South Africa", 
     "SS": "South Sudan", 
     "ES": "Spain", 
     "LK": "Sri Lanka", 
     "BQSE": "St. Eustatius (Netherlands)", 
     "SD": "Sudan", 
     "SR": "Suriname", 
     "SZ": "Swaziland", 
     "SE": "Sweden", 
     "CH": "Switzerland", 
     "SY": "Syria", 
     "TW": "Taiwan", 
     "TJ": "Tajikistan", 
     "TZ": "Tanzania", 
     "TH": "Thailand", 
     "GM": "The Gambia", 
     "TL": "Timor-Leste", 
     "TG": "Togo", 
     "TN": "Tunisia", 
     "TM": "Turkmenistan", 
     "TV": "Tuvalu", 
     "UG": "Uganda", 
     "UA": "Ukraine", 
     "AE": "United Arab Emirates", 
     "UY": "Uruguay", 
     "UZ": "Uzbekistan", 
     "VE": "Venezuela", 
     "VN": "Vietnam", 
     "EH": "Western Sahara", 
     "YE": "Yemen", 
     "ZM": "Zambia", 
     "ZW": "Zimbabwe"
   }

  svgDocument.addEventListener("mouseover", (e) => {
    if (e.target.id != "map") {
      const parentElement = e.target.parentElement;
      let mapTooltip = document.getElementById("map-tooltip");

      mapTooltip.classList.remove("hidden");

      mapTooltip = document.getElementById("map-tooltip");


      // Перекрашиваем
      parentElement.setAttribute("fill", "#38ABFF");


      // Показываем подсказку
      document.body.append(mapTooltip);

      function moveAt(pageX, pageY) {
        mapTooltip.style.left = pageX - mapTooltip.offsetWidth + 15 + 'px';
        mapTooltip.style.top = pageY - mapTooltip.offsetHeight - 6 +'px';
      }
      
      moveAt(e.pageX, e.pageY);
      
      

      mapTooltip.textContent = `Уникальные посетители - ${countInfo[parentElement.id] || 0}`;

      function onmousemove(e) {   
        moveAt(e.pageX, e.pageY);             
      };

      svgDocument.addEventListener("mousemove", onmousemove);


      svgDocument.onmouseout = (e) => {
        parentElement.setAttribute("fill", "#AAAAAA");

    
        if (e.target.id != "map") {
          mapTooltip.classList.add("hidden");

          svgDocument.removeEventListener("mousemove", onmousemove);
          svgDocument.onmouseout = null;
        }
      };
    }
  });
  
  // Таблица
  const table = document.querySelector(".metricks__table");

  table.addEventListener("click", (e) => {
    const parentElement = e.target.parentElement;

    if (parentElement.classList.contains("group__header")) {
      console.log(parentElement.classList);

      parentElement.parentElement.classList.toggle("group-active");
    }
  })
});
