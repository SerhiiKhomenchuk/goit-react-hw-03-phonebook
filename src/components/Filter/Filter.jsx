import React from 'react';

const Filter = ({ value, onChange, cleanFilter }) => {
  return (
    <label className="d-block ">
      Find contacts by name
      <div className="input-group input-group-lg mb-2">
        <input
          className="form-control"
          type="text"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={cleanFilter}
          disabled={!value}
        >
          clean up
        </button>
      </div>
    </label>
  );
};

export default Filter;
