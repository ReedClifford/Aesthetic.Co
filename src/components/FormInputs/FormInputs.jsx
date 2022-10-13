import React from "react";

const FormInput = ({ ...allProps }) => {
  return (
    <React.Fragment>
      <input {...allProps} />
    </React.Fragment>
  );
};

export default FormInput;
