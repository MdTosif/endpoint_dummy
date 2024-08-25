import classNames from "classnames";
import React from "react";
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";

interface InputFieldProps {
  name: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  validation?: any;
  error?: string;
  rbLabel?: string;
  lbLabel?: string;
  className?: string;
  optional?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder = "Type here",
  register,
  validation,
  error,
  rbLabel,
  lbLabel,
  className,
  optional,
}) => {
  return (
    <>
      <div className={classNames(className)}>
        <label
          className={classNames("input input-bordered flex items-center gap-2")}
        >
          <input
            type="text"
            className="grow"
            placeholder="Search"
            {...register}
          />
          {optional && <span className="badge badge-info">Optional</span>}
        </label>
        {error && <span className="text-error">{error}</span>}
      </div>
    </>
  );
};

export default InputField;
