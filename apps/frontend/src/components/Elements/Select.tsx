import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import { Icon } from "./Icon";

export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  selectedOptionValue: string;
  onChange: (value: string) => void;
}

export const Select = ({
  options,
  selectedOptionValue,
  onChange,
}: SelectProps): JSX.Element => {
  const selectedOptionLabel = options.find(
    (item) => item.value === selectedOptionValue
  )?.label;

  return (
    <Listbox value={selectedOptionValue} onChange={onChange}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default border-b-2 bg-white py-2 pl-3 pr-10 text-left focus:outline-none">
          <span className="block truncate">{selectedOptionLabel}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <Icon icon={faChevronDown} color="text" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className="relative cursor-default select-none py-2 pl-10 pr-4"
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Icon icon={faCheck} />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
