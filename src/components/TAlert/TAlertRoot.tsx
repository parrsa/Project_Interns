import { Alert, styled } from '@mui/material'
import { TAlertIntertface } from '../../@types/components/MUI/TAlert'

const TAlertRoot = styled (Alert) <{ownerState : TAlertIntertface}>
(
    ({ownerState}) =>{
        const {varient , add , remove , submit, severity} = ownerState;

        function Add(){
            return{
                width:'12rem',
                height:'10rem',
                backgroundColor: 'blue',
                color: '#fff'
            };
        }

        function Submit(){
            return severity === 'warning' ?{
                backgroundColor: 'red',
                color: '#fff',
                fontSize: '1.6rem'
            }
            :{
              backgroundColor: 'yellow',
              color: '#222',
              fontSize: '2rem'
            };
        }

        function Remove(){
            return varient === 'outlined' ?
            {
                fontSize: '2rem',
                fontWeight: '600',
                borde: ' 1.5px solid #dedede',
                width: '4rem',
                height: '3rem'
            }
            :{
                fontSize: '3rem',
                fontWeight: '500',
                borde: ' 3.5px solid #dedede',
                width: '4.6rem',
                height: '3.5rem'

            };
        }

        return{
            ...(add && Add()),
            ...(remove && Remove()),
            ...(submit && Submit())
        };

    }
);

export default TAlertRoot;
