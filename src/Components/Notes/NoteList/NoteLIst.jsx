import Note from "../Note/Note"

const NoteList=()=>{
    let notes=[
        {id:1,text:"I am full stack web developer"},
        {id:2,text:"I am full stack web developer"},
        {id:3,text:"I am full stack web developer"},
        {id:4,text:"I am full stack web developer"},
        {id:5,text:"I am full stack web developer"}
    ]
    return (
        <div>
            <h1 className="text-3xl">Notes</h1>
            <section className="grid grid-cols-3 gap-2">
                {notes.map((note)=><Note key={note.id} note={note}></Note>)}
            </section>
        </div>
    )
}

export default NoteList