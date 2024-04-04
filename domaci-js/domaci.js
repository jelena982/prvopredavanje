const ucenici = [
  {
    ime: "Ana",
    prezime: "Kovačević",
    godina_rodjenja: 2005,
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 3,
      biologija: 4,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Marko",
    prezime: "Petrović",
    godina_rodjenja: 2006,
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Elena",
    prezime: "Jovanović",
    godina_rodjenja: 2005,
    ocjene: {
      matematika: 3,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 4,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Ivan",
    prezime: "Popović",
    godina_rodjenja: 2007,
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Jelena",
    prezime: "Nikolić",
    godina_rodjenja: 2006,
    ocjene: {
      matematika: 4,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Stefan",
    prezime: "Stojanović",
    godina_rodjenja: 2007,
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Milica",
    prezime: "Simić",
    godina_rodjenja: 2005,
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Nikola",
    prezime: "Pavlović",
    godina_rodjenja: 2006,
    ocjene: {
      matematika: 3,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Sara",
    prezime: "Ilić",
    godina_rodjenja: 2007,
    ocjene: {
      matematika: 5,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Luka",
    prezime: "Đorđević",
    godina_rodjenja: 2005,
    ocjene: {
      matematika: 4,
      maternji_jezik: 4,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5,
    },
  },
];

const predmeti = [
  "matematika",
  "maternji_jezik",
  "engleski_jezik",
  "biologija",
  "likovna_kultura",
];

for (let i = 0; i < ucenici.length; i++) {
  const ucenik = ucenici[i];
  ucenik.izracunajProsjek = function () {
    let suma = 0;
    for (let j = 0; j < predmeti.length; j++) {
      const predmet = predmeti[j];
      suma = suma + this.ocjene[predmet];
    }
    const prosjek = suma / predmeti.length;
    this.prosjek = prosjek;
    return prosjek;
  };
}

for (let i = 0; i < ucenici.length; i++) {
  const ucenik = ucenici[i];
  const prosjek = ucenik.izracunajProsjek();

  let uspjeh;
  if (prosjek >= 4.5) {
    uspjeh = "odličan";
  } else if (prosjek >= 3.5) {
    uspjeh = "vrlo dobar";
  } else if (prosjek >= 2.5) {
    uspjeh = "dobar";
  } else {
    uspjeh = "nedovoljan";
  }

  ucenik.uspjeh = uspjeh;
  console.log(`${ucenik.ime} ${ucenik.prezime} je ${uspjeh}`);
}

function statistikaUspjeha(ucenici) {
  let statistika = {
    odlican: 0,
    vrloDobar: 0,
    dobar: 0,
    dovoljan: 0,
    nedovoljan: 0,
  };

  for (let i = 0; i < ucenici.length; i++) {
    switch (ucenici[i].uspjeh) {
      case "odličan":
        statistika.odlican += 1;
        break;
      case "vrlo dobar":
        statistika.vrloDobar += 1;
        break;
      case "dobar":
        statistika.dobar += 1;
        break;
      case "dovoljan":
        statistika.dovoljan += 1;
        break;
      case "nedovoljan":
        statistika.nedovoljan += 1;
        break;
      default:
        break;
    }
  }

  return statistika;
}

// Sortiranje ucenika po prezimenima
// Sortiranje ucenika po prezimenima obrnutim redoslijedom
function sortirajUcenike(ucenici) {
  for (let i = 0; i < ucenici.length - 1; i++) {
    for (let j = 0; j < ucenici.length - 1 - i; j++) {
      if (ucenici[j].prezime < ucenici[j + 1].prezime) {
        const prvi = ucenici[j];
        ucenici[j] = ucenici[j + 1];
        ucenici[j + 1] = prvi;
      }
    }
  }
  return ucenici;
}

const sortiraniUcenici = sortirajUcenike(ucenici);
console.log("Sortirani ucenici po prezimenima:", sortiraniUcenici);
