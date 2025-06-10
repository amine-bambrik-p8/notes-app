'use client';

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface Props<T = string> {
  type?: string;
  placeholder?: string;
  label?: string;
  name: string;
  link?: React.ReactNode;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  disabled?: boolean;
  validation?: {
    validationFn: (value: T) => boolean;
    hint: string;
  };
}

export default function Input({
  name,
  type,
  label,
  placeholder,
  link,
  suffix,
  prefix,
  disabled,
  validation,
}: Props) {
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  return (
    <div className="w-full">
      {label && (
        <div className="mb-1.5 flex flex-row justify-between">
          <label
            htmlFor={name}
            className="text-preset-4 block text-neutral-950 dark:text-white"
          >
            {label}
          </label>
          {link}
        </div>
      )}
      <div className="grid w-full grid-cols-1 hover:bg-neutral-50 dark:hover:bg-neutral-900">
        <input
          type={type ?? 'text'}
          placeholder={placeholder ?? ''}
          name={name}
          id={name}
          disabled={disabled}
          aria-invalid={!!isInvalid}
          onChange={
            validation?.validationFn &&
            ((e) => setIsInvalid(!validation?.validationFn(e.target.value)))
          }
          aria-describedby={`${name}-error`}
          className={`text-preset-5 col-start-1 row-start-1 block w-full rounded-md border-[1px] border-neutral-300 bg-transparent py-3 text-gray-900 placeholder:text-neutral-500 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-600 disabled:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-100 dark:placeholder:text-neutral-400 ${prefix ? 'ps-11' : 'ps-4'} ${isInvalid && 'border-red-500'} `}
        />
        {prefix && (
          <div className="col-start-1 row-start-1 ms-4 flex flex-row justify-center self-center justify-self-start">
            {prefix}
          </div>
        )}
        {suffix && (
          <div className="col-start-1 row-start-1 me-4 flex flex-row justify-center self-center justify-self-end">
            {suffix}
          </div>
        )}
      </div>
      {validation?.hint && (
        <p
          id={`${name}-error`}
          className={`text-preset-6 mt-2 flex flex-row items-center ${isInvalid ? 'text-red-600' : ''}`}
        >
          <InformationCircleIcon className="mr-2 size-4" />
          <span>{validation?.hint}</span>
        </p>
      )}
    </div>
  );
}
