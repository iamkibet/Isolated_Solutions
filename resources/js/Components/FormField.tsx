import React, { ForwardedRef, forwardRef } from "react";
import clsx from "clsx";
import { FormFieldProps } from "@/types/types";

const FormField = forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    FormFieldProps
>((props, ref) => {
    const {
        id,
        label,
        value,
        error,
        onValueChange,
        Component = "input",
        required,
        className,
        ...restProps
    } = props;

    const inputClasses = clsx(
        "mt-1 block w-full rounded-md border shadow-sm transition-colors",
        "focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
        "disabled:bg-gray-100 disabled:cursor-not-allowed",
        error
            ? "border-red-300 text-red-900 placeholder-red-300"
            : "border-gray-300 placeholder-gray-400",
        className
    );

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <Component
                {...restProps}
                ref={ref}
                id={id}
                value={value}
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => onValueChange(e.target.value)}
                rows={Component === "textarea" ? props.rows || 3 : undefined}
                className={inputClasses}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />

            {error && (
                <p
                    id={`${id}-error`}
                    className="mt-1 text-sm text-red-600"
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
});

FormField.displayName = "FormField";

export default FormField;
