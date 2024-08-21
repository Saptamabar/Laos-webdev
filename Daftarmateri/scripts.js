let semester = 1;

        // Data untuk setiap semester
        const semesterData = {
            1: {
                courses: {
                    "Algoritma dan Pemrogaman 1": [
                        {title: "Pengenalan Python", ppt: ""},
                        {title: "Tipe Data dan Variabel", ppt: ""},
                        {title: "Tipe Data Sequential", ppt: ""},
                        {title: "Operasi Aritmatika", ppt: ""},
                        {title: "Perkondisian", ppt: ""},
                        {title: "Looping", ppt: ""},
                        {title: "Function dan File Handling", ppt: ""},
                        {title: "Data Handling", ppt: ""},
                        {title: "Pandas", ppt: ""}
                    ],
                    "Etika Profesi": [
                        {title: "Etika", ppt: ""},
                        {title: "Profesi di Bidang IT", ppt: ""},
                        {title: "Kode Etik Profesi", ppt: ""},
                        {title: "Sertifikasi di Bidang IT", ppt: ""},
                        {title: "Cyber Ethic", ppt: ""},
                        {title: "Etika Bisnis", ppt: ""},
                        {title: "UU ITE", ppt: ""},
                        {title: "Paten dan Hak Cipta", ppt: ""},
                        {title: "Cyber Crime", ppt: ""},
                        {title: "IT Forensic", ppt: ""}
                    ],
                    "Matematika Dasar": [],
                    "Prinsip Organisasi dan Manajemen": [],
                    "Bahasa Inggris": [],
                    "Dasar-dasar Sistem Informasi": [],
                    "Interaksi Manusia dan Komputer": [],
                    "Pendidikan Pancasila": [],
                    "Pendidikan Agama Islam": []
                }
            },
            2: {
                courses: {
                    "Algoritma dan Pemrograman II": [
                        {title: "Rekursif dan Palindrom", ppt: ""},
                        {title: "Brute Force", ppt: ""},
                        {title: "Searching", ppt: ""},
                        {title: "Sorting", ppt: ""},
                        {title: "Divide and Conquer", ppt: ""},
                        {title: "Knapsack Problem", ppt: ""},
                        {title: "Spanning Tree", ppt: ""},
                        {title: "Maze Problem", ppt: ""}
                    ],
                    "Pengantar Rekayasa Perangkat Lunak": [],
                    "Jaringan Komputer": [],
                    "Matematika Diskrit": [],
                    "Sistem Basis Data": [
                        {title: "Konsep Database", ppt: "https://docs.google.com/presentation/d/e/2PACX-1vQjw4wzlLirya_AHUPWLbGPTxAdhIYQNV-vsUPYlhclzdVF5X7uiqCEVPq5W7Dis-GNQA-gzRKOq9t0/embed?start=false&loop=false&delayms=30000"},
                        {title: "Menyimpan data dalam struktur tabel", ppt: "https://docs.google.com/presentation/d/e/2PACX-1vQCDHX6l2t9CxNMJO9KNzCuzPbOLOzkr2QJ57nCbYUnNoJYUomvKYSfqjf-nTA0bg/embed?start=false&loop=false&delayms=60000"},
                        {title: "Entity", ppt: "https://docs.google.com/presentation/d/e/2PACX-1vR4BnCfaULlcG6AFrrcHSjvQlVxeNr8-EgPqxl630oHy5sfKL8zCaRf9JnLAPF_RQ/embed?start=false&loop=false&delayms=3000"},
                        {title: "ERD 2", ppt: "https://docs.google.com/presentation/d/1G-dB3KKOclbVZhcMV64qp79ONPPIussw/embed?start=false&loop=false&delayms=3000"},
                        {title: "Normalisasi", ppt: "https://docs.google.com/presentation/d/18GhXGyD7lDN5ssL9nc2WG9KAlwNfOtIx/embed?start=false&loop=false&delayms=3000"},
                        {title: "DDL", ppt: ""},
                        {title: "Serba Serbi Database", ppt: ""},
                        {title: "Serba Serbi Database 2", ppt: ""},
                        {title: "Select", ppt: ""},
                        {title: "Where", ppt: ""},
                        {title: "Join", ppt: ""},
                        {title: "Join 2", ppt: ""},
                        {title: "Group By", ppt: ""},
                        {title: "Group By 2", ppt: ""}
                    ],
                    "Bahasa Indonesia": [],
                    "Arsitektur Komputer": [],
                    "Teori Graf": [],
                    "Manajemen dan Kewirausahaan": []
                }
            },
            3: {
                courses: {
                    "Metodologi Penelitian": [],
                    "Riset Operasi": [],
                    "Pengantar Kecerdasan Buatan": [],
                    "Object Oriented Design": [],
                    "Analisa dan Perancangan Sistem": [],
                    "Analitik dan Visualisasi Data": [],
                    "Manajemen Keamanan Sistem Informasi": [],
                    "Pemrograman Berorientasi Obyek": []
                }
            }
        };


        function changeSemester(change) {
            semester += change;
            if (semester < 1) semester = 1;
            if (semester > Object.keys(semesterData).length) semester = Object.keys(semesterData).length;
            document.getElementById("semester").innerText = "Semester " + semester;
            updateButtons();
        }

        function updateButtons() {
            const courseNames = Object.keys(semesterData[semester].courses);
            const courseButtonsContainer = document.getElementById("courseButtons");
            courseButtonsContainer.innerHTML = "";

            courseNames.forEach(courseName => {
                const button = document.createElement("button");
                button.innerText = courseName;
                button.onclick = () => toggleTopics(semesterData[semester].courses[courseName], button);
                courseButtonsContainer.appendChild(button);
            });
        }

        function toggleTopics(topics, button) {
            const existingList = button.nextElementSibling; // Mendapatkan daftar topik setelah tombol
            const allLists = document.querySelectorAll('.topic-list'); // Mendapatkan semua daftar topik
            
            // Sembunyikan semua daftar topik
            allLists.forEach(list => {
                if (list !== existingList) {
                    list.style.display = 'none';
                }
            });

            if (existingList && existingList.classList.contains('topic-list')) {
                // Jika daftar topik sudah ada, toggle daftar tersebut
                existingList.style.display = existingList.style.display === 'block' ? 'none' : 'block';
            } else {
                // Buat daftar topik baru
                const list = document.createElement("ul");
                list.className = "topic-list";
                topics.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item.title;
                    li.onclick = () => listItemClicked(item.ppt);
                    list.appendChild(li);
                });

                // Menyisipkan daftar topik ke bawah tombol mata kuliah
                button.parentNode.insertBefore(list, button.nextSibling);
                list.style.display = "block"; // Tampilkan daftar topik
            }
        }

        function updatePPT(pptSrc) {
            const pptFrame = document.getElementById("pptFrame");
            pptFrame.src = pptSrc;
        }

        function listItemClicked(pptSrc) {
            updatePPT(pptSrc); // Update PPT ketika materi dipilih
        }

        // Handling sidebar resizing
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        sidebar.addEventListener('mousedown', function(e) {
            if (e.offsetX > sidebar.clientWidth - 10) {
                document.addEventListener('mousemove', resizeSidebar);
                document.addEventListener('mouseup', stopResize);
            }
        });

        function resizeSidebar(e) {
            sidebar.style.width = e.pageX + 'px';
            mainContent.style.flex = '1';
        }

        function stopResize() {
            document.removeEventListener('mousemove', resizeSidebar);
            document.removeEventListener('mouseup', stopResize);
        }

        updateButtons(); // Memperbarui tombol mata kuliah
        updatePPT(""); // Memperbarui PPT saat halaman pertama kali dimuat