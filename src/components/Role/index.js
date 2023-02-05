import Employee from "..//Employee";
import "./Role.css";

const Role = (props) => {
  const css = { backgroundColor: props.secondaryColor };
  return (
    props.employees.length > 0 && (
      <section className="role" style={{ css }}>
        <h3 style={{ borderColor: props.primaryColor }}> {props.roleName} </h3>
        <div className="employees">
          {" "}
          {props.employees.map((employee) => (
            <Employee
              key={employee.name}
              name={employee.name}
              role={employee.role}
              avatar={employee.avatar}
              backgroundColor={props.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Role;
