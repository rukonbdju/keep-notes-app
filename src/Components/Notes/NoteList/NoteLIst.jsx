import { useState } from "react"
import TextInput from "../../Common/TextInput/TextInput"
import Note from "../Note/Note"

const NoteList = () => {
    const [openTextInput, setTextInput] = useState(false)
    let notes = [
        { id: 1, text: "I am full stack web developer" },
        { id: 2, text: "I am full stack web developer" },
        { id: 3, text: "I am full stack web developer" },
        { id: 4, text: "I am full stack web developer" },
        { id: 5, text: "I am full stack web developer" }
    ]
    return (
        <div>
            <div className="flex flex-row justify-between mb-3">
                <h1 className="text-3xl">Notes</h1>
                <div>
                    <button onClick={() => (setTextInput(!openTextInput))} className="text-xl p-1 rounded-md bg-slate-300"><span className="inline text-2xl">+</span> Add notes</button>
                </div>
            </div>
            {openTextInput && <TextInput label={"Add new notes"} buttonText={"Add"} placeholder={'Write notes'}></TextInput>}
            <section className="grid grid-cols-3 gap-2">
                {notes.map((note) => <Note key={note.id} note={note}></Note>)}
            </section>
        </div>
    )
}

export default NoteList