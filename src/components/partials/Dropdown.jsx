const Dropdown = ({ title, options, func }) => {
  return (
    <>
      <div className="select-outer">
        <select defaultValue="0" onChange={func} id="example">
          <option value="0" disabled>
            {title}
          </option>
          {options.map((o, i) => (
            <option key={i} value={o} className="text-black">
              {o.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
