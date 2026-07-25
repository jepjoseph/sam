import Select from "react-select";
import "../../styles/NavigationPanel.css";

function LocationSelect({ label, options, value, onChange }) {
  return (
    <div className="location-container">
      <label>{label}</label>

      <Select
        options={options}
        value={value}
        onChange={onChange}
        className="location-select"
        classNamePrefix="location"
        placeholder="Search location..."
        isClearable
      />
    </div>
  );
}

export default LocationSelect;
