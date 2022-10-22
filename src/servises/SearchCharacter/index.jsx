import { useContext, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { AppContext } from "../../contexts/context";

export default function SearchCharacter() {
    const [text, setText] = useState("");
    const { setSearchCharacter } = useContext(AppContext);
    function handleChange(e) {
        setText(e.target.value)
    }
    function handleSubmit() {
        setSearchCharacter(text);
        setText("");
    }
    function handleKey(e) {
        if (e.key == "Enter") {
            handleSubmit()
        }
    }
    return (
        <div className="search-contain">
            <div className="search">
                <input type="text" onKeyDown={handleKey} placeholder="Procurar Personagem" onChange={handleChange} />
                <button className="btn-search" type="button" onClick={handleSubmit}><VscSearch color="#000" size={24} /></button>
            </div>
        </div >
    )
}