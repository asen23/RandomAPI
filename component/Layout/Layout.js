import Navbar from "../Navbar/Navbar"

export default function Layout(props) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}
