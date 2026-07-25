function TransportationSelector({ transportation, setTransportation }) {
  return (
    <div>
      <h3>Transportation</h3>

      <label>
        <input
          type="radio"
          value="Walking"
          checked={transportation === "Walking"}
          onChange={(e) => setTransportation(e.target.value)}
        />
        Walking
      </label>

      <label>
        <input
          type="radio"
          value="Golf Cart"
          checked={transportation === "Golf Cart"}
          onChange={(e) => setTransportation(e.target.value)}
        />
        Golf Cart
      </label>

      <label>
        <input
          type="radio"
          value="Vehicle"
          checked={transportation === "Vehicle"}
          onChange={(e) => setTransportation(e.target.value)}
        />
        Vehicle
      </label>
    </div>
  );
}

export default TransportationSelector;
