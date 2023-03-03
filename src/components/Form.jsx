import React, { useEffect, useState } from 'react';

import Input from './Input';
import { useGlobalContext } from '../context';

function Form() {
    const { closeForm, carts, submitData } = useGlobalContext();

    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [values, setValues] = useState({
        username: '',
        street: '',
        postalCode: '',
        city: '',
        carts
    });

    const inputProps = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            label: 'Your name',
        },
        {
            id: 2,
            name: 'street',
            type: 'text',
            label: 'Street',
        },
        {
            id: 3,
            name: 'postalCode',
            type: 'text',
            label: 'Postal code',
        },
        {
            id: 4,
            name: 'city',
            type: 'text',
            label: 'City',
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        const { username, street, postalCode, city } = values;

        if (!username) {
            errors.username = 'Please enter a valid name!';
        }

        if (!street) {
            errors.street = 'Please enter a valid street!';
        }

        if (!postalCode || postalCode.length < 5) {
            errors.postalCode = 'Please enter a valid postal code (5 character long)!';
        }

        if (!city) {
            errors.city = 'Please enter a valid city!';
        }

        return errors;
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            //call API
            submitData(values);
        }
    }, [errors]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="overflow-y-auto h-64">
                {inputProps.map(input => (
                    <Input key={input.id} {...input} value={values[input.name]} onChange={handleChange} errors={errors} />
                ))}
            </div>
            <div className="mt-4 flex h-10">
                <button
                    className="border border-orange-700 rounded w-1/2 text-orange-700 lg:w-1/5 lg:h-9"
                    onClick={closeForm}
                >
                    Cancel
                </button>
                <button
                    className="border border-orange-700 rounded w-1/2 bg-orange-700 text-white ml-4 lg:w-1/5 lg:h-9"
                    type="submit"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
}

export default Form;