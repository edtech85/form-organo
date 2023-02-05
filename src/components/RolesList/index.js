import "./RolesList.css";

const RolesList = (props) => {
  return (
    <div className="roles-list">
      <label>{props.label}</label>
      <select
        onChange={(e) => props.whenChanged(e.target.value)}
        required={props.mandatory}
        value={props.value}
      >
        <option value=""></option>
        {props.items.map((item) => {
          return <option key={item}> {item} </option>;
        })}
      </select>
    </div>
  );
};

export default RolesList;
