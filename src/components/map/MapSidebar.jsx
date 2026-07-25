function MapSidebar() {
  return (
    <div className="sidebar">
      <h2>SAM</h2>

      <hr />

      <h3>Search</h3>

      <input type="text" placeholder="Search a location..." />

      <hr />

      <h3>Transportation</h3>

      <button>🚶 Walk</button>

      <button>🛺 Golf Cart</button>

      <button>🚗 Vehicle</button>
    </div>
  );
}

export default MapSidebar;
