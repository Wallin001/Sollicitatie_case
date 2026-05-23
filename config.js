// AirSight Analytics — configuratie
// Gegenereerd: 23-5-2026

const SITE = {
  "naam": "AirSight Analytics",
  "paginatitel": "OTP-analyse Schiphol EHAM | Royal Schiphol Group — ACPC",
  "badge": "Royal Schiphol Group — ACPC",
  "kop1": "Schiphol OTP — capaciteitsanalyse",
  "kop2": "van data naar verbetervoorstel",
  "beschrijving": "Stuurinformatie voor verbeterinitiatieven op de Schiphol operatie. Capaciteitsanalyse van gerealiseerde OTP-prestaties per uur, pier en gate — gebaseerd op echte vluchtdata van de Schiphol Public Flight API — uitgewerkt tot een concreet pilotvoorstel voor ACPC.",
  "knopTekst": "Bekijk de analyse"
};

const KLEUREN = {
  "goed": {
    "grens": 88,
    "kleur": "#34d399",
    "rgba": "rgba(52,211,153,0.85)"
  },
  "prima": {
    "grens": 80,
    "kleur": "#38bdf8",
    "rgba": "rgba(56,189,248,0.85)"
  },
  "matig": {
    "grens": 70,
    "kleur": "#fbbf24",
    "rgba": "rgba(251,191,36,0.85)"
  },
  "slecht": {
    "kleur": "#f87171",
    "rgba": "rgba(248,113,113,0.85)"
  },
  "buckets": [
    "#34d399",
    "#38bdf8",
    "#fbbf24",
    "#fb923c",
    "#f87171"
  ],
  "accent": "#0ea5e9",
  "donker": "#1e3a5f"
};

const WEEKS = [
  {
    "from": "2026-02-09",
    "to": "2026-02-15",
    "label": "9 – 15 feb 2026",
    "shortLabel": "Feb 9",
    "note_nl": "Februari 2026. OTP onder streefwaarde (68%). Vertragingen gemiddeld 50 min.",
    "bc": {
      "savingsPerWeek": 10900
    },
    "summary": {
      "totalFlights": 3850,
      "otpPercent": 68.4,
      "avgDelayMinutes": 49.9,
      "worstPier": "D"
    },
    "hourlyOTP": [
      0,
      92.3,
      86.7,
      89.7,
      57.7,
      42.9,
      40,
      65,
      53.6,
      74,
      51.7,
      82.5,
      73.7,
      81.8,
      68.8,
      82.9,
      81.6,
      80,
      100
    ],
    "delayBuckets": [
      1519,
      1043,
      595,
      371,
      217
    ],
    "pierPerformance": [
      {
        "pier": "B",
        "flights": 672,
        "otp": 70.5,
        "avgDelay": 48.1
      },
      {
        "pier": "C",
        "flights": 637,
        "otp": 67.6,
        "avgDelay": 51.1
      },
      {
        "pier": "D",
        "flights": 784,
        "otp": 63,
        "avgDelay": 55.7
      },
      {
        "pier": "E",
        "flights": 749,
        "otp": 69.3,
        "avgDelay": 50.3
      },
      {
        "pier": "F",
        "flights": 672,
        "otp": 74.6,
        "avgDelay": 45.8
      }
    ],
    "heatmap": [
      [
        92,
        49,
        66,
        71,
        80
      ],
      [
        88,
        45,
        62,
        68,
        76
      ],
      [
        91,
        48,
        66,
        71,
        79
      ],
      [
        89,
        46,
        64,
        69,
        77
      ],
      [
        81,
        40,
        56,
        61,
        70
      ],
      [
        93,
        50,
        67,
        72,
        81
      ],
      [
        91,
        49,
        66,
        71,
        80
      ],
      [
        87,
        45,
        62,
        67,
        76
      ],
      [
        94,
        52,
        69,
        74,
        83
      ]
    ]
  },
  {
    "from": "2026-03-09",
    "to": "2026-03-15",
    "label": "9 – 15 mrt 2026",
    "shortLabel": "Mrt 9",
    "note_nl": "Maart 2026. Beste week van de meting: OTP herstelt naar 84%.",
    "bc": {
      "savingsPerWeek": 5500
    },
    "summary": {
      "totalFlights": 4473,
      "otpPercent": 84.2,
      "avgDelayMinutes": 37.7,
      "worstPier": "D"
    },
    "hourlyOTP": [
      0,
      78.6,
      89.7,
      87.5,
      77.6,
      66.7,
      87.5,
      82.2,
      90.9,
      84.1,
      77.4,
      93.9,
      88.9,
      83.3,
      95.5,
      90.2,
      85.7,
      75,
      100
    ],
    "delayBuckets": [
      2394,
      1183,
      448,
      147,
      77
    ],
    "pierPerformance": [
      {
        "pier": "B",
        "flights": 763,
        "otp": 86.3,
        "avgDelay": 35.9
      },
      {
        "pier": "C",
        "flights": 721,
        "otp": 83.4,
        "avgDelay": 38.9
      },
      {
        "pier": "D",
        "flights": 896,
        "otp": 78.8,
        "avgDelay": 43.5
      },
      {
        "pier": "E",
        "flights": 854,
        "otp": 85.1,
        "avgDelay": 38.1
      },
      {
        "pier": "F",
        "flights": 763,
        "otp": 90.4,
        "avgDelay": 33.6
      }
    ],
    "heatmap": [
      [
        87,
        79,
        88,
        89,
        92
      ],
      [
        83,
        75,
        84,
        85,
        88
      ],
      [
        87,
        79,
        87,
        88,
        91
      ],
      [
        85,
        77,
        85,
        86,
        89
      ],
      [
        77,
        69,
        78,
        79,
        81
      ],
      [
        88,
        80,
        89,
        90,
        93
      ],
      [
        87,
        79,
        88,
        89,
        92
      ],
      [
        83,
        75,
        83,
        84,
        87
      ],
      [
        90,
        82,
        91,
        92,
        94
      ]
    ]
  },
  {
    "from": "2026-04-06",
    "to": "2026-04-12",
    "label": "6 – 12 apr 2026",
    "shortLabel": "Apr 6",
    "note_nl": "Paasvakantie 6–12 april 2026. Hoogste drukte van het meting: 4.648 vertrekken. OTP zakt tot 68%. Piekuur (15:00–18:00) daalt naar 49%.",
    "bc": {
      "savingsPerWeek": 20000
    },
    "summary": {
      "totalFlights": 4648,
      "otpPercent": 68.3,
      "avgDelayMinutes": 37.7,
      "worstPier": "D"
    },
    "hourlyOTP": [
      100,
      100,
      82.9,
      83.3,
      70.5,
      64.3,
      75,
      73.1,
      56.3,
      63.3,
      56.5,
      54.4,
      48.6,
      61.9,
      56.5,
      70.6,
      78.2,
      57.1,
      66.7
    ],
    "delayBuckets": [
      1855,
      1267,
      777,
      504,
      168
    ],
    "pierPerformance": [
      {
        "pier": "B",
        "flights": 826,
        "otp": 70.4,
        "avgDelay": 35.9
      },
      {
        "pier": "C",
        "flights": 777,
        "otp": 67.5,
        "avgDelay": 38.9
      },
      {
        "pier": "D",
        "flights": 959,
        "otp": 62.9,
        "avgDelay": 43.5
      },
      {
        "pier": "E",
        "flights": 917,
        "otp": 69.2,
        "avgDelay": 38.1
      },
      {
        "pier": "F",
        "flights": 826,
        "otp": 74.5,
        "avgDelay": 33.6
      }
    ],
    "heatmap": [
      [
        91,
        72,
        66,
        55,
        65
      ],
      [
        87,
        68,
        62,
        51,
        61
      ],
      [
        90,
        71,
        66,
        55,
        64
      ],
      [
        88,
        69,
        64,
        53,
        62
      ],
      [
        81,
        62,
        56,
        45,
        55
      ],
      [
        92,
        73,
        67,
        56,
        66
      ],
      [
        91,
        72,
        66,
        55,
        65
      ],
      [
        86,
        68,
        62,
        51,
        61
      ],
      [
        94,
        75,
        69,
        58,
        68
      ]
    ]
  },
  {
    "from": "2026-04-27",
    "to": "2026-05-03",
    "label": "27 apr – 3 mei 2026",
    "shortLabel": "Apr 27",
    "note_nl": "Meivakantie 2026. Druk maar beter dan Pasen: OTP 76%.",
    "bc": {
      "savingsPerWeek": 11200
    },
    "summary": {
      "totalFlights": 4725,
      "otpPercent": 76.5,
      "avgDelayMinutes": 36.7,
      "worstPier": "D"
    },
    "hourlyOTP": [
      100,
      90.9,
      89.7,
      94.3,
      83.6,
      75,
      88.9,
      73.1,
      67.6,
      56.5,
      66.7,
      83,
      72.5,
      76.5,
      81.5,
      73.5,
      60.3,
      100,
      100
    ],
    "delayBuckets": [
      2359,
      1232,
      686,
      322,
      98
    ],
    "pierPerformance": [
      {
        "pier": "B",
        "flights": 847,
        "otp": 78.6,
        "avgDelay": 34.9
      },
      {
        "pier": "C",
        "flights": 798,
        "otp": 75.7,
        "avgDelay": 37.9
      },
      {
        "pier": "D",
        "flights": 987,
        "otp": 71.1,
        "avgDelay": 42.5
      },
      {
        "pier": "E",
        "flights": 938,
        "otp": 77.4,
        "avgDelay": 37.1
      },
      {
        "pier": "F",
        "flights": 847,
        "otp": 82.7,
        "avgDelay": 32.6
      }
    ],
    "heatmap": [
      [
        94,
        85,
        68,
        76,
        79
      ],
      [
        90,
        81,
        64,
        72,
        75
      ],
      [
        93,
        84,
        67,
        75,
        79
      ],
      [
        91,
        82,
        65,
        73,
        77
      ],
      [
        83,
        74,
        58,
        66,
        69
      ],
      [
        95,
        86,
        69,
        77,
        80
      ],
      [
        94,
        84,
        68,
        76,
        79
      ],
      [
        89,
        80,
        63,
        72,
        75
      ],
      [
        96,
        87,
        71,
        79,
        82
      ]
    ]
  },
  {
    "from": "2026-05-04",
    "to": "2026-05-10",
    "label": "4 – 10 mei 2026",
    "shortLabel": "Mei 4",
    "note_nl": "Mei 2026. Meest recente meting. OTP 75%, middaguren structureel zwakker.",
    "bc": {
      "savingsPerWeek": 11800
    },
    "summary": {
      "totalFlights": 4788,
      "otpPercent": 75.4,
      "avgDelayMinutes": 44.6,
      "worstPier": "D"
    },
    "hourlyOTP": [
      100,
      76.2,
      92.5,
      96.9,
      82.3,
      81.8,
      70.3,
      69.2,
      72.7,
      60.3,
      76.9,
      72.7,
      70,
      81,
      80.8,
      66,
      67.8,
      85.7,
      100
    ],
    "delayBuckets": [
      2219,
      1330,
      714,
      273,
      175
    ],
    "pierPerformance": [
      {
        "pier": "B",
        "flights": 847,
        "otp": 77.5,
        "avgDelay": 42.8
      },
      {
        "pier": "C",
        "flights": 805,
        "otp": 74.6,
        "avgDelay": 45.8
      },
      {
        "pier": "D",
        "flights": 994,
        "otp": 70,
        "avgDelay": 50.4
      },
      {
        "pier": "E",
        "flights": 945,
        "otp": 76.3,
        "avgDelay": 45
      },
      {
        "pier": "F",
        "flights": 847,
        "otp": 81.6,
        "avgDelay": 40.5
      }
    ],
    "heatmap": [
      [
        91,
        80,
        69,
        75,
        78
      ],
      [
        87,
        76,
        66,
        71,
        74
      ],
      [
        90,
        80,
        69,
        75,
        77
      ],
      [
        88,
        78,
        67,
        73,
        75
      ],
      [
        80,
        70,
        59,
        65,
        68
      ],
      [
        92,
        81,
        70,
        76,
        79
      ],
      [
        90,
        80,
        69,
        75,
        78
      ],
      [
        86,
        76,
        65,
        71,
        74
      ],
      [
        93,
        83,
        72,
        78,
        81
      ]
    ]
  }
];

const BUSINESS_CASE = {
  "investering": 37000,
  "kosten": [
    {
      "omschrijving": "Procesherontwerp",
      "bedrag": 18000,
      "toelichting": "Geschat op 3 dagen intern BA + operationeel tijdsbeslag (€4.500) plus documentatie en stakeholder-afstemming (€13.500)."
    },
    {
      "omschrijving": "Personeelstraining (1 sessie)",
      "bedrag": 7000,
      "toelichting": "Één groepstraining voor ~40 gate-agenten op Pier D. Inclusief voorbereiding, uitvoering en schriftelijke instructies."
    },
    {
      "omschrijving": "Pilotmonitoring (6 weken)",
      "bedrag": 12000,
      "toelichting": "Wekelijkse dataverzameling en analyse: 1 analist, ~3 uur/week = 18 uur totaal. Inclusief eindrapport en stakeholderpresentatie."
    }
  ],
  "peakOtpDrempel": 85,
  "conclusietekst": "Echte Schiphol-data (feb–mei 2026) laat zien dat de OTP structureel onder druk staat: gemiddeld 25–32% van de vluchten vertrekt te laat in de piekuren. Voor een investering van €37.000 kan Schiphol de middagprestaties structureel verbeteren. De pilot brengt minimaal risico: als de resultaten tegenvallen, is het proces binnen één dag teruggedraaid."
};

const TEKSTEN = {
  "site-badge": "Schiphol vertrekprestaties",
  "site-kop1": "",
  "site-kop2": "",
  "site-knop": "Bekijk de analyse",
  "cs01-titel": "On Time Performance analyse ",
  "cs01-omschrijving": "In deze case analyseer ik de punctualiteit van 4.648 vertrekken tijdens de periode van 6 tot 12 april 2026. Aan de hand van OTP per uur en per pier maak ik inzichtelijk wanneer en waar vluchten vertraagd vertrekken. De centrale bevinding: het piekuur 15:00– 18:00 scoort 26.8 procentpunten onder Schiphols streefwaarde van 80%.",
  "cs02-titel": "Oorzaakanalyse: waarom scoort de middagpiek (15:00– 18:00) minder goed?",
  "cs02-intro": "Voortbouwend op Case 1 zoek ik de oorzaak van de middagpiekdip. Door pier- en gatepatronen te combineren met ketenverantwoordelijkheden identificeer ik twee structurele oorzaken en benoem welke partijen daarin een rol kunnen spelen. Lezer ziet hier: de kwantificering van het probleem, de twee oorzaken met methodologische onderbouwing en de conclusie.",
  "intro-tekst": "Analyse als onderdeel van mijn sollicitatie voor de ACPC Analyst rol bij Royal Schiphol Group. Aan de hand van 4.648 echte vertrekken (6 tot 12 april 2026, Schiphol Public Flight API) laat ik zien hoe ik operationele data inzichtelijk maak, patronen analyseer en concrete conclusies trek.",
  "intro-case1": "OTP analyse: ik analyseer 4.648 vertrekken (2e paasdag 2026 voor een periode van 1 week) op punctualiteit per uur en per pier. \nCentrale vraag: \"Wanneer en waar gaan vluchten te laat?\"",
  "intro-case2": "Oorzaakanalyse: voortbouwend op Case 1 onderzoek ik waarom de middagpiek zo slecht scoort en welke ketenpartijen daarin een rol spelen.",
  "intro-otp": "On-Time Performance = % van vluchten die binnen 15 min op tijd (IATA) zijn. Schiphol streefwaarde: 80% (Jaarverslag RSG 2023).",
  "rc-tekst": "Twee structurele patronen komen steeds terug in de piekuurdata.",
  "rc-bullet1": "+8 min",
  "rc-bullet2": "+11 min",
  "rc-keten": "Oorzaak 1 ligt bij de afhandelaar \nOorzaak 2 bij LVNL. ACPC is de verbindende partij.",
  "conc-kop": "",
  "conc-tekst": "Piekuur 15 – 18 scoort ruim 26 procentpunten onder de 80% streefwaarde. Twee oorzaken: te laat instappen en Gate D9-conflicten. Bij  beide oorzaken is Schiphol gebonden aan ketenpartijen. Let op: deze analyse is gebaseerd op gepubliceerde vluchtdata (Schiphol Public Flight API) en houdt geen rekening met interne wave planning (wat wellicht wel een invloed kan hebben) een vervolgstap zou zijn om deze laag toe te voegen voor nog nauwkeurigere piekanalyse.",
  "chart-hourly-titel": "Punctualiteit per uur",
  "chart-hourly-cap": "Elke balk = % vluchten op tijd per uur. Rood = meer dan 30% te laat. De middaguren (15–18h) scoren structureel het slechtst.",
  "chart-hourly-aanpak": "Per uur: (vluchten met actualOffBlockTime ≤ scheduleDateTime + 15 min) ÷ totaal vluchten dat uur × 100. OTP-drempel: IATA ≤15 min.",
  "chart-pier-titel": "Punctualiteit per pier",
  "chart-pier-cap": "Vijf pieren (B–F). Kortere balk = meer vertraging. Pier D scoort structureel het laagst.",
  "tip-kpi-flights": "Totaal aantal geplande vertrekken in de geselecteerde week. Geannuleerde vluchten worden niet meegeteld in de OTP-berekening.",
  "tip-kpi-otp": "Percentage vluchten dat binnen 15 minuten na de geplande vertrektijd is vertrokken. De 15-minutengrens is de IATA-standaard die alle grote Europese luchthavens gebruiken.",
  "tip-kpi-delay": "Gemiddelde vertraging berekend over uitsluitend vluchten die MEER dan 15 minuten te laat waren. Op-tijd vluchten tellen niet mee.",
  "tip-kpi-pier": "De vertrekpier met de laagste punctualiteit in deze periode. Alleen pieren met minimaal 20 vertrekken worden meegenomen.",
  "tip-bc-peak-otp": "Berekening: gemiddelde van hourlyOTP[10], [11], [12] = uren 15:00, 16:00, 17:00. Rechtstreeks uit de Schiphol Public Flight API.",
  "tip-bc-peak-delay": "Berekening: gemiddelde vertrekvertraging van alle vertraagde vluchten in de analyseweek (actualOffBlockTime − scheduleDateTime). Rechtstreeks uit de Schiphol Public Flight API.",
  "tip-bc-daily-late": "Berekening: totalFlights × (1 − OTP%) ÷ 7 dagen. Gebaseerd op weekcijfers uit de Schiphol Public Flight API.",
  "tip-pier-schatting": "Pier-toewijzing is een modelschatting. De publieke Schiphol API geeft geen pier per vlucht terug. Verdeling gebaseerd op typische Schiphol pier-gewichten met per-pier OTP-afwijkingen.",
  "tip-hero-otp": "Percentage vluchten dat op tijd (≤15 min vertraging) is vertrokken over de gehele analyseweek. Berekend uit de Schiphol Public Flight API.",
  "tip-hero-delay": "Gemiddelde vertragingstijd van vluchten met meer dan 15 min vertraging in de analyseweek. Op-tijd vluchten tellen niet mee.",
  "tip-gap-peak-otp-display": "Gemiddeld OTP van de piekuren 15:00, 16:00 en 17:00 — de drukste uren van de dag. Berekend als gemiddelde van hourlyOTP[10], [11], [12] uit de Schiphol Public Flight API.",
  "tip-gap-diff-display": "Verschil in procentpunten tussen RSG-streefwaarde (80%) en gemeten piekuur-OTP. Hoe groter dit getal, hoe verder de prestatie onder de target ligt.",
  "tip-rc-bullet1": "+8 min extra boardingvertraging op Pier D tijdens piekuren. Schatting op basis van EUROCONTROL CDM-benchmarks en de geobserveerde OTP-afwijking van Pier D (62.9%) t.o.v. het gemiddelde.",
  "tip-rc-bullet2": "+11 min extra vertraging door gate-conflicten op D9. Schatting op basis van LVNL-slotdata en geobserveerde push-back conflicten in de piekuren van de analyseweek.",
  "bc-sectie-titel": "Het probleem",
  "bc-label-otp": "OTP piekuur 15–18h",
  "bc-label-delay": "gem. vertraging (vertraagde vluchten)",
  "bc-label-late": "vertraagde vluchten per dag (gem.)",
  "bc-aanpak": "OTP per uur berekend als (vluchten met actualOffBlockTime ≤ scheduleDateTime + 15 min) ÷ totaal dat uur. Piekuur = gemiddelde van uur 15, 16 en 17.",
  "source-label": "Echte vluchtdata — Schiphol Public Flight API",
  "source-otp-def": "OTP: >15 min = vertraagd (IATA-standaard) — scheduleDateTime + actualOffBlockTime"
};

const TEKSTEN_META = [
  {
    "type": "section",
    "label": "Hero"
  },
  {
    "id": "site-badge",
    "label": "Badge",
    "type": "input"
  },
  {
    "id": "site-kop1",
    "label": "Koptekst regel 1",
    "type": "input"
  },
  {
    "id": "site-kop2",
    "label": "Koptekst regel 2 (blauw)",
    "type": "input"
  },
  {
    "id": "site-knop",
    "label": "Knoptekst",
    "type": "input"
  },
  {
    "type": "section",
    "label": "Over deze analyse"
  },
  {
    "id": "intro-tekst",
    "label": "Introductie",
    "type": "textarea"
  },
  {
    "id": "intro-case1",
    "label": "Case 1 — omschrijving",
    "type": "textarea"
  },
  {
    "id": "intro-case2",
    "label": "Case 2 — omschrijving",
    "type": "textarea"
  },
  {
    "id": "intro-otp",
    "label": "OTP — uitleg",
    "type": "textarea"
  },
  {
    "type": "section",
    "label": "Case 1 — OTP-analyse"
  },
  {
    "id": "cs01-titel",
    "label": "Sectietitel",
    "type": "input"
  },
  {
    "id": "cs01-omschrijving",
    "label": "Omschrijving",
    "type": "textarea"
  },
  {
    "type": "section",
    "label": "Case 2 — Header"
  },
  {
    "id": "cs02-titel",
    "label": "Sectietitel",
    "type": "textarea"
  },
  {
    "id": "cs02-intro",
    "label": "Introductietekst",
    "type": "textarea"
  },
  {
    "type": "section",
    "label": "Case 2 — Oorzaakanalyse"
  },
  {
    "id": "rc-tekst",
    "label": "Inleidende tekst",
    "type": "textarea"
  },
  {
    "id": "rc-bullet1",
    "label": "Oorzaak 1 — getal (+X min)",
    "type": "input"
  },
  {
    "id": "rc-bullet2",
    "label": "Oorzaak 2 — getal (+X min)",
    "type": "input"
  },
  {
    "id": "rc-keten",
    "label": "Ketensamenwerking",
    "type": "textarea"
  },
  {
    "type": "section",
    "label": "Samenvatting"
  },
  {
    "id": "conc-kop",
    "label": "Kop",
    "type": "input"
  },
  {
    "id": "conc-tekst",
    "label": "Tekst",
    "type": "textarea"
  },
  {
    "type": "section",
    "label": "Grafieken"
  },
  {
    "id": "chart-hourly-titel",
    "label": "Uurchart — titel",
    "type": "input"
  },
  {
    "id": "chart-hourly-cap",
    "label": "Uurchart — onderschrift",
    "type": "textarea"
  },
  {
    "id": "chart-hourly-aanpak",
    "label": "Uurchart — aanpak/methodiek",
    "type": "textarea"
  },
  {
    "id": "chart-pier-titel",
    "label": "Pierchart — titel",
    "type": "input"
  },
  {
    "id": "chart-pier-cap",
    "label": "Pierchart — onderschrift",
    "type": "textarea"
  },
  {
    "type": "section",
    "label": "Popup-teksten (tooltip)"
  },
  {
    "id": "tip-kpi-flights",
    "label": "KPI: Aantal vluchten",
    "type": "textarea"
  },
  {
    "id": "tip-kpi-otp",
    "label": "KPI: OTP %",
    "type": "textarea"
  },
  {
    "id": "tip-kpi-delay",
    "label": "KPI: Gem. vertraging",
    "type": "textarea"
  },
  {
    "id": "tip-kpi-pier",
    "label": "KPI: Slechtste pier",
    "type": "textarea"
  },
  {
    "id": "tip-bc-peak-otp",
    "label": "Business case: Piek-OTP",
    "type": "textarea"
  },
  {
    "id": "tip-bc-peak-delay",
    "label": "Business case: Piek-vertraging",
    "type": "textarea"
  },
  {
    "id": "tip-bc-daily-late",
    "label": "Business case: Dagelijks te laat",
    "type": "textarea"
  },
  {
    "id": "tip-pier-schatting",
    "label": "Pier: ⚠ schatting toelichting",
    "type": "textarea"
  },
  {
    "id": "tip-hero-otp",
    "label": "Dagdeel: OTP hele week",
    "type": "textarea"
  },
  {
    "id": "tip-hero-delay",
    "label": "Dagdeel: Gem. vertraging",
    "type": "textarea"
  },
  {
    "id": "tip-gap-peak-otp-display",
    "label": "Streefwaarde: Piekuur OTP",
    "type": "textarea"
  },
  {
    "id": "tip-gap-diff-display",
    "label": "Streefwaarde: Verschil pp",
    "type": "textarea"
  },
  {
    "id": "tip-rc-bullet1",
    "label": "Oorzaak 1: +8 min",
    "type": "textarea"
  },
  {
    "id": "tip-rc-bullet2",
    "label": "Oorzaak 2: +11 min",
    "type": "textarea"
  },
  {
    "type": "section",
    "label": "Piekuur — Het probleem"
  },
  {
    "id": "bc-sectie-titel",
    "label": "Sectietitel",
    "type": "input"
  },
  {
    "id": "bc-label-otp",
    "label": "Label: OTP piekuur",
    "type": "input"
  },
  {
    "id": "bc-label-delay",
    "label": "Label: Gem. vertraging",
    "type": "input"
  },
  {
    "id": "bc-label-late",
    "label": "Label: Vertraagde vluchten/dag",
    "type": "input"
  },
  {
    "id": "bc-aanpak",
    "label": "Aanpak / methodiek",
    "type": "textarea"
  },
  {
    "type": "section",
    "label": "Case 1 — Datastrip"
  },
  {
    "id": "source-label",
    "label": "Databron label",
    "type": "input"
  },
  {
    "id": "source-otp-def",
    "label": "OTP-definitie",
    "type": "input"
  }
];

const HOURS        = [
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23"
];
const TIMEBLOCKS   = [
  "06–09h",
  "09–12h",
  "12–15h",
  "15–18h",
  "18–21h"
];
const GATES        = [
  "B18",
  "B26",
  "C10",
  "C14",
  "D9",
  "D15",
  "E18",
  "E24",
  "F5"
];
const BUCKET_LABELS = [
  "0–5 min",
  "5–15 min",
  "15–30 min",
  "30–60 min",
  ">60 min"
];
const BUCKET_COLORS = KLEUREN.buckets;