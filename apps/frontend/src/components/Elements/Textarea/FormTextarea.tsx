import { Textarea, TextareaProps } from "./Textarea";

type FormTextareaProps = Pick<
  TextareaProps,
  | "id"
  | "name"
  | "autoComplete"
  | "maxLength"
  | "required"
  | "placeholder"
  | "className"
  | "rows"
  | "value"
  | "onChange"
> & {
  label: string;
  htmlFor: string;
  description?: string;
};

export const FormTextarea = ({
  label,
  htmlFor,
  description,
  required,
  ...props
}: FormTextareaProps): JSX.Element => {
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
          <p className="text-gray-300 text-sm font-light">{description}</p>
        )}
      </label>

      <Textarea
        className="block w-full border-2 focus:border-primary focus:outline-none"
        {...props}
      />
    </>
  );
};
