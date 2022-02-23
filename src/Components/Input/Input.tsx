import "./Input.css";

export interface Inputprops {
    status: "optional" | "required" | "has error",
    error_message: string
};

export function Input(props: Inputprops) {
    let input_classes = "input";
    let error_message_class = "text";
    switch (props.status) {
        case "optional": input_classes += " optional-color"; break
        case "required": input_classes += " required-color"; break
        case "has error": input_classes += " has-error-color"; break
    }
    error_message_class += (input_classes == "input has-error-color" ? " error" : " display");
    // input_classes == "input has-error-color"? error_message_class+=" error" : error_message_class+=" display";

    return (
        <div>
            <input type="text" className={input_classes}></input>
            <p className={error_message_class}>{props.error_message}</p>
        </div>
    )
}