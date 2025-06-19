export default function ReviewForm() {
    return (
        <form>
            <h4>Aggiungi una recensione</h4>

            <div>
                <label>Nome:</label>
                <input type="text" name="name" />
            </div>
            
             <div>
                <label>Voto (1-5):</label>
                <input type="text" name="vote" />
            </div>
            
             <div>
                <label>Recensione:</label>
                <textarea name="text" />
            </div>

            <button type="submit">Invia</button>
        </form>
    );
}