import React from "react";
import { LayoutInterface } from "../../@types/components/App/compoents";

const MainLayout: React.FC<LayoutInterface> = ({ children }: LayoutInterface) => {
    return (
        <React.Fragment>
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            {children}
        </React.Fragment>
    )

}
export default MainLayout