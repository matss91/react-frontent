import { useState, ChangeEvent } from "react";

// Define a type for the form values
type FormValues = { [key: string]: string };

export const useForm = <T extends FormValues>(initialState: T) => {
    const [formValues, setFormValues] = useState<T>(initialState);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const reset = () => {
        setFormValues(initialState);
    };

    return {
        formValues,
        handleInputChange,
        reset,
    };
};