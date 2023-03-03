import React from "react";

function Input({ id, label, value, errors, onChange, ...inputProps }) {
    return (
        <div className="mt-2">
            <label className="font-semibold">{label}</label> 
            <br />
            <input 
                {...inputProps}
                className="border border-zinc-900 rounded w-full lg:w-3/5 h-8 px-2"
                value={value || ''}
                onChange={onChange}
            /> 
            <br />
            <span className="text-red-500">{errors[inputProps.name]}</span>
        </div>
    );
}

export default Input;