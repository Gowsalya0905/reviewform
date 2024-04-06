const table = document.getElementById("table");
const form = document.getElementById("feedback-form");
const btn = document.getElementById("button");
function submitData(event) {
	event.preventDefault();
	// get input from the form and store in variables
	let firstname = document.getElementById("firstname").value;
	let lastname = document.getElementById("lastname").value;
	let email = document.getElementById("email").value;
	let gender = document.getElementById("gender").value;
	let mobilenum = document.getElementById("mobilenum").value;
	let dept = document.getElementById("departments").value;
	let review = document.getElementById("feedback").value;
	const fullname = firstname + " " + lastname;
	// create a new table row(tr)
	const studenttr = document.createElement("tr");
	// create a new table data(td)
	const fullnametd = document.createElement("td");
	const emailtd = document.createElement("td");
	const gendertd = document.createElement("td");
	const mobilenumtd = document.createElement("td");
	const depttd = document.createElement("td");
	const reviewtd = document.createElement("td");
	// push inputs to new (td)
	fullnametd.textContent = fullname;
	emailtd.textContent = email;
	gendertd.textContent = gender;
	mobilenumtd.textContent = mobilenum;
	depttd.textContent = dept;
	reviewtd.textContent = review;
	// push td into tr
	studenttr.appendChild(fullnametd);
	studenttr.appendChild(emailtd);
	studenttr.appendChild(gendertd);
	studenttr.appendChild(mobilenumtd);
	studenttr.appendChild(depttd);
	studenttr.appendChild(reviewtd);
	// push tr into table:
	table.appendChild(studenttr);
	// clear all input fields after submitting
	form.reset();
	// set time to alert after submitting form
	setTimeout(() => {
		alert("feedback submitted sucessfully");
	}, 1000);
}
// event
firstname.onmouseover = () => {
	firstname.style.backgroundColor = "pink";
	};
	//change color of submit button while mouse leaves submit button area
	firstname.onmouseout = () => {
	firstname.style.backgroundColor = "white";
	};
	lastname.onmouseover = () => {
		lastname.style.backgroundColor = "pink";
		};
		lastname.onmouseout = () => {
		lastname.style.backgroundColor = "white";
		};

		firstname.onmouseover = () => {
			firstname.style.backgroundColor = "pink";
			};
			firstname.onmouseout = () => {
			firstname.style.backgroundColor = "white";
			};

			email.onmouseover = () => {
				email.style.backgroundColor = "pink";
				};
				email.onmouseout = () => {
				email.style.backgroundColor = "white";
				};

				mobilenum.onmouseover = () => {
				mobilenum.style.backgroundColor = "pink";
					};
					mobilenum.onmouseout = () => {
					mobilenum.style.backgroundColor = "white";
					};
					
						btn.onmouseover = () => {
							btn.style.backgroundColor = "pink";
							};
							btn.onmouseout = () => {
							btn.style.backgroundColor = "white";
							};
							
						
						
					
					
				
				
			
			
		