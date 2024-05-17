import { FC, createElement } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageUsers from "./pages/PageUsers"
import MessagesUser from "./pages/MessagesUser"

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={createElement(PageUsers)}/>
                <Route path="/messages/:id" element={createElement(MessagesUser)}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App