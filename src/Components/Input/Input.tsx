import "./Input.css";

export interface Inputprops{
    status: "optional" | "required" | "has error",
    text : string
};

export function Input(props:Inputprops){
    let classes = "input";
    let text = "text";
    switch(props.status){
        case "optional": classes += " optional-color";break
        case "required" : classes += " required-color";break
        case "has error": classes += " has-error-color";break
    }
    if(classes== "input has-error-color"){
        text += " error"
    }else{
        text += " display"
    }
    return(
        <div>
            <input type="text" className={classes}></input>
            <p className={text}>{props.text}</p>
        </div>
    )
}