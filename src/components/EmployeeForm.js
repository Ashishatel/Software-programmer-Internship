import { useState, useEffect } from "react";

 //useState persorms side effects in functional components, such as fetching data, updating the document title, or responding to state change

 function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Runs after submittedData changes
  // useEffect Hook -> the effect runs whenever submittedData changes
  useEffect(() => {
    if (submittedData) {
      console.log("Employee Submitted:", submittedData);
    }
  }, [submittedData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedData(employee);

    setEmployee({
      name: "",            
      email: "",
      department: "",
      salary: ""
    });
  };

//form tag 

  return (
    <div style={{ width: "400px", margin: "30px auto" }}>
      <h2>Employee Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"               //controlled components is a form elemet whose value is managed by React state using useState
          value={employee.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={employee.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Employee Details</h3>

          <p><strong>Name:</strong> {submittedData.name}</p>

          <p><strong>Email:</strong> {submittedData.email}</p>

          <p><strong>Department:</strong> {submittedData.department}</p>

          <p><strong>Salary:</strong> ₹{submittedData.salary}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeForm;