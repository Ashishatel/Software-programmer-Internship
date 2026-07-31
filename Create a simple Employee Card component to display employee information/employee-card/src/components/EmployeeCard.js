import "./EmployeeCard.css";

function EmployeeCard({ name, id, department, position, email, Number }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>
        <strong>ID:</strong> {id}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Position:</strong> {position}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Mobile No:</strong> {Number}
      </p>
    </div>
  );
}

export default EmployeeCard;