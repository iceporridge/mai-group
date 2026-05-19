document.addEventListener('DOMContentLoaded', (event) => {
    const filterByTopic = (topic) => {
        document.querySelectorAll('.publication-reference').forEach((el) => {
            el.style.display = el.getAttribute('data-topic') === topic ? 'block' : 'none';
        });
    };

    // Example usage
    // filterByTopic('ML Systems');
});
