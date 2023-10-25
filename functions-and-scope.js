// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

//////////////////////////////////////////////////////////////////////////////////////////////

const gradesFirst = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let cumLaudeCounter = 0;

for (let i = 0; i < gradesFirst.length; i++) {
    if (gradesFirst[i] >= 8) {
        cumLaudeCounter++;
    }
}
console.log(cumLaudeCounter)

//////////////////////////////////////////////////////////////////////////////////////////////

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

//////////////////////////////////////////////////////////////////////////////////////////////

const gradesCumLaude = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

function cumLaude (gradesCumLaude) {
    let cumLaudeCounter = 0;

    for (let i = 0; i < gradesCumLaude.length; i++) {
        if (gradesCumLaude[i] >= 8) {
            cumLaudeCounter++;
        }
    }

    return cumLaudeCounter;
}

console.log(cumLaude(gradesCumLaude));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

//////////////////////////////////////////////////////////////////////////////////////////////

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//////////////////////////////////////////////////////////////////////////////////////////////

const gradesAve = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let average = 0

for (let i = 0; i < gradesAve.length; i++) {
    average += gradesAve[i];
}

const average1 = average / gradesAve.length;

console.log(average1);

//////////////////////////////////////////////////////////////////////////////////////////////

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

//////////////////////////////////////////////////////////////////////////////////////////////

const grades22 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

function averageGrade (grades22) {

let average = 0

for (let i = 0; i < grades22.length; i++) {
    average += grades22[i];
}

const average1 = average / grades22.length ;
const rounded = average1.toFixed(2);

    return rounded
}

console.log(averageGrade(grades22));

//////////////////////////////////////////////////////////////////////////////////////////////

/* Bonusopdracht: hoogste cijfer */

const gradesHighest = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

function averageGrade1 (gradesHighest) {

    let average = 0

    for (let i = 0; i < gradesHighest.length; i++) {
        average += gradesHighest[i];
    }

    const average1 = average / gradesHighest.length ;
    const ceil = Math.ceil(average1)

    return ceil
}

console.log(averageGrade1(gradesHighest));

//////////////////////////////////////////////////////////////////////////////////////////////















//////////////////////////////////////////////////////////////////////////////////////////////

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

//////////////////////////////////////////////////////////////////////////////////////////////

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let highest = grades[0]

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highest) {
        highest = grades[i]
    }
}

console.log(highest);

//////////////////////////////////////////////////////////////////////////////////////////////

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

//////////////////////////////////////////////////////////////////////////////////////////////

const grades3 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
function highestGrade (grades3) {
    let highest = grades3[0]

    for (let i = 0; i < grades3.length; i++) {
        if (grades3[i] > highest) {
            highest = grades3[i]
        }
    }
    return highest;
}

console.log(highestGrade(grades3));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));

//////////////////////////////////////////////////////////////////////////////////////////////