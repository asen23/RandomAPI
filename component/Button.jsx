export default function Button(props) {
    return (
        <button onClick={props.onClick} className="border border-gray-400 px-2 py-1 rounded-lg hover:bg-white">
            {props.children}
        </button>
    )
}