const info = JSON.parse(localStorage.getItem('info')) || [];
let deleteIndex = null;

function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    const errorMsg = document.getElementById("errorMessage");

    if (firstName === "" || lastName === "" || gender === "select" || email === "" || course === "") {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";

        const currentYear = new Date().getFullYear();
        const matricNumber = `${currentYear}${Math.floor(100000 + Math.random() * 900000)}`;

        const details = {
            nameFirst: firstName,
            nameSecond: lastName,
            gender: gender,
            email: email,
            course: course,
            matricNumber: matricNumber
        };

        info.push(details);
        localStorage.setItem("info", JSON.stringify(info));

        showDetails();

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('gender').value = 'select';
        document.getElementById('email').value = '';
        document.getElementById('course').value = '';
    }
}

function showDetails() {
    const table = document.getElementById('table');

    table.innerHTML = `
        <tr>
            <th>S/N</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Course</th>
            <th>Matric Number</th>
            <th>Action</th>
        </tr>
    `;

    for (let i = 0; i < info.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${info[i].nameFirst}</td>
                <td>${info[i].nameSecond}</td>
                <td>${info[i].gender}</td>
                <td>${info[i].email}</td>
                <td>${info[i].course}</td>
                <td>${info[i].matricNumber}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="confirmDelete(${i})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }
}

function confirmDelete(index) {
    deleteIndex = index;

    // Show Bootstrap modal
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();

    // Attach delete action
    document.getElementById("confirmDeleteBtn").onclick = function () {
        deleteStudent();
        modal.hide();
    };
}

function deleteStudent() {
    info.splice(deleteIndex, 1);
    localStorage.setItem("info", JSON.stringify(info));
    showDetails();
}

// // Load data when page refreshes
// showDetails();
