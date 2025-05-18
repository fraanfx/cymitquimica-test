import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <main>
                <div className="layout--container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Layout;