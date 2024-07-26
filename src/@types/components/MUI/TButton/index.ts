import * as CSS from 'csstype'
import { SxProps, ButtonProps } from '@mui/material';
import React from 'react';

export interface TButtonOptions {
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number;
    sx?: SxProps;
    variant?: 'text' | 'contained' | "outlined" | "gradient";
    size?: "small" | "medium" | "large";
    children?: React.ReactNode,
    add?: boolean | string,
    submit?: boolean | string,
    remove ?: boolean |string
}

export type ITButton = ButtonProps & TButtonOptions;