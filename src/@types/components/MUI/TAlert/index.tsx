import * as CSS from 'csstype';
import { AlertProps , SxProps } from '@mui/material';
import React from 'react';

export interface TAlertIntertface {
    width ?: CSS.Property.Width | number;
    height ?: CSS.Property.Height | number;
    severity : 'success' | 'warning' |'info' |'error';
    varient ?: 'filled' | 'outlined';
    children ?: React.ReactNode;
    sx ?: SxProps;
    add ?: boolean | string;
    remove ?: boolean | string;
    submit ?: boolean | string;
}

export type ITAlert = AlertProps & TAlertIntertface;