const Alert = (props) => {
    return (
        <div role="alert" className={"alert " + props.className}>{props.message}</div>
    )
}

export default Alert