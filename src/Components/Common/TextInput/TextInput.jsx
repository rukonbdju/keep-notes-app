const TextInput = ({ label, buttonText, placeholder }) => {
    return (
        <div>
            <div className="p-2">
                <p className="text-xl">{label}</p>
                <textarea className="p-1 outline-none border-2 border-slate-700 rounded-md w-full bg-transparent text-xl placeholder:text-slate-700" placeholder={placeholder} name="" id="" rows="2"></textarea>
                <div className="flex justify-end">
                    <button className="px-6 py-1 bg-blue-700 rounded-full active:scale-75 transition-all">{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default TextInput;