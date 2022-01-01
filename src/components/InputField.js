import React from "react";

const InputField = () => {
  return (
    <form>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add Task" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-success" id="basic-addon2">
            ADD TASK
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputField;
