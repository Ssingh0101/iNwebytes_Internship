document.addEventListener("DOMContentLoaded", () => {
    const getJokeBtn = document.getElementById("getJokeBtn");
    const jokeText = document.getElementById("jokeText");

    getJokeBtn.addEventListener("click", async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
            const data = await response.json();
            const joke = data.setup + " " + data.punchline;
            const colorizedJoke = colorizeJoke(joke);
            jokeText.innerHTML = colorizedJoke;
        } catch (error) {
            console.error("Error fetching joke:", error);
            jokeText.innerHTML = "Failed to fetch a joke.";
        }
    });

    function colorizeJoke(joke) {
        const colors = ["red", "green", "yellow", "blue", "magenta", "cyan"];
        const words = joke.split(" ");
        let colorizedJoke = "";
        words.forEach((word, index) => {
            const color = colors[index % colors.length];
            colorizedJoke += `<span style="color: ${color};">${word}</span> `;
        });
        return colorizedJoke;
    }
});
