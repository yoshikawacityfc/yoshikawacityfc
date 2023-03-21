import { Input, InputProps } from "./Input";

type FormInputProps = Pick<
  InputProps,
  | "id"
  | "name"
  | "type"
  | "autoComplete"
  | "maxLength"
  | "required"
  | "placeholder"
  | "enterKeyHint"
  | "className"
  | "value"
  | "onChange"
> & {
  label: string;
  htmlFor: string;
  description?: string;
};

export const FormInput = ({
  label,
  htmlFor,
  description,
  required,
  ...props
}: FormInputProps): JSX.Element => {
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

      <Input
        className="block w-full border-b-2 focus:border-b-primary focus:outline-none"
        {...props}
      />
    </>
  );
};
