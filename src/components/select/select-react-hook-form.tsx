import { FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React from "react";
import { Controller } from "react-hook-form";

export interface ReactHookFormSelectProps {
    name: string;
    label: string;
    control: any;
    defaultValue?: string | number;
    error?: boolean;
    errorMessage?: string;
}

export const SelectReactHookForm: React.FunctionComponent<ReactHookFormSelectProps> = ({
    name,
    label,
    control,
    defaultValue,
    error,
    errorMessage,
    children,
    ...props
}) => {
    const labelId = `${name}-label`;
    return (
        <FormControl {...props} error={error} fullWidth>
            <Controller
                as={
                    <Select
                        labelId={labelId}
                        label={label}
                        displayEmpty                        
                    >
                        {children}
                    </Select>
                }
                name={name}
                control={control}
                defaultValue={defaultValue ?? ''}
            />
            {error && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
    );
};