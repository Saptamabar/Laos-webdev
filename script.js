document.getElementById('submitComment').addEventListener('click', function() {
    let nameInput = document.getElementById('nameInput').value.trim();
    let commentInput = document.getElementById('commentInput').value.trim();

    if (nameInput && commentInput) {
        let commentData = {
            name: nameInput,
            comment: commentInput
        };
        // Kirim komentar ke API Apps Script
        sendCommentToApi(commentData);

        // Bersihkan kolom input setelah dikirim
        document.getElementById('nameInput').value = '';
        document.getElementById('commentInput').value = '';
    }
});

function sendCommentToApi(commentData) {
    fetch('https://script.google.com/macros/s/AKfycbxcph7Te628Fmf0AsQhaVISEQfelUZ80BdR6KAYjMPjOjSieBmPPf_QAKKxG9vlFNNtuw/exec', {  // Ganti dengan URL Web App yang benar
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            loadComments(); // Fungsi ini untuk memuat ulang komentar setelah berhasil
        }
    })
    .catch(error => console.error('Error:', error));
}

function loadComments() {
    fetch('https://script.google.com/macros/s/AKfycbxcph7Te628Fmf0AsQhaVISEQfelUZ80BdR6KAYjMPjOjSieBmPPf_QAKKxG9vlFNNtuw/exec')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let commentsList = document.getElementById('commentsList');
            commentsList.innerHTML = '';

            data.comments.forEach(function(comment) {
                let commentItem = document.createElement('li');

                let commentName = document.createElement('div');
                commentName.classList.add('comment-name');
                commentName.textContent = comment.name;

                let commentText = document.createElement('div');
                commentText.classList.add('comment-text');
                commentText.textContent = comment.comment;

                commentItem.appendChild(commentName);
                commentItem.appendChild(commentText);
                commentsList.appendChild(commentItem);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Load comments saat halaman di-load
window.onload = loadComments;
