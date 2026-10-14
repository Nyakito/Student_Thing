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

// 1. Let's check if JS can see our data
console.log("JavaScript is successfully connected!");

// 2. Let's count how many students we have
console.log("Total students:", students.length);

// 3. Let's look at just the first student's name
console.log("First student:", students[0].fullName);

// 1. Select the search input from your header
const searchInput = document.querySelector('input[name="student-search"]');

// 2. Select the table body where student rows will eventually live
const tableBody = document.querySelector('.student-data-table tbody');

// 3. Select all the metric value boxes at the top of the dashboard
const metricValues = document.querySelectorAll('.metric-value');

// Let's test our selections in the console!
console.log("Search Input found:", searchInput);
console.log("Table Body found:", tableBody);
console.log("Total metric boxes found:", metricValues.length);

// 1. Calculate Total Students
const totalStudents = students.length;

// 2. Calculate Active Subjects (by counting the keys in the first student's performance object)
const activeSubjects = Object.keys(students[0].performance).length;

// 3. Calculate School Average Score
let totalScoreSum = 0;
students.forEach(student => {
  const scores = Object.values(student.performance);
  const studentSum = scores.reduce((sum, score) => sum + score, 0);
  const studentAvg = studentSum / scores.length;
  totalScoreSum += studentAvg;
});
const schoolAverage = Math.round(totalScoreSum / students.length);

// 4. Calculate Average Attendance Rate
let totalAttendanceSum = 0;
students.forEach(student => {
  // Remove the '%' sign and convert string to a number
  const attendanceNum = parseInt(student.attendance);
  totalAttendanceSum += attendanceNum;
});
const averageAttendance = Math.round(totalAttendanceSum / students.length);

// --- Now, let's inject these numbers into your HTML metric cards! ---
metricValues[0].textContent = totalStudents;
metricValues[1].textContent = activeSubjects;
metricValues[2].innerHTML = `${schoolAverage}<span class="metric-unit">/ 100</span>`;
metricValues[3].innerHTML = `${averageAttendance}<span class="metric-unit">%</span>`;

// Helper function to turn a score into a letter grade
function getGrade(average) {
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";
  return "E";
}

// 1. Clear any existing content in the table body
tableBody.innerHTML = "";

// 2. Loop through each student and create a table row
students.forEach((student, index) => {
  // Calculate this student's individual average
  const scores = Object.values(student.performance);
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = Math.round(total / scores.length);
  const grade = getGrade(average);

  // Create a new table row element
  const row = document.createElement('tr');

  // Fill the row with table cells (td) using template literals (backticks ``)
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${student.admNo}</td>
    <td><strong>${student.fullName}</strong></td>
    <td>${student.class}</td>
    <td>${student.attendance}</td>
    <td>${student.performance.math}</td>
    <td>${student.performance.english}</td>
    <td>${student.performance.biology}</td>
    <td>${student.performance.chemistry}</td>
    <td>${student.performance.computerStudies}</td>
    <td><strong>${average}</strong></td>
    <td><span class="grade-pill">${grade}</span></td>
    <td>#${index + 1}</td>
    <td>
      <button class="icon-button" type="button" aria-label="View student details">👁</button>
    </td>
  `;

  // Add the newly created row into your HTML table body
  tableBody.appendChild(row);
});

// Update the record count pill at the top of the table section
const countPill = document.querySelector('.count-pill');
if (countPill) {
  countPill.textContent = `${students.length} records`;
}

// Function to render any list of students passed to it
function renderTable(studentList) {
  tableBody.innerHTML = "";

  if (studentList.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="14">
          <div class="empty-message">
            <h3>No students found</h3>
            <p>Try searching for a different name or admission number.</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  studentList.forEach((student, index) => {
    const scores = Object.values(student.performance);
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = Math.round(total / scores.length);
    const grade = getGrade(average);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.admNo}</td>
      <td><strong>${student.fullName}</strong></td>
      <td>${student.class}</td>
      <td>${student.attendance}</td>
      <td>${student.performance.math}</td>
      <td>${student.performance.english}</td>
      <td>${student.performance.biology}</td>
      <td>${student.performance.chemistry}</td>
      <td>${student.performance.computerStudies}</td>
      <td><strong>${average}</strong></td>
      <td><span class="grade-pill">${grade}</span></td>
      <td>#${index + 1}</td>
      <td>
        <button class="icon-button" type="button" aria-label="View student details">👁</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  const countPill = document.querySelector('.count-pill');
  if (countPill) {
    countPill.textContent = `${studentList.length} records`;
  }
}

// 1. Select all our filter and sort controls FIRST so they exist when needed
const classFilter = document.querySelector('select[name="class"]');
const termFilter = document.querySelector('select[name="term"]');
const gradeFilter = document.querySelector('select[name="grade"]');
const attendanceFilter = document.querySelector('select[name="attendance"]');
const sortSelect = document.querySelector('select[name="sort-order"]');

// 2. Master function to filter, sort, and display students
function updateDashboard() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedClass = classFilter.value;
  const selectedTerm = termFilter.value;
  const selectedGrade = gradeFilter.value;
  const minAttendance = attendanceFilter.value;
  const sortOrder = sortSelect.value;

  // Filter students
  let result = students.filter(student => {
    const matchesSearch = 
      student.fullName.toLowerCase().includes(searchTerm) ||
      student.admNo.toLowerCase().includes(searchTerm);

    const matchesClass = selectedClass === "" || student.class === selectedClass;
    const matchesTerm = student.term === selectedTerm;

    const studentAttendanceNum = parseInt(student.attendance);
    const matchesAttendance = minAttendance === "" || studentAttendanceNum >= parseInt(minAttendance);

    const scores = Object.values(student.performance);
    const average = Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length);
    const grade = getGrade(average);
    const matchesGrade = selectedGrade === "" || grade === selectedGrade;

    return matchesSearch && matchesClass && matchesTerm && matchesAttendance && matchesGrade;
  });

  // Sort students
  result.sort((a, b) => {
    const getAvg = (st) => {
      const sc = Object.values(st.performance);
      return sc.reduce((sum, s) => sum + s, 0) / sc.length;
    };

    if (sortOrder === "name-asc") {
      return a.fullName.localeCompare(b.fullName);
    } else if (sortOrder === "name-desc") {
      return b.fullName.localeCompare(a.fullName);
    } else if (sortOrder === "average-desc") {
      return getAvg(b) - getAvg(a);
    } else if (sortOrder === "average-asc") {
      return getAvg(a) - getAvg(b);
    } else if (sortOrder === "admission-asc") {
      return a.admNo.localeCompare(b.admNo);
    }
    return 0;
  });

  // Render final table
  renderTable(result);
}

// 3. Listen for changes on all controls
searchInput.addEventListener('input', updateDashboard);
classFilter.addEventListener('change', updateDashboard);
termFilter.addEventListener('change', updateDashboard);
gradeFilter.addEventListener('change', updateDashboard);
attendanceFilter.addEventListener('change', updateDashboard);
sortSelect.addEventListener('change', updateDashboard);

// 4. Run it once when the page loads
updateDashboard();