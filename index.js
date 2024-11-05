function showFunFact(factId) {
    const factElement = document.getElementById(factId);
    if (factElement.classList.contains('hidden')) {
        factElement.classList.remove('hidden');
    } else {
        factElement.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Interactive webpage loaded!");
});
