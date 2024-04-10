"use strict"

const ucenici=[
    {
      ime: "Ana",
      prezime: "Kovačević",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 5,
        engleski_jezik: 3,
        biologija: 4,
        likovna_kultura: 5
      }
    },
    {
      ime: "Marko",
      prezime: "Petrović",
      godina_rodjenja: 2006,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 3,
        likovna_kultura: 4
      }
    },
    {
      ime: "Elena",
      prezime: "Jovanović",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 3,
        maternji_jezik: 5,
        engleski_jezik: 4,
        biologija: 4,
        likovna_kultura: 4
      }
    },
    {
      ime: "Ivan",
      prezime: "Popović",
      godina_rodjenja: 2007,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 5,
        likovna_kultura: 3
      }
    },
    {
      ime: "Jelena",
      prezime: "Nikolić",
      godina_rodjenja: 2006,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 3,
        engleski_jezik: 5,
        biologija: 4,
        likovna_kultura: 4
      }
    },
    {
      ime: "Stefan",
      prezime: "Stojanović",
      godina_rodjenja: 2007,
      pol: "muški",
      ocjene: {
        matematika: 5,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 3,
        likovna_kultura: 5
      }
    },
    {
      ime: "Milica",
      prezime: "Simić",
      godina_rodjenja: 2005,
      pol: "ženski",
      ocjene: {
        matematika: 4,
        maternji_jezik: 5,
        engleski_jezik: 4,
        biologija: 3,
        likovna_kultura: 4
      }
    },
    {
      ime: "Nikola",
      prezime: "Pavlović",
      godina_rodjenja: 2006,
      pol: "muški",
      ocjene: {
        matematika: 3,
        maternji_jezik: 4,
        engleski_jezik: 5,
        biologija: 5,
        likovna_kultura: 4
      }
    },
    {
      ime: "Sara",
      prezime: "Ilić",
      godina_rodjenja: 2007,
      pol: "ženski",
      ocjene: {
        matematika: 5,
        maternji_jezik: 3,
        engleski_jezik: 5,
        biologija: 4,
        likovna_kultura: 3
      }
    },
    {
      ime: "Luka",
      prezime: "Đorđević",
      godina_rodjenja: 2005,
      pol: "muški",
      ocjene: {
        matematika: 4,
        maternji_jezik: 4,
        engleski_jezik: 4,
        biologija: 5,
        likovna_kultura: 5
      }
    }
  ]

ucenici.forEach(function(element){
    element.IzracunajProsjek=() => {
        let zbir=0;
        let br_predmeta=0;
        for(const [key, value] of Object.entries(element["ocjene"])){
            zbir=zbir+value;
            br_predmeta++;
        }
        return zbir/br_predmeta;
    }   
    element.prosjek=element.IzracunajProsjek();
})

// console.log(ucenici);

ucenici.forEach(function(element){
    const pr=element.prosjek;
    const mz=element.pol;
    let uspjeh="";
    if(mz==="ženski"){
        if(pr<=5 && pr>=4.5)
            uspjeh="odlična";
        else if(pr<4.5 && pr>=3.5)
            uspjeh="vrlo dobra";
        else if(pr<3.5 && pr>=2.5)
            uspjeh="dobra";
        else if(pr<2.5 && pr>=1.5)
            uspjeh="dovoljna";
        else
            uspjeh="nedovoljna";
    }
    else{
        if(pr<=5 && pr>=4.5)
            uspjeh="odličan";
        else if(pr<4.5 && pr>=3.5)
            uspjeh="vrlo dobar";
        else if(pr<3.5 && pr>=2.5)
            uspjeh="dobar";
        else if(pr<2.5 && pr>=1.5)
            uspjeh="dovoljan";
        else
            uspjeh="nedovoljan";
    }
    element.uspjeh=() => console.log(`${element["ime"]} ${element["prezime"]} je`, uspjeh);
})

// console.log(ucenici);
// ucenici[0].uspjeh();

function statistikaUspjeha(niz){
    let br_odl=0;
    let br_vd=0;
    let br_dobar=0;
    let br_dov=0;
    let br_ned=0;
    let usp="";

    niz.forEach(function(element){
        if(element["prosjek"]>=4.5 && element["prosjek"]<=5)
            br_odl++;
        else if(element["prosjek"]<4.5 && element["prosjek"]>=3.5)
            br_vd++;
        else if(element["prosjek"]<3.5 && element["prosjek"]>=2.5)
            br_dobar++;
        else if(element["prosjek"]<2.5 && element["prosjek"]>=1.5)
            br_dov++;
        else
            br_ned++;
    })

    const rez={
        odlican:br_odl,
        vrlo_dobar:br_vd,
        dobar:br_dobar,
        dovoljan:br_dov,
        nedovoljan:br_ned
    };
    return rez;
}

console.log(statistikaUspjeha(ucenici));