//----> Dependencies
import { Outlet } from "react-router-dom"

//---- Components
import Menu from './components/statics/Menu';


export default function Layout(){
    return(
        <>
            <Menu />
            <Outlet />
        </>
    )
}