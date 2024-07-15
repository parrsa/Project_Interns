export interface AllRoutes {
    type: string,
    name: string,
    key: string,
    route: string,
    component?: React.ReactNode,
    children?: React.ReactNode | any
}