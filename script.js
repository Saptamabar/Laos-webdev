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
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=V9JeYDk9vJ2ItOnFQM-F-p-ptO6AF4JPmMyfrSIIVMNT3tqNnaAgesJpPDIfnZdbYvG6eJqIbWGdvsr-31KBkJ5ORqqYZtbbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFvRNOdiby_HrUyPlD2D3sHQt93idbqJTPDy-RGqyDonqeZt4UdJKWg-W_bkwty_vsbbOyyUvNFqMLbLGNSJV8ptb4_rtiTZgQ&lib=M3BV_JfkCOKUIJEGFZkePBuzzWc9fmsux', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadComments();
        }
    })
    .catch(error => console.error('Error:', error));
}
function loadComments() {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=JVOMzD2Ys5Nfl_gbrrz3TmbbtXVC8mNaPfFph_oi0zgzmvrUdx04Z9fiHATyHWepkO1Moabwe60OnOylFn_lty9On256Z2hYm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFvRNOdiby_HrUyPlD2D3sHQt93idbqJTPDy-RGqyDonqeZt4UdJKWg-W_bkwty_vsbbOyyUvNFqMLbLGNSJV8ptb4_rtiTZgQ&lib=M3BV_JfkCOKUIJEGFZkePBuzzWc9fmsux')
        .then(response => response.json())
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
