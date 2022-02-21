import './Button.css';

export interface Myprops {
    variant: "Primary" | "Secondary",
    text:string
}

export function Button(props: Myprops) {
    let classes = "btn";
    switch(props.variant){
        case "Primary": classes += " primary-color";break
        case "Secondary" : classes += " secondary-color";break
    }
    return (
        <div>
            <button className={classes}>{props.text}</button>
        </div>
    )
}