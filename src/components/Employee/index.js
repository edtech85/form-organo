import "./Employee.css";

const Employee = ({ name, role, email, avatar, backgroundColor }) => {
  return (
    <div className="employee">
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={avatar} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <h5>{email}</h5>
      </div>
    </div>
  );
};

export default Employee;
