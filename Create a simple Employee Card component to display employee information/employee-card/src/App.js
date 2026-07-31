//import logo from './logo.svg';
import EmployeeCard from "./components/EmployeeCard";
//import './App.css';

function App() {
  return (
      <div>
      <h1 style={{ textAlign: "center" }}>
        Employee Information
      </h1>

      <EmployeeCard
        name="Ashish Patel"
        id="EMP101"
        department="Development"
        position="Software Programmer Intern"
        email="ashish@example.com"
        Number="1234567890"
      />

      <EmployeeCard
        name="Rahul Sharma"
        id="EMP102"
        department="Human Resource"
        position="HR Executive"
        email="rahul@example.com"
        Number="123456781290"
      />
    </div>
  );
}

export default App;
