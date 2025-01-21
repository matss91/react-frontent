import { useState, ChangeEvent } from "react";

// Define a type for the form values
export const useForm =(initialState={} as HTMLFormElement) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
