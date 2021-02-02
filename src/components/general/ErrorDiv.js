import React from "react";

const ErrorDiv = ({ errors }) => {
  var allErrors = [];
  // Converts object or string into array of strings
  if (typeof errors === "string") {
    allErrors.push(errors);
  } else {
    for (var key in errors) {
      allErrors.push(errors[key]);
    }
  }
  return (
    <div className="margin-t20">
      {allErrors.length > 0 &&
        allErrors.map((error) => (
          <p className="primary-color" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
};

export default ErrorDiv;
