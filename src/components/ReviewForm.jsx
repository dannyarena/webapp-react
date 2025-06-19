import { useState } from "react";

const [formData, setFormData] = useState({
    name: "",
    vote: "",
    text: ""
});

export default function ReviewForm() {
    return (
        <form>
            <h4>Aggiungi una recensione</h4>

            <div>
                <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                />
            </div>
            
             <div>
                <input 
                type="number"
                name="vote"
                value={formData.vote}
                onChange={(e) => setFormData({ ...formData, vote: e.target.value})}
                />
            </div>
            
             <div>
                <input 
                name="text"
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value})}
                />
            </div>

            <button type="submit">Invia</button>
        </form>
    );
}