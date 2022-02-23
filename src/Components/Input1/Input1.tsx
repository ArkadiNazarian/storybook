import "./Input1.css";

export interface IProps {
    is_required: boolean,
    error_massage: boolean,
    text:string
}

export function Input1(props: IProps) {
    let is_required_classes = "input";
    switch (props.is_required) {
        case true: is_required_classes += " is-required"; break
        case false: is_required_classes += " is-not-required"; break
    }
    let error_massage_classes = "input-error";
    switch (props.error_massage) {
        case true: error_massage_classes += " has-error-massage"; break
        case false: error_massage_classes += " has-not-error-massage"; break
    }
    if (error_massage_classes== "input-error has-error-massage"){
       is_required_classes+= " for-error"
    }
    
    return (
        <div>
            <input type="text" className={is_required_classes}></input>
            <p className={error_massage_classes}>{props.text}</p>
        </div>
    )
}