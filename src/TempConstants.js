import {
    PatientInfo
} from './models/common/Patient';

export const dashboardList = [{
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Paul Abraham",
        "appointmentTime": 1596027600000,
        "status": "AWAITING SIGN OFF"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Paul Abraham",
        "appointmentTime": 1596196500000,
        "status": "AWAITING QUESTIONNAIRE SUBMISSION"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Amit Barbar",
        "appointmentTime": 1595776080000,
        "status": "APPOINTMENT DATE PASSED"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Hemender Thakuri",
        "appointmentTime": 1594374300000,
        "status": "EPISODE INCOMPLETE"
    },
    {
        "clinicalService": "Referral Service",
        "patientName": "Hemender Thakuri",
        "appointmentTime": 1590993000000,
        "status": "AWAITING QUESTIONNAIRE SUBMISSION"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Amit Barbar",
        "appointmentTime": 1591876500000,
        "status": "AWAITING SIGN OFF"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Paul Abraham",
        "appointmentTime": 1589480700000,
        "status": "APPOINTMENT DATE PASSED"
    },
    {
        "clinicalService": "Referral Service",
        "patientName": "Kerry Ormerod",
        "appointmentTime": 1589991300000,
        "status": "EPISODE INCOMPLETE"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Stephen Pinnington",
        "appointmentTime": 1586002560000,
        "status": "EPISODE INCOMPLETE"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Kerry Ormerod",
        "appointmentTime": 1587226560000,
        "status": "APPOINTMENT DATE PASSED"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Kerry Ormerod",
        "appointmentTime": 1582215360000,
        "status": "AWAITING SIGN OFF"
    },
    {
        "clinicalService": "Referral Service",
        "patientName": "Stephen Pinnington",
        "appointmentTime": 1578050160000,
        "status": "AWAITING QUESTIONNAIRE SUBMISSION"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Paul Abraham",
        "appointmentTime": 1591708620000,
        "status": "AWAITING SIGN OFF"
    },
    {
        "clinicalService": "Minor Eye Conditions Service",
        "patientName": "Amit Barbar",
        "appointmentTime": 1596212220000,
        "status": "AWAITING SIGN OFF"
    },
    {
        "clinicalService": "Referral Service",
        "patientName": "Hemender Thakuri",
        "appointmentTime": 1586012660000,
        "status": "AWAITING SIGN OFF"
    }
];
export const availableClinicalServices = [
    "Discharge Medicine Review",
    "Erectile Dysfunction Service",
    "Hair Loss Clinical Service",
    "Medicines Use Review",
    "NHS Flu Vaccination Service 2020",
    "New Medicine Service",
]

export const inProgress = [{
        value: "NHS Flu Vaccination Service 2020",
        date: '02/07/20'
    },
    {
        value: "New Medicine Service",
        date: '02/07/20'
    },
]

export const communications = [{
        value: "NHS Flu Vaccination Service 2020",
        date: '02/07/20'
    },
    {
        value: "NHS Flu Vaccination Service 2019",
        date: '02/07/20'
    },
    {
        value: "Medicines Use Review",
        date: '02/07/20'
    },
    {
        value: "Medicines Use Review",
        date: '02/07/20'
    },
]

export let TestPatient = new PatientInfo();
TestPatient.firstname = "Hemender";
TestPatient.surname = "Thakuri";
TestPatient.surname2 = "Singh";
TestPatient.birthdate = 608149800000;
TestPatient.address = "Pune, Maharashtra";
TestPatient.salutation = "Mr";
TestPatient.gender = "Male";
TestPatient.nhsNo = '1874783728';
TestPatient.phone = "9082774883";
TestPatient.mobile = "9876543311";
TestPatient.email = "test@domain.com";
TestPatient.gpPractice = 'Cegedim';
TestPatient.gpName = "CegedimRx";
TestPatient.gpCcg = "Manchester";
TestPatient.gpAddress = "Leyland";

export const eligiblePatientGroup = [
    { "code": "Aged 65 years or over (including those becoming age 65 years by 31 March 2021)", "displayName": "Aged 65 years or over (including those becoming age 65 years by 31 March 2021)" },
    { "code": "Aged over 18 to under 65 in a clinical risk group", "displayName": "Aged over 18 to under 65 in a clinical risk group" },
    { "code": "Pregnant woman", "displayName": "Pregnant woman" },
    { "code": "Person in long-stay residential care home", "displayName": "Person in long-stay residential care home" },
    { "code": "Carers", "displayName": "Carers" },
    { "code": "Household contact of immunocompromised individuals", "displayName": "Household contact of immunocompromised individuals" },
    { "code": "Household contacts of those who are on the shielded patient list ", "displayName": "Household contacts of those who are on the shielded patient list " },
    { "code": "Social care workers", "displayName": "Social care workers" },
    { "code": "Hospice workers", "displayName": "Hospice workers" }
]

export const clinicalRiskGroup = [
    { code: "Chronic respiratory disease", displayName: "Chronic respiratory disease" },
    { code: "Chronic heart disease", displayName: "Chronic heart disease" },
    { code: "Chronic kidney disease", displayName: "Chronic kidney disease" },
    { code: "Chronic liver disease", displayName: "Chronic liver disease" },
    { code: "Chronic neurological disease", displayName: "Chronic neurological disease" },
    { code: "Diabetes", displayName: "Diabetes" },
    { code: "Splenic dysfunction", displayName: "Splenic dysfunction" },
    { code: "Immunosuppression", displayName: "Immunosuppression" },
    { code: "Morbidly obese (BMI ≥ 40kg/m²)", displayName: "Morbidly obese (BMI ≥ 40kg/m²)" }
]

export const TestPatients = [{
        firstname: "Xhandrasekhar",
        surname: "Subramanyan",
        address: "Pune, Maharashtra",
        salutation: "Mr",
        gender: "Male",
        nhsNo: '1874783728',

    },
    {
        firstname: "Qhandrasekhar",
        surname: "Subramanyan",
        address: "Pune, Maharashtra",
        salutation: "Mr",
        gender: "Male",
        nhsNo: '1874783728',

    },
    {
        firstname: "Khandrasekhar",
        surname: "Subramanyan",
        address: "Pune, Maharashtra",
        salutation: "Mr",
        gender: "Male",
        nhsNo: '1874783728',

    },
    {
        firstname: "Chandrasekhar,",
        surname: "Subramanyan",
        address: "Pune, Maharashtra",
        salutation: "Mr",
        gender: "Male",
        nhsNo: '1874783728',

    }
]

export const relationship = [
    { code: "Partner", displayName: "Partner" },
    { code: "Spouse", displayName: "Spouse" },
    { code: "Parent", displayName: "Parent" },
    { code: "Sibling", displayName: "Sibling" },
    { code: "Carer", displayName: "Carer" }
]

export const vaccinationRoute = [
    { code: "Intramuscular", displayName: "Intramuscular" },
    { code: "Subcutaneous (for patients with a known bleeding disorder)", displayName: "Subcutaneous (for patients with a known bleeding disorder)" }
]

export const siteAdministration = [
    { code: "Left Arm", displayName: "Left Arm" },
    { code: " Right Arm", displayName: " Right Arm" }
]


export const location = [
    { code: " Patient's Home", displayName: " Patient's Home" },
    { code: "Long-stay care home or long-stay residential facility", displayName: "Long-stay care home or long-stay residential facility" }
]

export const vaccines = [
    { code: "GSK - Fluarix TM Tetra (pack size 1)", displayName: "GSK - Fluarix TM Tetra (pack size 1)" },
    { code: "GSK - Fluarix TM Tetra (pack size 10)", displayName: "GSK - Fluarix TM Tetra (pack size 10)" },
    { code: "Masta - Mastaflu Vaccine (pack size 1)", displayName: "Masta - Mastaflu Vaccine (pack size 1)" },
    { code: "Masta - Mastaflu Vaccine (pack size 10)", displayName: "Masta - Mastaflu Vaccine (pack size 10)" },
    { code: "Mylan (BGP Products) - Influvac sub-unit (pack size 1)", displayName: "Mylan (BGP Products) - Influvac sub-unit (pack size 1)" },
    { code: "Mylan (BGP Products) - Influvac sub-unit (pack size 10)", displayName: "Mylan (BGP Products) - Influvac sub-unit (pack size 10)" },
    { code: "Sanofi Pasteur Vaccines - Quadrivalent Influenza Vaccine (split virion inactivated) (pack size 1)", displayName: "Sanofi Pasteur Vaccines - Quadrivalent Influenza Vaccine (split virion inactivated) (pack size 1)" },
    { code: "Sanofi Pasteur Vaccines - Quadrivalent Influenza Vaccine (split virion inactivated) (pack size 10)", displayName: "Sanofi Pasteur Vaccines - Quadrivalent Influenza Vaccine (split virion inactivated) (pack size 10)" },
    { code: "Seqirus UK Ltd - Fluad (pack size 1)", displayName: "Seqirus UK Ltd - Fluad (pack size 1)" },
    { code: "Seqirus UK Ltd - Fluad (pack size 10)", displayName: "Seqirus UK Ltd - Fluad (pack size 10)" },
    { code: "Seqirus UK Ltd - Flucelvax (pack size 1)", displayName: "Seqirus UK Ltd - Flucelvax (pack size 1)" },
    { code: "Seqirus UK Ltd - Flucelvax (pack size 10)", displayName: "Seqirus UK Ltd - Flucelvax (pack size 10)" }
]