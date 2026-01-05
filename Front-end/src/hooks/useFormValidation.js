import { useState } from "react";

export const useFormValidation = (initialValues, validators) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = (name, nextValues) => {
    if (!validators[name]) return "";
    const error = validators[name](nextValues[name], nextValues);

    setErrors((prev) => ({ ...prev, [name]: error }));

    return error;
  };

  const handleChange = (name, value) => {
    setValues((prev) => {
      const nextValues = { ...prev, [name]: value };

      validateField(name, nextValues);

      if (name === "password" && nextValues.confirmPassword) {
        validateField("confirmPassword", nextValues);
      }

      return nextValues;
    });
  };

  const validateAll = () => {
    const newErrors = {};

    Object.keys(validators).forEach((key) => {
      const error = validators[key](values[key], values);

      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, errors, handleChange, validateAll };
};
