import React from 'react'
const form = document.getElementById("admissionForm");
const successMessage = document.getElementById("successMessage");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("fatherName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const registerNumber = document.getElementById("registerNumber").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const parentMobile = document.getElementById("parentMobile").value;

    if (
        name === "" ||
        fatherName === "" ||
        dob === "" ||
        gender === "" ||
        registerNumber === "" ||
        email === "" ||
        mobile === "" ||
        parentMobile === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    // Mobile number validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Parent mobile validation
    if (parentMobile.length !== 10 || isNaN(parentMobile)) {
        alert("Please enter a valid parent mobile number.");
        return;
    }

    successMessage.innerHTML = "☑ Application Submitted Successfully!";
    successMessage.style.backgroundColor = "#d4edda";
    successMessage.style.color = "#155724";

    // Show alert
    alert("Application submitted successfully!");

    // Display submitted details in console
    console.log("Application Details");
    console.log("-------------------");
    console.log("Name:", name);
    console.log("Father Name:", fatherName);
    console.log("Date of Birth:", dob);
    console.log("Gender:", gender);
    console.log("Register Number:", registerNumber);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Parent Mobile:", parentMobile);
    form.reset();

});
export default Script;