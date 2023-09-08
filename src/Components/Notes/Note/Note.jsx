const Note=({note})=>{
    return(
        <div className="p-2 rounded-lg bg-blue-500 opacity-50">
            <p>{note.text} {note.id}</p>
        </div>
    )
}

export default Note;