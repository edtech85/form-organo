import  { useState } from 'react';
import TopLogo from './components/TopLogo';
import Form from './components/Form';
import Role from './components/Role';
import Footer from './components/Footer';

function App() {

  const roles = [
    {
      name: "Admin",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Tech Lead",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Dev Senior",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Dev Junior",
      primaryColor: "E09969",
      secondaryColor: "FD99E8",
    },
    {
      name: "Tech Support",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Trainee",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    // {
    //   name: "Financial",
    //   primaryColor: "FEBA05",
    //   secondaryColor: "FFF5D9",
    // }
  ];

  const [employees, setEmployees] = useState([])

  const newAddedEmployee = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <TopLogo />
      <Form roles={roles.map(role => role.name)} newRegisteredEmployee = { employee => newAddedEmployee(employee) }/>
      {roles.map(role => 
      <Role
      key={role.name} 
      roleName={role.name} 
      primaryColor={role.primaryColor} 
      secondaryColor={role.secondColor} 
      employees={employees.filter(employee => employee.role === role.name)}
      />)}
      <Footer />

    </div>
  );
}

export default App;
