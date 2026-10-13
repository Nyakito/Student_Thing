// Add your JavaScript here.
// Suggested first step: create an array of student objects, then render each object
// as a <tr> inside the element with id="student-table-body".

const students = [
  {
    admNo: "ST001",
    fullName: "Amina Hassan",
    class: "Form 3A",
    gender: "Female",
    attendance: "96%",
    performance: {
      math: 85,
      english: 78,
      biology: 92,
      chemistry: 81,
      computerStudies: 95
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST002",
    fullName: "Brian Otieno",
    class: "Form 3A",
    gender: "Male",
    attendance: "88%",
    performance: {
      math: 67,
      english: 74,
      biology: 70,
      chemistry: 65,
      computerStudies: 82
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST003",
    fullName: "Cynthia Wanjiku",
    class: "Form 3A",
    gender: "Female",
    attendance: "98%",
    performance: {
      math: 91,
      english: 88,
      biology: 86,
      chemistry: 93,
      computerStudies: 90
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST004",
    fullName: "David Kiptoo",
    class: "Form 3A",
    gender: "Male",
    attendance: "82%",
    performance: {
      math: 54,
      english: 62,
      biology: 58,
      chemistry: 60,
      computerStudies: 71
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST005",
    fullName: "Esther Njeri",
    class: "Form 3A",
    gender: "Female",
    attendance: "94%",
    performance: {
      math: 76,
      english: 84,
      biology: 89,
      chemistry: 77,
      computerStudies: 88
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST006",
    fullName: "Felix Mwangi",
    class: "Form 3B",
    gender: "Male",
    attendance: "79%",
    performance: {
      math: 43,
      english: 56,
      biology: 49,
      chemistry: 52,
      computerStudies: 65
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST007",
    fullName: "Grace Achieng",
    class: "Form 3B",
    gender: "Female",
    attendance: "99%",
    performance: {
      math: 88,
      english: 91,
      biology: 94,
      chemistry: 86,
      computerStudies: 97
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST008",
    fullName: "Hassan Abdi",
    class: "Form 3B",
    gender: "Male",
    attendance: "91%",
    performance: {
      math: 72,
      english: 69,
      biology: 75,
      chemistry: 71,
      computerStudies: 80
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST009",
    fullName: "Irene Chebet",
    class: "Form 3B",
    gender: "Female",
    attendance: "93%",
    performance: {
      math: 61,
      english: 79,
      biology: 83,
      chemistry: 68,
      computerStudies: 85
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST010",
    fullName: "James Kamau",
    class: "Form 3B",
    gender: "Male",
    attendance: "75%",
    performance: {
      math: 38,
      english: 47,
      biology: 42,
      chemistry: 45,
      computerStudies: 58
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST011",
    fullName: "Kevin Mutua",
    class: "Form 2A",
    gender: "Male",
    attendance: "95%",
    performance: {
      math: 80,
      english: 73,
      biology: 77,
      chemistry: 82,
      computerStudies: 84
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST012",
    fullName: "Lucy Atieno",
    class: "Form 2A",
    gender: "Female",
    attendance: "100%",
    performance: {
      math: 95,
      english: 92,
      biology: 90,
      chemistry: 89,
      computerStudies: 96
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST013",
    fullName: "Martin Barasa",
    class: "Form 2A",
    gender: "Male",
    attendance: "85%",
    performance: {
      math: 57,
      english: 63,
      biology: 55,
      chemistry: 59,
      computerStudies: 70
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST014",
    fullName: "Naomi Wambui",
    class: "Form 2A",
    gender: "Female",
    attendance: "97%",
    performance: {
      math: 69,
      english: 85,
      biology: 81,
      chemistry: 74,
      computerStudies: 91
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST015",
    fullName: "Peter Maina",
    class: "Form 2A",
    gender: "Male",
    attendance: "81%",
    performance: {
      math: 48,
      english: 52,
      biology: 61,
      chemistry: 44,
      computerStudies: 67
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST016",
    fullName: "Queen Wairimu",
    class: "Form 2B",
    gender: "Female",
    attendance: "96%",
    performance: {
      math: 83,
      english: 87,
      biology: 79,
      chemistry: 85,
      computerStudies: 92
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST017",
    fullName: "Robert Ouma",
    class: "Form 2B",
    gender: "Male",
    attendance: "87%",
    performance: {
      math: 64,
      english: 58,
      biology: 67,
      chemistry: 62,
      computerStudies: 73
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST018",
    fullName: "Sheila Muthoni",
    class: "Form 2B",
    gender: "Female",
    attendance: "99%",
    performance: {
      math: 90,
      english: 94,
      biology: 88,
      chemistry: 91,
      computerStudies: 96
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST019",
    fullName: "Timothy Kibet",
    class: "Form 1A",
    gender: "Male",
    attendance: "84%",
    performance: {
      math: 52,
      english: 60,
      biology: 47,
      chemistry: 55,
      computerStudies: 64
    },
    year: "2026",
    term: "Term 2"
  },
  {
    admNo: "ST020",
    fullName: "Vivian Adhiambo",
    class: "Form 1A",
    gender: "Female",
    attendance: "95%",
    performance: {
      math: 78,
      english: 82,
      biology: 85,
      chemistry: 80,
      computerStudies: 89
    },
    year: "2026",
    term: "Term 2"
  }
];
const tableBody = document.getElementById("student-table-body");

  students.forEach(student => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${student.admNo}</td>
      <td>${student.fullName}</td>
      <td>${student.class}</td>
      <td>${student.gender}</td>
      <td>${student.attendance}</td>
      <td>${student.performance.math}</td>
      <td>${student.performance.english}</td>
      <td>${student.performance.biology}</td>
      <td>${student.performance.chemistry}</td>
      <td>${student.performance.computerStudies}</td>
      <td>${student.year}</td>
      <td>${student.term}</td>
    `;

    tableBody.appendChild(tr);
  });