import styles from "./ItemRecado.module.css"
import ActionButton from "../ActionButton/ActionButton";

export default function ItemRecado({
    recado,
    important,
}) {
    return (
        <article
            className={`
            ${styles.card} 
            ${important ? styles.important : ""}`}
        >
            <div className={styles.content}>
                <p>{recado}</p>
                {important && (
                    <span>Importante</span>
                )}
            </div>
            <div className={styles.actions}>
                <ActionButton
                    action="important"
                    isImportant={important}
                />
                <ActionButton
                    action="remove"

                />
            </div>
        </article>
    )
}