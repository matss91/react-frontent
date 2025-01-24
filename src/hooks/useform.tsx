import { useState, ChangeEvent } from "react";



export const useForm = <T extends Object>(initialState: T) => {
    const [formValues, setFormValues] = useState<T>(initialState);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>
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