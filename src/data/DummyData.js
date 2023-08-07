const style = getComputedStyle(document.body);

export const studyData_ = {
  uml_data: [
    {
      key: "root",
      line: "In this study 832(out of 832) practices were eligible to participate. Total number of patients present in  832 practices (n=16,646,621) ",
      loc: "0 0",
    },
    {
      key: "population",
      parent: "root",
      line: " Number of patients qualified to participate in this study based on the study period, population age, and data quality requirements (n=8,784,240) ",
      loc: "0 200",
    },
    {
      key: "exposed",
      parent: "population",
      line: "In the cohort of qualified patients the following exposure(s)/condition(s) were found:\n1) 13,408 patients with Insulin2019.\n2) 348 patients with Type1Diabetes2018 AND Type1Diabetes2018.\n3) 1,040 patients with prev_Insulin2019 AND Type1Diabetes2018 AND Type1Diabetes2018.\n4) 516 patients with prev_Type1Diabetes2018 And prev_Type1Diabetes2018.\n5) 435 patients with Insulin2019 And prev_Type1Diabetes2018 And prev_Type1Diabetes2018.\n6) 9,577 patients with Insulin2019 AND Type1Diabetes2018 AND Type1Diabetes2018.\n7) 8,278 patients with prev_Insulin2019.\n8) 29,911 patients with prev_Insulin2019 And prev_Type1Diabetes2018 And prev_Type1Diabetes2018.  ",
      loc: "-350 400",
    },
    {
      key: "exposedExcl",
      parent: "exposed",
      line: "Following study criteria 2,515 exposed patients were dropped for the following reasons:\n1) 89 patients as they had Epilepsy_IMRD0 before index date.\n2) 545 patients as they had sulpho2019 AND Type2Diabetes.\n3) 1 patient as they had Acarbose2019 AND Type2Diabetes.\n4) 343 patients as they had Type2Diabetes.\n5) 64 patients as they had DPP4I2019.\n6) 124 patients as they had DPP4I2019 AND Type2Diabetes.\n7) 155 patients as they had GLP12019 AND Type2Diabetes.\n8) 1 patient as they had glinides2019 AND Type2Diabetes.\n9) 5 patients as they had glinides2019.\n10) 71 patients as they had GLP12019.\n11) 532 patients as they had sulpho2019.\n12) 17 patients as they had glitazones2019.\n13) 22 patients as they had glitazones2019 AND Type2Diabetes.\n14) 1 patient as they had Acarbose2019.\n15) 4 patients as their index dates were beyond study period.\n16) 541 patients as their age at index did not meet the study definition. ",
      loc: "-850 600",
    },
    {
      key: "finalExposed",
      parent: "exposed",
      line: " Finally, number of exposed patients (n=7,062) ",
      loc: "-350 800",
    },
    {
      key: "analysable",
      parent: "finalExposed",
      line: " In this study we matched 67,387 controls to 7,062 exposed/cases based on age, sex and other study criteria.",
      loc: "0 1000",
    },
    {
      key: "control",
      parent: "population",
      line: " The possible control population in this study (n=8,774,663) ",
      loc: "350 400",
    },
    {
      key: "finalControl",
      parent: "control",
      line: "Finally, total number of potential controls eligible for matching (n=6,108,932)",
      loc: "350 800",
    },
    {
      key: "controlExcl",
      parent: "control",
      line: "Following the study criteria 2,625,551 potential controls were dropped for the following reasons:\n1)  Excluded 2,625,551 controls as they were too young or too old based on matching criteria. ",
      loc: "850 600",
    },
    {
      key: "rootExcl",
      parent: "root",
      line: " Excluded 7,862,381 patient(s) based on the study period, population age, and data quality requirements. ",
      loc: "450 100",
    },
  ],
  uml_link: [
    {
      from: "root",
      to: "population",
    },
    {
      from: "population",
      to: "exposed",
    },
    {
      from: "exposed",
      to: "exposedExcl",
    },
    {
      from: "exposed",
      to: "finalExposed",
    },
    {
      from: "finalExposed",
      to: "analysable",
    },
    {
      from: "population",
      to: "control",
    },
    {
      from: "control",
      to: "finalControl",
    },
    {
      from: "finalControl",
      to: "analysable",
    },
    {
      from: "control",
      to: "controlExcl",
    },
    {
      from: "root",
      to: "rootExcl",
    },
  ],
};

export const studyData = {
  uml_data: [
    {
      key: "root",
      line: "In this study 8(out of 986) practices were eligible to participate. Total number of patients present in  8 practices (n=519,075) ",
      loc: "0 0",
    },
    {
      key: "population",
      parent: "root",
      line: " Number of patients qualified to participate in this study based on the study period, population age, and data quality requirements (n=293,690) ",
      loc: "0 200",
    },
    {
      key: "exposed",
      parent: "population",
      line: "In the cohort of qualified patients the following exposure(s)/condition(s) were found:\n1) 38,787 patients with prev_pregnancyDelivery.\n2) 6,091 patients with pregnancyDelivery.\n3) 53 patients with prev_GestationalDiabetes_birm_cam.\n4) 9 patients with prev_GestationalDiabetes_birm_cam AND pregnancyDelivery.\n5) 19 patients with GestationalDiabetes_birm_cam.\n6) 187 patients with GestationalDiabetes_birm_cam AND pregnancyDelivery.\n7) 309 patients with prev_GestationalDiabetes_birm_cam And prev_pregnancyDelivery.\n8) 113 patients with GestationalDiabetes_birm_cam And prev_pregnancyDelivery.  ",
      loc: "-350 400",
    },
    {
      key: "exposedExcl",
      parent: "exposed",
      line: "Following study criteria 84 exposed patients were dropped for the following reasons:\n1) 12 patients as they had CPRD_diabetes.\n2) 16 patients as their index dates were beyond study period.\n3) 56 patients as they failed strict validation criteria. ",
      loc: "-850 600",
    },
    {
      key: "finalExposed",
      parent: "exposed",
      line: " Finally, number of exposed patients (n=103) ",
      loc: "-350 800",
    },
    {
      key: "analysable",
      parent: "finalExposed",
      line: " In this study we matched 206 controls to 103 exposed/cases based on age, sex and other study criteria.",
      loc: "0 1000",
    },
    {
      key: "control",
      parent: "population",
      line: " The possible control population in this study (n=293,503) \n Among which we found the following exposure:\n1) 6,091 controls had pregnancyDelivery.  ",
      loc: "350 400",
    },
    {
      key: "finalControl",
      parent: "control",
      line: "Finally, total number of potential controls eligible for matching (n=6,039)",
      loc: "350 800",
    },
    {
      key: "controlExcl",
      parent: "control",
      line: "Following the study criteria 52 potential controls were dropped for the following reasons:\n1) 52 controls as they had CPRD_diabetes. ",
      loc: "850 600",
    },
    {
      key: "rootExcl",
      parent: "root",
      line: " Excluded 225,385 patient(s) based on the study period, population age, and data quality requirements. ",
      loc: "450 100",
    },
  ],
  uml_link: [
    { from: "root", to: "population" },
    { from: "population", to: "exposed" },
    { from: "exposed", to: "exposedExcl" },
    { from: "exposed", to: "finalExposed" },
    { from: "finalExposed", to: "analysable" },
    { from: "population", to: "control" },
    { from: "control", to: "finalControl" },
    { from: "finalControl", to: "analysable" },
    { from: "control", to: "controlExcl" },
    { from: "root", to: "rootExcl" },
  ],
};

export const stacked_bar = [
  {
    x: ["Tested at Year 1", "Tested at Year 2", "Tested at Year 3"],
    y: [24, 22, 13],
    name: "Numerator",
    type: "bar",
  },
  {
    x: ["Tested at Year 1", "Tested at Year 2", "Tested at Year 3"],
    y: [275, 241, 190],
    name: "Denominator",
    type: "bar",
  },
];

export const lineWithAnnotationNum = {
  labels: ["Year 1", "Year 2", "Year 3"],
  datasets: [
    {
      label: "Tested Population",
      data: [24, 22, 13],
      borderColor: "rgb(" + style.getPropertyValue("--color-primary") + ")",
      borderWidth: 2,
      pointBorderColor:
        "rgb(" + style.getPropertyValue("--color-primary") + ")",
      pointBorderWidth: 6,
      pointRadius: 3,
      pointHoverBackgroundColor:
        "rgb(" + style.getPropertyValue("--color-primary") + ")",
      pointHoverBorderColor: "white",
      pointHoverRadius: 2,
      tension: 0.5,
    },
  ],
};

export const lineWithAnnotationDnom = {
  labels: ["Year 1", "Year 2", "Year 3"],
  datasets: [
    {
      label: "Included Population",
      data: [275, 241, 190],
      borderColor: "rgb(" + style.getPropertyValue("--color-primary") + ")",
      borderWidth: 2,
      pointBorderColor:
        "rgb(" + style.getPropertyValue("--color-primary") + ")",
      pointBorderWidth: 6,
      pointRadius: 3,
      pointHoverBackgroundColor:
        "rgb(" + style.getPropertyValue("--color-primary") + ")",
      pointHoverBorderColor: "white",
      pointHoverRadius: 2,
      tension: 0.5,
    },
  ],
};

export const lineWithAnnotationProp = {
  labels: ["Year 1", "Year 2", "Year 3"],
  datasets: [
    {
      label: "Tested Proportion",
      data: [8.7, 9.1, 6.8],
      borderColor: "rgb(" + style.getPropertyValue("--color-primary") + ")",
      borderWidth: 2,
      pointBorderColor:
        "rgb(" + style.getPropertyValue("--color-primary") + ")",
      pointBorderWidth: 6,
      pointRadius: 3,
      pointHoverBackgroundColor:
        "rgb(" + style.getPropertyValue("--color-primary") + ")",
      pointHoverBorderColor: "white",
      pointHoverRadius: 2,
      tension: 0.5,
    },
  ],
};

export const table_one = {
  columns: [
    "Covariate",
    "Stratum",
    "Overall",
    "CONTROL",
    "EXPOSED",
    "Covariate_Index",
  ],
  data: [
    ["n", "", 309, 206, 103, "n"],
    [
      "AGE_AT_INDEX, median [Q1,Q3]",
      "",
      "33.13 [28.49,36.79]",
      "31.85 [28.19,35.69]",
      "34.41 [30.02,37.61]",
      "AGE_AT_INDEX, median [Q1,Q3]",
    ],
    [
      "AGE_CATG, n (%)",
      "17-30",
      "106 (34.30)",
      "80 (38.83)",
      "26 (25.24)",
      "AGE_CATG, n (%)",
    ],
    [
      "",
      "31-40",
      "169 (54.69)",
      "107 (51.94)",
      "62 (60.19)",
      "AGE_CATG, n (%)",
    ],
    ["", "41-50", "34 (11.00)", "19 (9.22)", "15 (14.56)", "AGE_CATG, n (%)"],
    [
      "SEX, n (%)",
      "F",
      "309 (100.00)",
      "206 (100.00)",
      "103 (100.00)",
      "SEX, n (%)",
    ],
    [
      "ETHNICITY, n (%)",
      "BLACK",
      "24 (7.77)",
      "14 (6.80)",
      "10 (9.71)",
      "ETHNICITY, n (%)",
    ],
    [
      "",
      "MISSING",
      "99 (32.04)",
      "69 (33.50)",
      "30 (29.13)",
      "ETHNICITY, n (%)",
    ],
    ["", "MIXED_RACE", "3 (0.97)", "2 (0.97)", "1 (0.97)", "ETHNICITY, n (%)"],
    ["", "OTHERS", "12 (3.88)", "6 (2.91)", "6 (5.83)", "ETHNICITY, n (%)"],
    [
      "",
      "SOUTH_ASIAN",
      "18 (5.83)",
      "4 (1.94)",
      "14 (13.59)",
      "ETHNICITY, n (%)",
    ],
    [
      "",
      "WHITE",
      "153 (49.51)",
      "111 (53.88)",
      "42 (40.78)",
      "ETHNICITY, n (%)",
    ],
    [
      "COUNTRY, n (%)",
      "E",
      "237 (76.70)",
      "158 (76.70)",
      "79 (76.70)",
      "COUNTRY, n (%)",
    ],
    ["", "W", "72 (23.30)", "48 (23.30)", "24 (23.30)", "COUNTRY, n (%)"],
    [
      "HEALTH_AUTH, n (%)",
      "London",
      "39 (12.62)",
      "26 (12.62)",
      "13 (12.62)",
      "HEALTH_AUTH, n (%)",
    ],
    [
      "",
      "South East",
      "87 (28.16)",
      "58 (28.16)",
      "29 (28.16)",
      "HEALTH_AUTH, n (%)",
    ],
    [
      "",
      "South West",
      "42 (13.59)",
      "28 (13.59)",
      "14 (13.59)",
      "HEALTH_AUTH, n (%)",
    ],
    [
      "",
      "Wales",
      "72 (23.30)",
      "48 (23.30)",
      "24 (23.30)",
      "HEALTH_AUTH, n (%)",
    ],
    [
      "",
      "West Midlands",
      "69 (22.33)",
      "46 (22.33)",
      "23 (22.33)",
      "HEALTH_AUTH, n (%)",
    ],
  ],
};
