const notes = [
  {
    Course: "Ingles",
    note: 10,
    credits: 2,
  },
  {
    Course: "Matematicas",
    note: 8,
    credits: 5,
  },
  {
    Course: "Contabilidad",
    note: 7,
    credits: 5,
  },
];

const notesWithCredit = notes.map(function(noteObject){
  return noteObject.note * noteObject.credits;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
  function(sum=0, newVal) {
    return sum + newVal;
  }
);

const credits = notes.map(function(noteObject){
  return noteObject.credits;
});

const sumOfCredits = credits.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;