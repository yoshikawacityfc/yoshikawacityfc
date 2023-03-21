import { ReactNode } from "react";

interface FormLabelProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  description?: string;
  children: ReactNode;
}

export const FormLabel = ({
  label,
  htmlFor,
  description,
  required,
  children,
}: FormLabelProps): JSX.Element => {
  return (
    <>
      <label htmlFor={htmlFor} className="mb-2 block font-bold">
        <span>{label}</span>
        {required && (
          <span className="ml-2 text-sm text-secondary px-2 rounded-md bg-red-500">
            必須
          </span>
        )}
        {description && (
          <p className="text-gray-400 text-sm font-light">{description}</p>
        )}
      </label>

      {children}
    </>
  );
};
