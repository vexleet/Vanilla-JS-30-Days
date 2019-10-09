const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('input', function (e) {
    const editorContent = editor.value;

    preview.innerHTML = marked(editorContent);
});