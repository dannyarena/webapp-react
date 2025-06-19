import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



export default function ReviewForm() {
    
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        vote: "",
        text: ""
    }); 

    function handleSubmit(e) {
        e.preventDefault();
        
        axios.post(`http://localhost:3000/movies/${id}/reviews`, formData)
        .then(res => {
            console.log("Recensione Salvata", res.data);
        })
        .catch(err => {
            console.error("Errore nell'invio della recensione", err);
        })
    }

    return (
        <form>
            <h4>Aggiungi una recensione</h4>

            <div>
                <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                placeholder="inserisci il tuo nome"
                />
            </div>
            
             <div>
                <input 
                type="number"
                name="vote"
                value={formData.vote}
                onChange={(e) => setFormData({ ...formData, vote: e.target.value})}
                min={1}
                max={5}
                placeholder="inserisci il voto"
                />
            </div>
            
             <div>
                <input 
                name="text"
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value})}
                placeholder="Scrivi qualcosa.."
                />
            </div>

            <button type="submit">Invia</button>
        </form>
    );
}