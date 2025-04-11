export default function Button(props) {

    return (
        <>

            <input
                type="button"
                value={props.value}
                className="btn"
                disabled={props.disabled}
                onClick={props.handleClick}
            />
        </>
    );

}