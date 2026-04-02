import styles from "./TextInput.module.css"

export default function TextInput({
    type = "",
    value,
    placeholder = "",
    onChange,
    className = "",
}) {
    return (
        <input className={styles.input}/>
    )
}