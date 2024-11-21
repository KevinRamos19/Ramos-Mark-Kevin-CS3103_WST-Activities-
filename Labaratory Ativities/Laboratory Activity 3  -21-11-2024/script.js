const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");

function animateUpdate(element, value) {
    element.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    element.style.transform = "scale(1.2)";
    element.style.opacity = "0.5";

    setTimeout(() => {
        element.textContent = value;
        element.style.transform = "scale(1)";
        element.style.opacity = "1";
    }, 150);
}

textInput.addEventListener("input", () => {
    const text = textInput.value.trim();

    const words = text.split(/\s+/).filter(word => word !== "");
    animateUpdate(wordCount, `Words: ${words.length}`);

    const sentences = text.split(/[.!?]+(?=\s|$)/).filter(sentence => sentence.trim() !== "");
    animateUpdate(sentenceCount, `Sentences: ${sentences.length}`);
});
