export default function Container(props) {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen gap-8 bg-primary">
            {props.children}
        </div>
    )
}
