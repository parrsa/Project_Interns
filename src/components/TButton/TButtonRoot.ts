import { Button, styled } from "@mui/material";
import { TButtonOptions } from "../../@types/components/MUI/TButton";
const TButtonRoot = styled(Button)<{ ownerState: TButtonOptions }>(({ ownerState }) => {
    const { variant, height, add, submit } = ownerState;

    function Add() {
        return (
            {
                width: "8rem",
                height: "10rem",
                backgroundColor: 'red'
            }
        )
    };

    function Submit() {
        return variant === "contained" ? {
            fontSize: '13px',
            color: 'red',
            backgroundColor: 'blue',
            border: '2px solid green',
            width: '150px',
            height: '150px'
        } : {
            fontSize: '13px',
            color: 'red',
            backgroundColor: 'yellow',
            width: '100px',
            height: '100px'
        }
    }



    return {
        ...(add && Add()),
        ...(submit && Submit())
    }
})
export default TButtonRoot