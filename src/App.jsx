import React, {Component} from 'react';
import { render } from 'react-dom';
import { HighchartsChart, withHighcharts, Title, XAxis, YAxis, TreemapSeries, Tooltip } from 'react-jsx-highcharts';
import drilldown from 'highcharts/modules/drilldown'
var Highcharts = require('highcharts');
require('highcharts/modules/heatmap')(Highcharts);
require('highcharts/modules/treemap')(Highcharts);
drilldown(Highcharts);

var data = {
  "South-East Asia": {
    "Sri Lanka": {
      "Communicable diseases": "75.5",
      "Injuries": "89.0",
      "Non-communicable diseases": "501.2"
    },
    "Bangladesh": {
      "Non-communicable diseases": "548.9",
      "Injuries": "64.0",
      "Communicable diseases": "234.6"
    },
    "Myanmar": {
      "Communicable diseases": "316.4",
      "Injuries": "102.0",
      "Non-communicable diseases": "708.7"
    },
    "Maldives": {
      "Injuries": "35.0",
      "Non-communicable diseases": "487.2",
      "Communicable diseases": "59.2"
    },
    "Democratic People's Republic of Korea": {
      "Injuries": "91.9",
      "Non-communicable diseases": "751.4",
      "Communicable diseases": "117.3"
    },
    "Bhutan": {
      "Injuries": "142.2",
      "Non-communicable diseases": "572.8",
      "Communicable diseases": "186.9"
    },
    "Thailand": {
      "Injuries": "72.8",
      "Communicable diseases": "123.3",
      "Non-communicable diseases": "449.1"
    },
    "Nepal": {
      "Non-communicable diseases": "678.1",
      "Injuries": "88.7",
      "Communicable diseases": "251.8"
    },
    "Timor-Leste": {
      "Injuries": "69.2",
      "Non-communicable diseases": "670.5",
      "Communicable diseases": "343.5"
    },
    "India": {
      "Communicable diseases": "253.0",
      "Injuries": "115.9",
      "Non-communicable diseases": "682.3"
    },
    "Indonesia": {
      "Injuries": "49.3",
      "Non-communicable diseases": "680.1",
      "Communicable diseases": "162.4"
    }
  },
  "Europe": {
    "Hungary": {
      "Communicable diseases": "16.8",
      "Non-communicable diseases": "602.8",
      "Injuries": "44.3"
    },
    "Poland": {
      "Communicable diseases": "22.6",
      "Non-communicable diseases": "494.5",
      "Injuries": "48.9"
    },
    "Israel": {
      "Communicable diseases": "31.2",
      "Non-communicable diseases": "311.2",
      "Injuries": "20.8"
    },
    "France": {
      "Communicable diseases": "21.4",
      "Non-communicable diseases": "313.2",
      "Injuries": "34.6"
    },
    "Turkey": {
      "Injuries": "39.1",
      "Communicable diseases": "43.9",
      "Non-communicable diseases": "555.2"
    },
    "Kyrgyzstan": {
      "Communicable diseases": "65.8",
      "Injuries": "65.1",
      "Non-communicable diseases": "835.4"
    },
    "Croatia": {
      "Communicable diseases": "12.2",
      "Non-communicable diseases": "495.8",
      "Injuries": "40.1"
    },
    "Portugal": {
      "Injuries": "25.2",
      "Communicable diseases": "39.9",
      "Non-communicable diseases": "343.3"
    },
    "Greece": {
      "Injuries": "26.5",
      "Non-communicable diseases": "365.0",
      "Communicable diseases": "24.1"
    },
    "Italy": {
      "Injuries": "20.1",
      "Communicable diseases": "15.5",
      "Non-communicable diseases": "303.6"
    },
    "Belgium": {
      "Communicable diseases": "27.8",
      "Injuries": "38.9",
      "Non-communicable diseases": "356.8"
    },
    "Lithuania": {
      "Non-communicable diseases": "580.6",
      "Communicable diseases": "25.5",
      "Injuries": "76.4"
    },
    "Uzbekistan": {
      "Communicable diseases": "85.8",
      "Injuries": "47.4",
      "Non-communicable diseases": "810.9"
    },
    "Serbia": {
      "Communicable diseases": "19.4",
      "Injuries": "32.0",
      "Non-communicable diseases": "657.7"
    },
    "Austria": {
      "Non-communicable diseases": "359.5",
      "Injuries": "30.6",
      "Communicable diseases": "12.6"
    },
    "Bosnia and Herzegovina": {
      "Injuries": "42.4",
      "Non-communicable diseases": "512.5",
      "Communicable diseases": "20.0"
    },
    "Slovakia": {
      "Injuries": "39.1",
      "Communicable diseases": "35.3",
      "Non-communicable diseases": "532.5"
    },
    "The former Yugoslav republic of Macedonia": {
      "Injuries": "24.0",
      "Communicable diseases": "16.9",
      "Non-communicable diseases": "636.5"
    },
    "Sweden": {
      "Communicable diseases": "19.3",
      "Non-communicable diseases": "333.5",
      "Injuries": "26.1"
    },
    "Russian Federation": {
      "Non-communicable diseases": "790.3",
      "Communicable diseases": "73.8",
      "Injuries": "102.8"
    },
    "Republic of Moldova": {
      "Non-communicable diseases": "787.6",
      "Injuries": "75.7",
      "Communicable diseases": "44.5"
    },
    "Ireland": {
      "Injuries": "31.8",
      "Communicable diseases": "21.5",
      "Non-communicable diseases": "343.9"
    },
    "Estonia": {
      "Injuries": "47.0",
      "Communicable diseases": "18.5",
      "Non-communicable diseases": "510.7"
    },
    "Cyprus": {
      "Non-communicable diseases": "333.0",
      "Injuries": "26.6",
      "Communicable diseases": "16.2"
    },
    "Kazakhstan": {
      "Non-communicable diseases": "949.7",
      "Injuries": "101.6",
      "Communicable diseases": "55.3"
    },
    "Netherlands": {
      "Non-communicable diseases": "355.2",
      "Injuries": "22.3",
      "Communicable diseases": "25.5"
    },
    "Finland": {
      "Non-communicable diseases": "366.6",
      "Injuries": "38.7",
      "Communicable diseases": "9.0"
    },
    "Romania": {
      "Non-communicable diseases": "612.2",
      "Injuries": "40.7",
      "Communicable diseases": "38.5"
    },
    "Albania": {
      "Non-communicable diseases": "671.6",
      "Injuries": "48.0",
      "Communicable diseases": "46.5"
    },
    "Iceland": {
      "Injuries": "29.0",
      "Non-communicable diseases": "311.7",
      "Communicable diseases": "14.0"
    },
    "Azerbaijan": {
      "Non-communicable diseases": "664.3",
      "Injuries": "33.6",
      "Communicable diseases": "70.8"
    },
    "Tajikistan": {
      "Injuries": "51.6",
      "Communicable diseases": "147.7",
      "Non-communicable diseases": "752.6"
    },
    "Bulgaria": {
      "Communicable diseases": "33.4",
      "Injuries": "36.4",
      "Non-communicable diseases": "638.2"
    },
    "United Kingdom of Great Britain and Northern Ireland": {
      "Communicable diseases": "28.5",
      "Injuries": "21.5",
      "Non-communicable diseases": "358.8"
    },
    "Spain": {
      "Communicable diseases": "19.1",
      "Injuries": "17.8",
      "Non-communicable diseases": "323.1"
    },
    "Ukraine": {
      "Communicable diseases": "69.3",
      "Injuries": "67.3",
      "Non-communicable diseases": "749.0"
    },
    "Norway": {
      "Non-communicable diseases": "336.6",
      "Communicable diseases": "25.2",
      "Injuries": "25.6"
    },
    "Denmark": {
      "Injuries": "22.5",
      "Communicable diseases": "29.5",
      "Non-communicable diseases": "406.1"
    },
    "Belarus": {
      "Non-communicable diseases": "682.5",
      "Communicable diseases": "28.3",
      "Injuries": "91.3"
    },
    "Malta": {
      "Non-communicable diseases": "364.5",
      "Injuries": "19.0",
      "Communicable diseases": "23.6"
    },
    "Latvia": {
      "Non-communicable diseases": "623.7",
      "Injuries": "54.5",
      "Communicable diseases": "26.0"
    },
    "Turkmenistan": {
      "Injuries": "93.0",
      "Communicable diseases": "115.8",
      "Non-communicable diseases": "1025.1"
    },
    "Switzerland": {
      "Communicable diseases": "14.5",
      "Non-communicable diseases": "291.6",
      "Injuries": "25.4"
    },
    "Luxembourg": {
      "Injuries": "31.1",
      "Non-communicable diseases": "317.8",
      "Communicable diseases": "20.5"
    },
    "Georgia": {
      "Injuries": "32.2",
      "Communicable diseases": "39.3",
      "Non-communicable diseases": "615.2"
    },
    "Slovenia": {
      "Non-communicable diseases": "369.2",
      "Communicable diseases": "15.4",
      "Injuries": "44.2"
    },
    "Montenegro": {
      "Communicable diseases": "18.7",
      "Non-communicable diseases": "571.5",
      "Injuries": "41.2"
    },
    "Armenia": {
      "Non-communicable diseases": "847.5",
      "Communicable diseases": "45.0",
      "Injuries": "49.2"
    },
    "Germany": {
      "Injuries": "23.0",
      "Communicable diseases": "21.6",
      "Non-communicable diseases": "365.1"
    },
    "Czech Republic": {
      "Injuries": "39.1",
      "Non-communicable diseases": "460.7",
      "Communicable diseases": "27.0"
    }
  },
  "Africa": {
    "Equatorial Guinea": {
      "Communicable diseases": "756.8",
      "Injuries": "133.6",
      "Non-communicable diseases": "729.0"
    },
    "Madagascar": {
      "Non-communicable diseases": "648.6",
      "Communicable diseases": "429.9",
      "Injuries": "89.0"
    },
    "Swaziland": {
      "Communicable diseases": "884.3",
      "Injuries": "119.5",
      "Non-communicable diseases": "702.4"
    },
    "Congo": {
      "Non-communicable diseases": "632.3",
      "Communicable diseases": "666.9",
      "Injuries": "89.0"
    },
    "Burkina Faso": {
      "Communicable diseases": "648.2",
      "Non-communicable diseases": "784.0",
      "Injuries": "119.3"
    },
    "Guinea-Bissau": {
      "Communicable diseases": "869.8",
      "Non-communicable diseases": "764.7",
      "Injuries": "111.6"
    },
    "Democratic Republic of the Congo": {
      "Non-communicable diseases": "724.4",
      "Injuries": "137.1",
      "Communicable diseases": "920.7"
    },
    "Mozambique": {
      "Injuries": "175.3",
      "Non-communicable diseases": "593.7",
      "Communicable diseases": "998.1"
    },
    "Central African Republic": {
      "Communicable diseases": "1212.1",
      "Injuries": "107.9",
      "Non-communicable diseases": "550.8"
    },
    "United Republic of Tanzania": {
      "Non-communicable diseases": "569.8",
      "Communicable diseases": "584.2",
      "Injuries": "129.2"
    },
    "Cameroon": {
      "Communicable diseases": "768.8",
      "Injuries": "106.0",
      "Non-communicable diseases": "675.2"
    },
    "Togo": {
      "Non-communicable diseases": "679.0",
      "Communicable diseases": "681.8",
      "Injuries": "93.0"
    },
    "Eritrea": {
      "Injuries": "118.7",
      "Communicable diseases": "506.0",
      "Non-communicable diseases": "671.9"
    },
    "Namibia": {
      "Injuries": "76.4",
      "Non-communicable diseases": "580.2",
      "Communicable diseases": "356.6"
    },
    "Senegal": {
      "Non-communicable diseases": "558.1",
      "Injuries": "89.3",
      "Communicable diseases": "587.7"
    },
    "Chad": {
      "Communicable diseases": "1070.9",
      "Injuries": "114.5",
      "Non-communicable diseases": "712.6"
    },
    "Benin": {
      "Injuries": "98.0",
      "Non-communicable diseases": "761.5",
      "Communicable diseases": "577.3"
    },
    "Zimbabwe": {
      "Communicable diseases": "711.3",
      "Injuries": "82.5",
      "Non-communicable diseases": "598.9"
    },
    "Rwanda": {
      "Non-communicable diseases": "585.3",
      "Injuries": "106.3",
      "Communicable diseases": "401.7"
    },
    "Zambia": {
      "Non-communicable diseases": "587.4",
      "Injuries": "156.4",
      "Communicable diseases": "764.3"
    },
    "Mali": {
      "Injuries": "119.5",
      "Communicable diseases": "588.3",
      "Non-communicable diseases": "866.1"
    },
    "Ethiopia": {
      "Injuries": "94.5",
      "Communicable diseases": "558.9",
      "Non-communicable diseases": "476.3"
    },
    "South Africa": {
      "Communicable diseases": "611.6",
      "Injuries": "103.5",
      "Non-communicable diseases": "710.9"
    },
    "Burundi": {
      "Injuries": "146.6",
      "Communicable diseases": "704.8",
      "Non-communicable diseases": "729.5"
    },
    "Cabo Verde": {
      "Injuries": "54.4",
      "Non-communicable diseases": "482.1",
      "Communicable diseases": "141.9"
    },
    "Liberia": {
      "Non-communicable diseases": "656.9",
      "Injuries": "83.3",
      "Communicable diseases": "609.1"
    },
    "Uganda": {
      "Non-communicable diseases": "664.4",
      "Communicable diseases": "696.7",
      "Injuries": "166.8"
    },
    "Mauritius": {
      "Non-communicable diseases": "576.5",
      "Injuries": "44.1",
      "Communicable diseases": "61.8"
    },
    "Algeria": {
      "Non-communicable diseases": "710.4",
      "Injuries": "53.8",
      "Communicable diseases": "97.8"
    },
    "C\u00f4te d'Ivoire": {
      "Non-communicable diseases": "794.0",
      "Injuries": "124.0",
      "Communicable diseases": "861.3"
    },
    "Malawi": {
      "Injuries": "97.7",
      "Communicable diseases": "777.6",
      "Non-communicable diseases": "655.0"
    },
    "Botswana": {
      "Injuries": "87.9",
      "Non-communicable diseases": "612.2",
      "Communicable diseases": "555.3"
    },
    "Guinea": {
      "Injuries": "96.0",
      "Non-communicable diseases": "681.1",
      "Communicable diseases": "679.6"
    },
    "Ghana": {
      "Injuries": "76.1",
      "Non-communicable diseases": "669.9",
      "Communicable diseases": "476.0"
    },
    "Kenya": {
      "Non-communicable diseases": "514.7",
      "Injuries": "101.1",
      "Communicable diseases": "657.5"
    },
    "Gambia": {
      "Non-communicable diseases": "629.6",
      "Injuries": "96.0",
      "Communicable diseases": "590.5"
    },
    "Angola": {
      "Injuries": "137.8",
      "Non-communicable diseases": "768.4",
      "Communicable diseases": "873.3"
    },
    "Sierra Leone": {
      "Communicable diseases": "1327.4",
      "Non-communicable diseases": "963.5",
      "Injuries": "149.5"
    },
    "Mauritania": {
      "Communicable diseases": "619.1",
      "Injuries": "83.4",
      "Non-communicable diseases": "555.1"
    },
    "Comoros": {
      "Communicable diseases": "494.6",
      "Injuries": "132.4",
      "Non-communicable diseases": "695.5"
    },
    "Gabon": {
      "Non-communicable diseases": "504.6",
      "Injuries": "77.4",
      "Communicable diseases": "589.4"
    },
    "Niger": {
      "Injuries": "97.6",
      "Communicable diseases": "740.0",
      "Non-communicable diseases": "649.1"
    },
    "Lesotho": {
      "Communicable diseases": "1110.5",
      "Injuries": "142.5",
      "Non-communicable diseases": "671.8"
    },
    "Nigeria": {
      "Non-communicable diseases": "673.7",
      "Communicable diseases": "866.2",
      "Injuries": "145.6"
    }
  },
  "Americas": {
    "Canada": {
      "Non-communicable diseases": "318.0",
      "Injuries": "31.3",
      "Communicable diseases": "22.6"
    },
    "Bolivia (Plurinational State of)": {
      "Communicable diseases": "226.2",
      "Non-communicable diseases": "635.3",
      "Injuries": "100.0"
    },
    "Haiti": {
      "Communicable diseases": "405.4",
      "Non-communicable diseases": "724.6",
      "Injuries": "89.3"
    },
    "Belize": {
      "Non-communicable diseases": "470.7",
      "Injuries": "82.0",
      "Communicable diseases": "104.6"
    },
    "Suriname": {
      "Injuries": "70.5",
      "Communicable diseases": "83.7",
      "Non-communicable diseases": "374.8"
    },
    "Argentina": {
      "Communicable diseases": "68.7",
      "Injuries": "50.7",
      "Non-communicable diseases": "467.3"
    },
    "Mexico": {
      "Injuries": "63.2",
      "Communicable diseases": "57.0",
      "Non-communicable diseases": "468.3"
    },
    "Jamaica": {
      "Injuries": "51.5",
      "Communicable diseases": "97.0",
      "Non-communicable diseases": "519.1"
    },
    "Peru": {
      "Non-communicable diseases": "363.5",
      "Injuries": "47.9",
      "Communicable diseases": "121.3"
    },
    "Brazil": {
      "Injuries": "80.2",
      "Communicable diseases": "92.8",
      "Non-communicable diseases": "513.8"
    },
    "Venezuela (Bolivarian Republic of)": {
      "Communicable diseases": "58.2",
      "Injuries": "103.2",
      "Non-communicable diseases": "410.6"
    },
    "Paraguay": {
      "Non-communicable diseases": "485.5",
      "Communicable diseases": "77.3",
      "Injuries": "67.6"
    },
    "Chile": {
      "Non-communicable diseases": "366.5",
      "Communicable diseases": "36.3",
      "Injuries": "41.2"
    },
    "Trinidad and Tobago": {
      "Non-communicable diseases": "705.3",
      "Communicable diseases": "80.4",
      "Injuries": "98.4"
    },
    "Colombia": {
      "Non-communicable diseases": "377.3",
      "Communicable diseases": "55.0",
      "Injuries": "72.6"
    },
    "Cuba": {
      "Injuries": "45.3",
      "Non-communicable diseases": "421.8",
      "Communicable diseases": "33.2"
    },
    "El Salvador": {
      "Non-communicable diseases": "474.9",
      "Injuries": "157.7",
      "Communicable diseases": "96.2"
    },
    "Honduras": {
      "Injuries": "80.8",
      "Communicable diseases": "117.5",
      "Non-communicable diseases": "441.5"
    },
    "Ecuador": {
      "Non-communicable diseases": "409.7",
      "Injuries": "83.7",
      "Communicable diseases": "97.3"
    },
    "Costa Rica": {
      "Communicable diseases": "30.5",
      "Non-communicable diseases": "391.8",
      "Injuries": "46.5"
    },
    "Dominican Republic": {
      "Non-communicable diseases": "396.0",
      "Injuries": "66.4",
      "Communicable diseases": "76.8"
    },
    "Nicaragua": {
      "Communicable diseases": "75.2",
      "Injuries": "64.4",
      "Non-communicable diseases": "546.6"
    },
    "Barbados": {
      "Non-communicable diseases": "404.5",
      "Injuries": "28.0",
      "Communicable diseases": "60.8"
    },
    "Uruguay": {
      "Non-communicable diseases": "446.0",
      "Injuries": "53.8",
      "Communicable diseases": "46.2"
    },
    "Panama": {
      "Communicable diseases": "86.1",
      "Injuries": "67.4",
      "Non-communicable diseases": "372.9"
    },
    "Bahamas": {
      "Non-communicable diseases": "465.2",
      "Injuries": "45.7",
      "Communicable diseases": "122.0"
    },
    "Guyana": {
      "Communicable diseases": "177.2",
      "Non-communicable diseases": "1024.2",
      "Injuries": "150.0"
    },
    "United States of America": {
      "Non-communicable diseases": "412.8",
      "Injuries": "44.2",
      "Communicable diseases": "31.3"
    },
    "Guatemala": {
      "Communicable diseases": "212.7",
      "Non-communicable diseases": "409.4",
      "Injuries": "111.0"
    }
  },
  "Eastern Mediterranean": {
    "Egypt": {
      "Communicable diseases": "74.3",
      "Non-communicable diseases": "781.7",
      "Injuries": "33.5"
    },
    "South Sudan": {
      "Injuries": "143.4",
      "Communicable diseases": "831.3",
      "Non-communicable diseases": "623.4"
    },
    "Sudan": {
      "Injuries": "133.6",
      "Non-communicable diseases": "551.0",
      "Communicable diseases": "495.0"
    },
    "Libya": {
      "Injuries": "62.8",
      "Non-communicable diseases": "550.0",
      "Communicable diseases": "52.6"
    },
    "Jordan": {
      "Non-communicable diseases": "640.3",
      "Injuries": "53.5",
      "Communicable diseases": "52.5"
    },
    "Pakistan": {
      "Communicable diseases": "296.0",
      "Non-communicable diseases": "669.3",
      "Injuries": "98.7"
    },
    "Djibouti": {
      "Non-communicable diseases": "631.1",
      "Communicable diseases": "626.0",
      "Injuries": "106.0"
    },
    "Syrian Arab Republic": {
      "Communicable diseases": "41.0",
      "Injuries": "308.0",
      "Non-communicable diseases": "572.7"
    },
    "Morocco": {
      "Non-communicable diseases": "707.7",
      "Communicable diseases": "131.5",
      "Injuries": "47.0"
    },
    "Yemen": {
      "Communicable diseases": "515.0",
      "Non-communicable diseases": "626.9",
      "Injuries": "84.3"
    },
    "Bahrain": {
      "Injuries": "33.5",
      "Non-communicable diseases": "505.7",
      "Communicable diseases": "48.5"
    },
    "United Arab Emirates": {
      "Non-communicable diseases": "546.8",
      "Injuries": "31.5",
      "Communicable diseases": "35.6"
    },
    "Lebanon": {
      "Non-communicable diseases": "384.6",
      "Injuries": "40.6",
      "Communicable diseases": "30.5"
    },
    "Saudi Arabia": {
      "Non-communicable diseases": "549.4",
      "Injuries": "41.1",
      "Communicable diseases": "71.3"
    },
    "Iran (Islamic Republic of)": {
      "Injuries": "74.9",
      "Communicable diseases": "56.2",
      "Non-communicable diseases": "569.3"
    },
    "Iraq": {
      "Communicable diseases": "87.0",
      "Non-communicable diseases": "715.5",
      "Injuries": "128.5"
    },
    "Qatar": {
      "Communicable diseases": "28.3",
      "Injuries": "41.0",
      "Non-communicable diseases": "407.0"
    },
    "Afghanistan": {
      "Communicable diseases": "362.7",
      "Injuries": "169.2",
      "Non-communicable diseases": "846.3"
    },
    "Somalia": {
      "Non-communicable diseases": "550.7",
      "Communicable diseases": "927.2",
      "Injuries": "188.5"
    },
    "Kuwait": {
      "Communicable diseases": "82.5",
      "Injuries": "25.4",
      "Non-communicable diseases": "406.3"
    },
    "Oman": {
      "Injuries": "52.8",
      "Non-communicable diseases": "478.2",
      "Communicable diseases": "84.2"
    },
    "Tunisia": {
      "Non-communicable diseases": "509.3",
      "Communicable diseases": "65.0",
      "Injuries": "39.1"
    }
  },
  "Western Pacific": {
    "Mongolia": {
      "Injuries": "69.4",
      "Non-communicable diseases": "966.5",
      "Communicable diseases": "82.8"
    },
    "Cambodia": {
      "Injuries": "62.2",
      "Communicable diseases": "227.5",
      "Non-communicable diseases": "394.0"
    },
    "Japan": {
      "Injuries": "40.5",
      "Non-communicable diseases": "244.2",
      "Communicable diseases": "33.9"
    },
    "Brunei Darussalam": {
      "Injuries": "44.6",
      "Non-communicable diseases": "475.3",
      "Communicable diseases": "56.1"
    },
    "Solomon Islands": {
      "Communicable diseases": "230.6",
      "Injuries": "75.1",
      "Non-communicable diseases": "709.7"
    },
    "Viet Nam": {
      "Communicable diseases": "96.0",
      "Injuries": "59.0",
      "Non-communicable diseases": "435.4"
    },
    "Lao People's Democratic Republic": {
      "Communicable diseases": "328.7",
      "Injuries": "75.2",
      "Non-communicable diseases": "680.0"
    },
    "China": {
      "Communicable diseases": "41.4",
      "Non-communicable diseases": "576.3",
      "Injuries": "50.4"
    },
    "New Zealand": {
      "Injuries": "32.9",
      "Non-communicable diseases": "313.6",
      "Communicable diseases": "18.0"
    },
    "Papua New Guinea": {
      "Injuries": "100.1",
      "Communicable diseases": "554.3",
      "Non-communicable diseases": "693.2"
    },
    "Philippines": {
      "Communicable diseases": "226.4",
      "Non-communicable diseases": "720.0",
      "Injuries": "53.8"
    },
    "Malaysia": {
      "Injuries": "62.8",
      "Non-communicable diseases": "563.2",
      "Communicable diseases": "117.4"
    },
    "Australia": {
      "Communicable diseases": "13.7",
      "Non-communicable diseases": "302.9",
      "Injuries": "28.2"
    },
    "Fiji": {
      "Non-communicable diseases": "804.0",
      "Injuries": "64.0",
      "Communicable diseases": "105.2"
    },
    "Singapore": {
      "Communicable diseases": "66.2",
      "Non-communicable diseases": "264.8",
      "Injuries": "17.5"
    },
    "Republic of Korea": {
      "Injuries": "53.1",
      "Communicable diseases": "33.8",
      "Non-communicable diseases": "302.1"
    }
  }
};

const formatData = data => {
  const colours = Highcharts.getOptions().colors;
  const formattedData = [];
  Object.keys(data).forEach((regionName, rIndex) => {
    const region = {
      id: `id_${rIndex}`,
      name: regionName,
      color: colours[rIndex]
    };
    let regionSum = 0;

    const countries = Object.keys(data[regionName]);
    countries.forEach((countryName, cIndex) => {
      const country = {
        id: `${region.id}_${cIndex}`,
        name: countryName,
        parent: region.id
      };
      formattedData.push(country);

      Object.keys(data[regionName][countryName]).forEach((causeName, index) => {
        const cause = {
          id: `${country.id}_${index}`,
          name: causeName,
          parent: country.id,
          value: Math.round(parseFloat(data[regionName][countryName][causeName]))
        };
        formattedData.push(cause);
        regionSum += cause.value;
      })
    });

    region.value = Math.round(regionSum / countries.length);
    formattedData.push(region);
  });

  return formattedData;
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      treeData: null
    };
    this.regenrateData = this.regenrateData.bind(this);
  }

  componentDidMount() {
    this.setState({
      treeData: formatData(data)
    });
  }

  componentDidUpdate() {
    if (this.drilldownSeriesId && this.treemapSeries) {
      alert('We have a change in state (most likely the data) and I want to persist the drilldown with the new data');
      alert('drilling down to drillId ' + this.drilldownSeriesId);
      alert('Id like to call something like this.treemapSeries.drillToNode(this.drilldownSeriesId)');
    }
  }

  onDrilldownSeries(obj) {
    this.drilldownSeriesId = obj.point.drillId;
    alert('drilldown id stored ' + this.drilldownSeriesId);
  }

  regenrateData() {
    this.setState({
      treeData: formatData(data)
    });
  }
  

  render() {
    const treeData = this.state.treeData;
    if (!treeData) return null;

    const events = {
    click: (obj)=> this.onDrilldownSeries(obj)
    };

    const levels = [{
      level: 1,
      dataLabels: {
        enabled: true
      },
      borderWidth: 3
    }];
    const tooltipFormatter = function () {
      return `${this.key}: ${this.point.value}`;
    };

    return (
      <div className="app">
        <HighchartsChart>
          <Title>Global Mortality Rate 2012, per 100,000 population</Title>

          <XAxis />

          <YAxis id="value">
            <TreemapSeries
              ref={(ref) => this.treemapSeries = ref}
              data={treeData}
              allowDrillToNode
              layoutAlgorithm="squarified"
              animationLimit={1000}
              dataLabels={{ enabled: false }}
              levelIsConstant={false}
              levels={levels}
              events={events} />
          </YAxis>

          <Tooltip formatter={tooltipFormatter} />
        </HighchartsChart>
        <button onClick={this.regenrateData}>Regenerate Data</button>
      </div>
    );
  }
}

export default withHighcharts(App, Highcharts);