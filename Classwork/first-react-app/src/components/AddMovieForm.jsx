import { useState } from "react";

function AddMovieForm({onAddMovie}){
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie({title, year})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Movie Title
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>Year Released:
                    <input type="number" name="year" value={year}
                    onChange={(e) => setYear(e.target.value)}/>
                </label>
                <button>Add Movie</button>
                
            </form>
        </div>
    )
}
export default AddMovieForm
