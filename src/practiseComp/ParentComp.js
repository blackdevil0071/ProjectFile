import ChildComp from "./childComp";
export default function ParentComp(){
    const message = "Hello From Parent"
    return(
        <div>
            <ChildComp greeting={message}/>
        </div>
    )
}