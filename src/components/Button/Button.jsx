import styles from "./Button.module.css"

export default function Button({
    children,
    type = "button",
    bgColor = "primary",
    size = "md",
    onClick,
}) {

    return (
        <button
            type={type}
            onClick={onClick}
            className={styles.btn}
        >
            {children}
        </button>
    )
}