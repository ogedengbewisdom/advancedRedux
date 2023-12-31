
import classes from "./Notification.module.css"

const Notification = (props) => {

    let specialClasses = "";
    if (props.status === "error") {
        specialClasses= classes.error
    } else if (props.status === "success") {
        specialClasses = classes.success
    }

    let combinedClasses = `${classes.notification} ${specialClasses}`

    
    return (
        <section className={combinedClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}

export default Notification