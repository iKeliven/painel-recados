import Button from "../Button/Button"

export default function ActionButton({
    action, isImportant, onClick, remove
}) {
    if (action === "important") {
        return (
            <Button bgColor="warning" onClick={onClick} size="sm">
                {isImportant ? "Remover destaque" : "Destacar"}
            </Button>
        )
    }

    if (action === "remove") {
        return (
            <Button bgColor="danger" onClick={onClick} size="sm">
                Excluir
            </Button>
        )
    }
}