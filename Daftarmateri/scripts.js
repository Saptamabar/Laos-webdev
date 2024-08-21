let semester = 1;

        // Data untuk setiap semester
        const semesterData = {
            1: {
                courses: {
                    "Algoritma dan Pemrogaman 1": [
                        {title: "Pengenalan Python", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Tipe Data dan Variabel", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Tipe Data Sequential", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Operasi Aritmatika", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Perkondisian", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Looping", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Function dan File Handling", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Data Handling", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Pandas", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Etika Profesi": [
                        {title: "Etika", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Profesi di Bidang IT", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Kode Etik Profesi", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Sertifikasi di Bidang IT", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Cyber Ethic", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Etika Bisnis", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "UU ITE", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Paten dan Hak Cipta", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "Cyber Crime", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"},
                        {title: "IT Forensic", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Matematika Dasar": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Prinsip Organisasi dan Manajemen": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Bahasa Inggris": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Dasar-dasar Sistem Informasi": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Interaksi Manusia dan Komputer": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Pendidikan Pancasila": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Pendidikan Agama Islam": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ]
                }
            },
            2: {
                courses: {
                    "Algoritma dan Pemrograman II": [
                        {title: "Rekursif", ppt: "https://docs.google.com/presentation/d/1HjGKJFi7fFdDomcp8XGNXNPcroaSE5bI/embed?start=false&loop=false&delayms=3000"},
                        {title: "Polindrom", ppt: "https://docs.google.com/presentation/d/1d97GWdyRKIZ4xCfz0A3JDbAMRNftdmkW/embed?start=false&loop=false&delayms=3000"},
                        {title: "Brute Force", ppt: "https://docs.google.com/presentation/d/1v5FCVIDso0KHFz_DcOdi5pQqT6Kd2oQf/embed?start=false&loop=false&delayms=3000"},
                        {title: "Searching", ppt: "https://docs.google.com/presentation/d/10oOrbVl0TcokZwtjq1t4ZH1nOpVxgQPO/embed?start=false&loop=false&delayms=3000"},
                        {title: "Sorting", ppt: "https://docs.google.com/presentation/d/115EHKNGxD1Bs5DkUb-kLhR-aEOhp5DIC/embed?start=false&loop=false&delayms=3000"},
                        {title: "Divide and Conquer", ppt: "https://docs.google.com/presentation/d/1Y5aOOxoz_LD8EBf_rnL6If5hzkv1MQuU_39c3Fk6H34/embed?start=false&loop=false&delayms=3000"},
                        {title: "Knapsack Problem", ppt: "https://docs.google.com/presentation/d/1W-Rw07Y5XyoWqlq-SkFToh0Z-6JaQGEQ/embed?start=false&loop=false&delayms=3000"},
                        {title: "Spanning Tree", ppt: "https://docs.google.com/presentation/d/1Hy9z0rD7Q7olIo_c_BsPBhl5p4kwPgsI/embed?start=false&loop=false&delayms=3000"},
                        {title: "BFS dan DFS", ppt: "https://docs.google.com/presentation/d/14Ptfn94dvttHnPZGLE86_r9RuVpV2yAy/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Pengantar Rekayasa Perangkat Lunak": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Jaringan Komputer": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Matematika Diskrit": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Sistem Basis Data": [
                        {title: "Konsep Database", ppt: "https://docs.google.com/presentation/d/e/2PACX-1vQjw4wzlLirya_AHUPWLbGPTxAdhIYQNV-vsUPYlhclzdVF5X7uiqCEVPq5W7Dis-GNQA-gzRKOq9t0/embed?start=false&loop=false&delayms=30000"},
                        {title: "Menyimpan data dalam struktur tabel", ppt: "https://docs.google.com/presentation/d/145DmQoS07GXylmnCd5rrc7LSl8pyCdIS/embed?start=false&loop=false&delayms=3000"},
                        {title: "Entity", ppt: "https://docs.google.com/presentation/d/e/2PACX-1vR4BnCfaULlcG6AFrrcHSjvQlVxeNr8-EgPqxl630oHy5sfKL8zCaRf9JnLAPF_RQ/embed?start=false&loop=false&delayms=3000"},
                        {title: "Relationship", ppt: ""},
                        {title: "ERD", ppt: ""},
                        {title: "ERD 2", ppt: "https://docs.google.com/presentation/d/1G-dB3KKOclbVZhcMV64qp79ONPPIussw/embed?start=false&loop=false&delayms=3000"},
                        {title: "Normalisasi", ppt: "https://docs.google.com/presentation/d/18GhXGyD7lDN5ssL9nc2WG9KAlwNfOtIx/embed?start=false&loop=false&delayms=3000"},
                        {title: "Pemetaan ERD ke Physical Design dan ke Database", ppt: ""},
                        {title: "DDL", ppt: ""},
                        {title: "Serba Serbi Database", ppt: ""},
                        {title: "Serba Serbi Database 2", ppt: ""},
                        {title: "Select", ppt: ""},
                        {title: "Where", ppt: ""},
                        {title: "Join", ppt: ""},
                        {title: "Fungsi Aggregat", ppt:""},
                        {title: "Join 2", ppt: ""},
                        {title: "Group By", ppt: ""},
                        {title: "Group By 2", ppt: ""}
                    ],
                    "Bahasa Indonesia": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Arsitektur Komputer": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Teori Graf": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ],
                    "Manajemen dan Kewirausahaan": [
                        {title: "Coming soon", ppt: "https://docs.google.com/presentation/d/1vPtLx4pSW78Sns6iB3tLSuMbZ3Jl0GcsCaF2LwByy1w/embed?start=false&loop=false&delayms=3000"}
                    ]
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
            },
            4: {
                courses: {
                    "Belum dimasukin": [],
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