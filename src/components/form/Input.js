import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <input 
                type={props.type}
                className={props.className}
                id={props.name}
                name={props.name}
                value={props.value}
                ref={ref}
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
})

export default Input