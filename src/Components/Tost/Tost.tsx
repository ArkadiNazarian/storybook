import './Tost.css';

export interface TostProps {
    status: "success" | "warning" | "error",
    message: string
}

export function Tost(props: TostProps) {
    let status_classes = "status-color";
      switch(props.status){
          case "success": status_classes+= " success";break
          case "warning": status_classes+= " warning";break
          case "error": status_classes+= " error";break
      }
    return (
        <div className={status_classes}>
            <p>{props.message}</p>
            
        </div>
    )
}