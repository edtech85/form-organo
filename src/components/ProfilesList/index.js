import "./ProfilesList.css";

const ProfilesList = (props) => {
  return (
    <div className="profiles-list">
      <label>{props.items}</label>
      <select required={props.mandatory}>
        {props.items.map((item) => {
          return <option key={item}> {item} </option>;
        })}
      </select>
    </div>
  );
};

export default ProfilesList
