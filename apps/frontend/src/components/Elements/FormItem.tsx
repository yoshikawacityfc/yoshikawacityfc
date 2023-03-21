import { ReactNode } from "react";

interface FormItemProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  description?: string;
  errorMessage?: string;
  children: ReactNode;
}

export const FormItem = ({
  label,
  htmlFor,
  description,
  required,
  errorMessage,
  children,
}: FormItemProps): JSX.Element => {
  return (
    <>
      <label htmlFor={htmlFor} className="mb-2 block font-bold">
        <span>{label}</span>
        {required && (
          <span className="ml-2 text-sm text-secondary px-2 py-1 rounded-md bg-red-500">
            必須
          </span>
        )}
        {description && (
          <p className="text-gray-400 text-sm font-light">{description}</p>
        )}
      </label>

      {children}

      <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
    </>
  );
};
