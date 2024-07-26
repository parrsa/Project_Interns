import React, { forwardRef } from 'react'
import { ITAlert } from '../../@types/components/MUI/TAlert'
import TAlertRoot from './TAlertRoot';

const TAlert = forwardRef <HTMLDivElement , ITAlert>(
    (props , ref) =>{
        const{width , height,sx, variant,severity, children} =props;

        return(
            <TAlertRoot
            {...props}
            ref={ref}
            variant='outlined'
            severity='warning'
            ownerState={props}
            >
              {children}
            </TAlertRoot>
        )
    });
export default TAlert;
TAlert.displayName = "TAlert";