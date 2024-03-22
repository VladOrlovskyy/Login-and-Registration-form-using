function Validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/; 

    if (!values.name.trim()) {
        errors.name = "Name should not be empty";
    } else {
        errors.name = "";
    }

    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email address is invalid";
    } else {
        errors.email = "";
    }

    if (!values.password) {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) { 
        errors.password = "Password should contain at least one digit, one lowercase and one uppercase letter, and be at least 6 characters long";
    } else {
        errors.password = "";
    }

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    } else {
        errors.confirmPassword = "";
    }

    return errors;
}

export default Validation;
