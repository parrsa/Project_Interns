import { forwardRef } from "react";
import TButtonRoot from "./TButtonRoot";
import { ITButton } from "../../@types/components/MUI/TButton";

const TButton = forwardRef<HTMLButtonElement, ITButton>((props, ref) => {
    const { children, width, height, sx, size, variant } = props;
    return (
        <TButtonRoot variant="outlined" {...props} size={size} ownerState={props} ref={ref}>
            {children}
        </TButtonRoot>
    )
})
export default TButton
TButton.displayName = "TButton"