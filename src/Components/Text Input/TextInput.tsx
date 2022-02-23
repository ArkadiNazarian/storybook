import "./TextInput.css";

export interface IProps {
    is_required: boolean,
    error_message: boolean,
    text:string
}

export function TextInput(props: IProps) {
    let is_required_classes = "input";
    switch (props.is_required) {
        case true: is_required_classes += " is-required"; break
        case false: is_required_classes += " is-not-required"; break
    }
    let error_message_classes = "input-error";
    switch (props.error_message) {
        case true: error_message_classes += " has-error-message"; break
        case false: error_message_classes += " has-not-error-message"; break
    }
    if (error_message_classes== "input-error has-error-message"){
       is_required_classes+= " for-error"
    }
    
    return (
        <div>
            <input type="text" className={is_required_classes}></input>
            <p className={error_message_classes}>{props.text}</p>
        </div>
    )
}