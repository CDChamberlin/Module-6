
function AddMovieFormUncontrolled({onAddMovie}){
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        onAddMovie(Object.fromEntries(data));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Movie Title
                    <input type="text" name="title" />
                </label>
                <label>Synopsis
                    <input type="text" name="synopsis" />
                </label>
                <label>Year Released:
                    <input type="number" name="year" />
                </label>
                <button>Add Movie</button>
                
            </form>
        </div>
    )
}
export default AddMovieFormUncontrolled
