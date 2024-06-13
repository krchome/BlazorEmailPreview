window.initializeQuill = function () {
    var quill = new Quill('#editor-container', {
        theme: 'snow'
    });

    window.quill = quill;
}

window.getQuillContent = function () {
    return window.quill.root.innerHTML;
}

window.updatePreview = function (content) {
    document.getElementById('preview-container').innerHTML = content;
}
window.saveQuillContent = function () {
    const content = window.quill.root.innerHTML;
    localStorage.setItem('quillContent', content);
    alert("Content saved!");
}

window.loadQuillContent = function () {
    const content = localStorage.getItem('quillContent');
    if (content) {
        window.quill.root.innerHTML = content;
    }
}

