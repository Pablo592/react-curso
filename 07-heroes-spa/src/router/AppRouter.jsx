import { Route, Routes } from "react-router-dom"
import { HeroesRoutes} from "../heroes"
import { LoginPage } from "../auth/pages/LoginPage"
import { Navbar } from "../ui/components/Navbar"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />

            </Routes>
        </>
    )
}
