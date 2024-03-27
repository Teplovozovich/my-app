import styles from './InputField.module.css'
import { ChangeEvent, FC } from "react";
import React from 'react';
import InputMask from 'react-input-mask';

export const useInput = (initialValue: string) => {
    const [value, setValue] = React.useState(initialValue)
    const [error, setError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        error,
        errorMessage,
        onChange: handleChange,
        setError,
        setErrorMessage,
    }
}

interface InputProps {
    type: 'text' | 'number'
    label?: string
    value: string | number
    name?: string
    placeholder: string
    error: boolean
    errorMessage: string
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    mask: string
}

export const InputField: FC<InputProps> = ({
    mask,
    type,
    label,
    value,
    name,
    placeholder,
    error,
    errorMessage,
    disabled,
    onChange,
}) => {
    return (
        <div className={styles.input_wrapper}>
            <label htmlFor={label}>{label}</label>
            <InputMask
                mask={mask}
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
            {error && <p className={styles.error}>{errorMessage}</p>}
        </div>
    )
}
