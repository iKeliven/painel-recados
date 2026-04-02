import styles from "./FormArea.module.css"
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";

export default function FormArea({
    placeholder = "digite um novo recado",
    onAdd,
    buttonLabel = "Adicionar",
}) {

    const [newText, setNewText] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if (!newText.trim()) return
        onAdd(newText)
        setNewText("")
    }

    return (
        <form className="form"
            onSubmit={handleSubmit}>
            <TextInput
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder={placeholder}
            />

            <Button
                type="submit"
            >{buttonLabel}</Button>
        </form>
    )
}