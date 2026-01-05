function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write something" />
            <button>Submit</button>
        </form>
    );
}