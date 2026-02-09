const info = []



// function submit() {
//     // alert("hello world")
//     // details.push(firstName, lastName, gender, email, course)
//     console.log(details);
// }

function submit() {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const gender = document.getElementById('gender').value
    const email = document.getElementById('email').value
    const course = document.getElementById('course').value

    const errorMsg = document.getElementById("errorMessage")
    
    // CRITICAL: Validate BEFORE pushing data
    if (firstName == "" || lastName == "" || gender == "select" || email == "" || course == "") {
        errorMsg.style.display = "block"
    } else {
        errorMsg.style.display = "none"
        
        const details = {
            nameFirst: firstName,
            nameSecond: lastName,
            gender: gender,
            email: email,
            course: course
        };

        info.push(details)
        console.log(info);
        showDetails()
     
        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('gender').value = 'select'
        document.getElementById('email').value = ''
        document.getElementById('course').value = ''
    }
}

function showDetails() {
    const tables = document.getElementById('table')
    tables.innerHTML = `<tr>
                <th>S/N</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Course</th>
            </tr>`

    for (let i = 0; i < info.length; i++) {
        tables.innerHTML += `<tr>
                    <td>${i + 1}</td>
                    <td>${info[i].nameFirst}</td>
                    <td>${info[i].nameSecond}</td>
                    <td>${info[i].gender}</td>
                    <td>${info[i].email}</td>
                    <td>${info[i].course}</td>
                </tr>`
    }
}