import { useState } from "react";
import Button from "../Button";
import FormFields from "../FormFields";
import RolesList from "../RolesList";
import "./Form.css";

const Form = (props) => {
  // const roles = [
  //   "Admin",
  //   "Tech Lead",
  //   "Dev Senior",
  //   "Dev Junior",
  //   "Tech Support",
  //   "Trainee",
  // ];

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [idProfile, setIdProfile] = useState("");
  const [role, setRole] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const Saving = (e) => {
    e.preventDefault();
    alert("l29 - Fomulário submetido");
    console.log(
      "Fomulário submetido",
      name,
      cpf,
      email,
      idProfile,
      role,
      dateStart,
      password,
      confirmPassword,
      avatar
    );
    props.newRegisteredEmployee({
      name,
      cpf,
      email,
      idProfile,
      role,
      dateStart,
      password,
      confirmPassword,
      avatar,
    });
    setName('')
    setCpf('')
    setEmail('')
    setIdProfile('')
    setRole('')
    setDateStart('')
    setPassword('')
    setConfirmPassword('')
    setAvatar('')
  };

  return (
    <section className="form">
      <form onSubmit={Saving}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <FormFields
          mandatory={true}
          label="Nome"
          name="name"
          placeholder="Digite seu nome"
          valueContent={name}
          whenChanged={(valueContent) => setName(valueContent)}
        />
        <FormFields
          mandatory={true}
          label="CPF"
          name="cpf"
          placeholder="Digite seu cpf"
          valueContent={cpf}
          whenChanged={(valueContent) => setCpf(valueContent)}
        />
        <FormFields
          mandatory={true}
          label="Email"
          name="email"
          placeholder="Digite seu email"
          inputType="email"
          valueContent={email}
          whenChanged={(valueContent) => setEmail(valueContent)}
        />
        <FormFields
          mandatory={true}
          label="Matrícula"
          name="id_profile"
          placeholder="Matrícula automática"
          valueContent={idProfile}
          whenChanged={(valueContent) => setIdProfile(valueContent)}
        />
        <RolesList
          mandatory={true}
          label="Cargo"
          name="role"
          placeholder="Selecione seu cargo"
          items={props.roles}
          valueContent={role}
          whenChanged={(valueContent) => setRole(valueContent)}
        />
        <FormFields
          label="Data de Contratação"
          name="date_start"
          placeholder="Selecione a data de início"
          inputType="date"
          valueContent={dateStart}
          whenChanged={(valueContent) => setDateStart(valueContent)}
        />
        <FormFields
          mandatory={true}
          label="Senha"
          name="password"
          placeholder="Digite sua senha"
          inputType="password"
          valueContent={password}
          whenChanged={(valueContent) => setPassword(valueContent)}
        />
        <FormFields
          mandatory={true}
          label="Confirmar Senha"
          name="password-confirm"
          placeholder="Confirme sua senha"
          inputType="password"
          valueContent={confirmPassword}
          whenChanged={(valueContent) => setConfirmPassword(valueContent)}
        />
        <FormFields
          label="Avatar"
          placeholder="Digite o endereço do avatar"
          valueContent={avatar}
          whenChanged={(valueContent) => setAvatar(valueContent)}
        />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default Form;
