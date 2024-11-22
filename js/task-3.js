document.getElementById('name-input').addEventListener('input', function() {
    let inputText = document.getElementById('name-input').value.trim();

    document.getElementById('name-output').textContent = inputText || 'Anonymous';
});