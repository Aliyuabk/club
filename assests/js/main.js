        // WhatsApp Group Links
        const whatsappLinks = {
            'AI Club': 'https://chat.whatsapp.com/Kor5wGXzbs6C5RIHdCrXoH',
            'Programming Club': 'https://chat.whatsapp.com/EfSyytRLlq735BM7D8dWEE',
            'Web3 & Blockchain Club': 'https://chat.whatsapp.com/KQFWPxrYFkQ7yeHETb4bLU',
            'Graphics Design Club': 'https://chat.whatsapp.com/GMxKUftOKfk80flhLtZ8VY',
            'Cyber Security Club': 'https://chat.whatsapp.com/CZgn3xmBZtYKPnLROlx2mc'
        };

        let currentWhatsAppLink = '';
        
        // Database Configuration
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxe-RXj1DKtLOlQ2wCWgBMm2d48Fr9PNuAZTdbLTVfJQuKF43cT8zq1ake7fGiY_7swWQ/exec';
        const ADMIN_PASSWORD = 'boss';
        let allData = [];

        // Program and Club Data
        const modalData = {
            'cs': {
                title: 'Computer Science',
                subtitle: 'B.Tech. Computer Science - 5 Years',
                icon: '💻',
                color: 'linear-gradient(135deg, #006633 0%, #004d26 100%)',
                content: `
                    <div class="info-section">
                        <h3>📚 Program Overview</h3>
                        <p>The Computer Science program at ATBU provides comprehensive training in computing fundamentals, software development, and system architecture.</p>
                    </div>
                    <div class="info-section">
                        <h3>🎯 Core Courses</h3>
                        <ul>
                            <li>Data Structures and Algorithms</li>
                            <li>Object-Oriented Programming</li>
                            <li>Database Management Systems</li>
                            <li>Computer Networks & Security</li>
                            <li>Software Engineering</li>
                            <li>Operating Systems</li>
                            <li>Web and Mobile Development</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>💼 Career Opportunities</h3>
                        <p>Software Developer, Systems Analyst, Database Administrator, Network Architect, IT Consultant.</p>
                    </div>
                `
            },
            'ai': {
                title: 'Artificial Intelligence',
                subtitle: 'B.Tech. AI & Machine Learning - 5 Years',
                icon: '🤖',
                color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                content: `
                    <div class="info-section">
                        <h3>📚 Program Overview</h3>
                        <p>Nigeria's premier AI degree focusing on machine learning, deep learning, neural networks, and intelligent systems.</p>
                    </div>
                    <div class="info-section">
                        <h3>🎯 Core Courses</h3>
                        <ul>
                            <li>Machine Learning & Pattern Recognition</li>
                            <li>Deep Learning and Neural Networks</li>
                            <li>Natural Language Processing</li>
                            <li>Computer Vision</li>
                            <li>Robotics and Automation</li>
                            <li>Data Mining and Big Data</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>🛠️ Lab Facilities</h3>
                        <p>NVIDIA GPU Computing Lab, Robotics and IoT Lab, Data Science Research Center, AI Innovation Hub.</p>
                    </div>
                `
            },
            'cyber': {
                title: 'Cyber Security',
                subtitle: 'B.Tech. Cyber Security - 5 Years',
                icon: '🔒',
                color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                content: `
                    <div class="info-section">
                        <h3>📚 Program Overview</h3>
                        <p>Hands-on training in ethical hacking, digital forensics, and information assurance for Nigeria's growing cybersecurity needs.</p>
                    </div>
                    <div class="info-section">
                        <h3>🎯 Core Courses</h3>
                        <ul>
                            <li>Network Security & Defense</li>
                            <li>Ethical Hacking and Penetration Testing</li>
                            <li>Digital Forensics</li>
                            <li>Cryptography</li>
                            <li>Secure Software Development</li>
                            <li>Cyber Threat Intelligence</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>🏆 Certifications</h3>
                        <p>CompTIA Security+, CEH, CISSP, Cisco CyberOps preparation included.</p>
                    </div>
                `
            },
            'se': {
                title: 'Software Engineering',
                subtitle: 'B.Tech. Software Engineering - 5 Years',
                icon: '⚙️',
                color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                content: `
                    <div class="info-section">
                        <h3>📚 Program Overview</h3>
                        <p>Comprehensive software engineering education covering design, development, testing, and project management methodologies.</p>
                    </div>
                    <div class="info-section">
                        <h3>🎯 Core Courses</h3>
                        <ul>
                            <li>Software Design and Architecture</li>
                            <li>Agile and DevOps Practices</li>
                            <li>Software Quality Assurance</li>
                            <li>Requirements Engineering</li>
                            <li>Software Project Management</li>
                            <li>Design Patterns</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>💼 Career Paths</h3>
                        <p>Software Engineer, DevOps Engineer, QA Engineer, Technical Lead, Scrum Master.</p>
                    </div>
                `
            },
            'it': {
                title: 'Information Technology',
                subtitle: 'B.Tech. Information Technology - 5 Years',
                icon: '🌐',
                color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                content: `
                    <div class="info-section">
                        <h3>📚 Program Overview</h3>
                        <p>Practical technology implementation, infrastructure management, and enterprise systems with 6-month industrial training.</p>
                    </div>
                    <div class="info-section">
                        <h3>🎯 Core Courses</h3>
                        <ul>
                            <li>IT Infrastructure Management</li>
                            <li>Cloud Computing (AWS, Azure)</li>
                            <li>Database Administration</li>
                            <li>System Analysis and Design</li>
                            <li>Enterprise Resource Planning</li>
                            <li>IT Service Management</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>🎓 Industrial Training</h3>
                        <p>6-month IT at Andela, Interswitch, SystemSpecs, and government agencies.</p>
                    </div>
                `
            },
            'is': {
                title: 'Information Systems',
                subtitle: 'B.Tech. Information Systems - 5 Years',
                icon: '📊',
                color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                content: `
                    <div class="info-section">
                        <h3>📚 Program Overview</h3>
                        <p>Bridge business and technology. Learn to design, implement, and manage systems that drive organizational success.</p>
                    </div>
                    <div class="info-section">
                        <h3>🎯 Core Courses</h3>
                        <ul>
                            <li>Business Intelligence and Analytics</li>
                            <li>Enterprise Systems (SAP, Oracle)</li>
                            <li>Database Systems for Business</li>
                            <li>E-Commerce and Digital Business</li>
                            <li>IT Strategy and Governance</li>
                            <li>Business Process Management</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>💼 Career Opportunities</h3>
                        <p>Business Analyst, Systems Analyst, Data Analyst, ERP Consultant, Digital Transformation Specialist.</p>
                    </div>
                `
            },
            'club-ai': {
                title: 'AI & Robotics Club',
                subtitle: 'ATBU Tech Community',
                icon: '🤖',
                color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                content: `
                    <div class="info-section">
                        <h3>🎯 About the Club</h3>
                        <p>ATBU's premier community for AI, machine learning, and robotics enthusiasts. Bridge academic learning with practical application.</p>
                    </div>
                    <div class="info-section">
                        <h3>🚀 Activities</h3>
                        <ul>
                            <li>Weekly ML Study Groups</li>
                            <li>Robotics Workshops (Arduino, Raspberry Pi)</li>
                            <li>Kaggle Competition Teams</li>
                            <li>Research Paper Discussions</li>
                            <li>Industry Expert Sessions</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>🏆 Achievements</h3>
                        <p>1st Place NITDA AI Hackathon 2023, Best Robotics Project National Engineering Conference, 3 Published Research Papers.</p>
                    </div>
                `
            },
            'club-programming': {
                title: 'Programming Club',
                subtitle: 'Code. Create. Innovate.',
                icon: '💻',
                color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                content: `
                    <div class="info-section">
                        <h3>🎯 About the Club</h3>
                        <p>The largest tech community at ATBU. From beginners to competitive programmers, everyone has a place here.</p>
                    </div>
                    <div class="info-section">
                        <h3>💻 What We Do</h3>
                        <ul>
                            <li>Daily Coding Challenges</li>
                            <li>Algorithm and Data Structures Training</li>
                            <li>Web and Mobile Development Projects</li>
                            <li>Open Source Contributions</li>
                            <li>FAANG Interview Preparation</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>🛠️ Tech Stacks</h3>
                        <p>Python, JavaScript, Java, C++, Go, Rust, React, Node.js, Flutter.</p>
                    </div>
                `
            },
            'club-web3': {
                title: 'Web3 & Blockchain Club',
                subtitle: 'Building the Decentralized Future',
                icon: '🌐',
                color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                content: `
                    <div class="info-section">
                        <h3>🎯 About the Club</h3>
                        <p>Explore the future of the internet with blockchain, smart contracts, and decentralized applications.</p>
                    </div>
                    <div class="info-section">
                        <h3>⛓️ Focus Areas</h3>
                        <ul>
                            <li>Ethereum and Solidity Development</li>
                            <li>Smart Contract Security</li>
                            <li>DeFi Protocols</li>
                            <li>NFT Development</li>
                            <li>Blockchain Architecture</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>🚀 Projects</h3>
                        <p>ATBU Campus Token, Decentralized Voting System, NFT Marketplace, Supply Chain DApp.</p>
                    </div>
                `
            },
            'club-graphics': {
                title: 'Graphics & Design Club',
                subtitle: 'Creativity Meets Technology',
                icon: '🎨',
                color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                content: `
                    <div class="info-section">
                        <h3>🎯 About the Club</h3>
                        <p>Where art and technology converge. Focus on digital creativity, UI/UX design, and visual communication.</p>
                    </div>
                    <div class="info-section">
                        <h3>🎨 Activities</h3>
                        <ul>
                            <li>UI/UX Design Workshops</li>
                            <li>3D Modeling and Animation</li>
                            <li>Brand Identity Design</li>
                            <li>Motion Graphics</li>
                            <li>Portfolio Reviews</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>🖥️ Software Access</h3>
                        <p>Adobe Creative Suite, Figma Pro, Blender, Cinema 4D through educational licenses.</p>
                    </div>
                `
            },
            'club-cyber': {
                title: 'Cyber Security Club',
                subtitle: 'Defending the Digital Frontier',
                icon: '🔒',
                color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                content: `
                    <div class="info-section">
                        <h3>🎯 About the Club</h3>
                        <p>ATBU's elite security community. Training ethical hackers and security researchers.</p>
                    </div>
                    <div class="info-section">
                        <h3>🛡️ Training Programs</h3>
                        <ul>
                            <li>Penetration Testing Labs</li>
                            <li>Capture The Flag (CTF) Competitions</li>
                            <li>Digital Forensics Workshops</li>
                            <li>Malware Analysis</li>
                            <li>Security Cert Prep</li>
                        </ul>
                    </div>
                    <div class="info-section">
                        <h3>🏆 Achievements</h3>
                        <p>1st Place CyberChain Africa CTF 2023, Top 10 National Cybersecurity Challenge.</p>
                    </div>
                `
            }
        };

        // Modal Functions
        function openModal(id) {
            const data = modalData[id];
            if (!data) return;

            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = `
                <div class="modal-header" style="background: ${data.color}">
                    <button class="close-modal" onclick="closeModal()">&times;</button>
                    <div class="icon">${data.icon}</div>
                    <h2>${data.title}</h2>
                    <p>${data.subtitle}</p>
                </div>
                <div class="modal-body">
                    ${data.content}
                </div>
            `;

            document.getElementById('modalOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(event) {
            if (event && event.target !== document.getElementById('modalOverlay')) return;
            document.getElementById('modalOverlay').classList.remove('active');
            document.body.style.overflow = '';
        }

        // Check for duplicates function
        function checkDuplicate(regNumber, email, phone) {
            const existing = JSON.parse(localStorage.getItem('atbuRegistrations') || '[]');
            
            const duplicate = existing.find(record => 
                record.regNumber.toLowerCase() === regNumber.toLowerCase() ||
                record.email.toLowerCase() === email.toLowerCase() ||
                record.phone === phone
            );
            
            if (duplicate) {
                let field = '';
                if (duplicate.regNumber.toLowerCase() === regNumber.toLowerCase()) field = 'Registration Number';
                else if (duplicate.email.toLowerCase() === email.toLowerCase()) field = 'Email';
                else if (duplicate.phone === phone) field = 'Phone Number';
                
                return {
                    isDuplicate: true,
                    field: field,
                    existingData: duplicate
                };
            }
            
            return { isDuplicate: false };
        }

        // Form Submission
        document.getElementById('registrationForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const messageDiv = document.getElementById('formMessage');
            const duplicateWarning             = document.getElementById('duplicateWarning');
            
            // Reset messages
            messageDiv.className = 'message';
            messageDiv.style.display = 'none';
            duplicateWarning.classList.remove('active');

            const formData = {
                timestamp: new Date().toLocaleString(),
                firstName: document.getElementById('firstName').value.trim(),
                lastName: document.getElementById('lastName').value.trim(),
                fullName: document.getElementById('firstName').value.trim() + ' ' + document.getElementById('lastName').value.trim(),
                regNumber: document.getElementById('regNumber').value.trim(),
                email: document.getElementById('email').value.trim().toLowerCase(),
                phone: document.getElementById('phone').value.trim(),
                level: document.getElementById('level').value,
                program: document.getElementById('program').value,
                club: document.getElementById('club').value
            };

            // Check for duplicates
            const duplicateCheck = checkDuplicate(formData.regNumber, formData.email, formData.phone);
            
            if (duplicateCheck.isDuplicate) {
                duplicateWarning.classList.add('active');
                document.getElementById('duplicateText').innerHTML = 
                    `<strong>${duplicateCheck.field}</strong> is already registered!<br>
                    <small>Name: ${duplicateCheck.existingData.fullName}<br>
                    Club: ${duplicateCheck.existingData.club}<br>
                    Registered on: ${duplicateCheck.existingData.timestamp}</small>`;
                return;
            }

            submitBtn.disabled = true;
            submitBtn.classList.add('loading');

            try {
                // Send to Google Sheets
                await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'submit', data: formData })
                });

                // Save to localStorage
                const registrations = JSON.parse(localStorage.getItem('atbuRegistrations') || '[]');
                registrations.push(formData);
                localStorage.setItem('atbuRegistrations', JSON.stringify(registrations));

                // Update stats
                updateStats();
                
                // Reset form
                this.reset();
                
                // Show WhatsApp popup
                showWhatsAppPopup(formData.club);

            } catch (error) {
                console.error('Error:', error);
                showMessage('⚠️ Network error. Data saved locally.', 'error');
                saveToLocal(formData);
                showWhatsAppPopup(formData.club);
            } finally {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            }
        });

        function showMessage(text, type) {
            const msg = document.getElementById('formMessage');
            msg.textContent = text;
            msg.className = `message ${type}`;
        }

        function saveToLocal(data) {
            const existing = JSON.parse(localStorage.getItem('atbuRegistrations') || '[]');
            existing.push(data);
            localStorage.setItem('atbuRegistrations', JSON.stringify(existing));
            updateStats();
        }

        // WhatsApp Popup Functions - FIXED
        function showWhatsAppPopup(clubName) {
            const popup = document.getElementById('whatsappPopup');
            const text = document.getElementById('whatsappText');
            
            currentWhatsAppLink = whatsappLinks[clubName];
            
            text.innerHTML = `You've been assigned to the <strong>${clubName}</strong>. Click below to join the group and connect with fellow members.`;
            
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function joinWhatsApp() {
            if (currentWhatsAppLink) {
                // Open in new tab
                window.open(currentWhatsAppLink, '_blank');
                closeWhatsApp();
                showMessage('✅ Registration successful! Welcome to ATBU Faculty of Computing.', 'success');
            }
        }

        function closeWhatsApp() {
            document.getElementById('whatsappPopup').classList.remove('active');
            document.body.style.overflow = '';
            showMessage('✅ Registration successful! You can join the WhatsApp group later from your email.', 'success');
        }

        // Admin Functions
        function showAdmin() {
            document.getElementById('admin').classList.add('active');
            document.getElementById('admin').scrollIntoView({ behavior: 'smooth' });
        }

        function loginAdmin() {
            const password = document.getElementById('adminPassword').value;
            if (password === ADMIN_PASSWORD) {
                document.getElementById('adminLogin').style.display = 'none';
                document.getElementById('adminDashboard').classList.add('active');
                loadAdminData();
            } else {
                alert('Incorrect password!');
            }
        }

        function logoutAdmin() {
            document.getElementById('adminLogin').style.display = 'block';
            document.getElementById('adminDashboard').classList.remove('active');
            document.getElementById('adminPassword').value = '';
        }

        async function loadAdminData() {
            // First try to get from localStorage
            let localData = JSON.parse(localStorage.getItem('atbuRegistrations') || '[]');
            
            // Then try to fetch from Google Sheets
            try {
                const response = await fetch(SCRIPT_URL + '?action=getData', {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    const sheetData = await response.json();
                    // Merge local and sheet data, removing duplicates
                    const merged = [...localData];
                    
                    sheetData.forEach(sheetRow => {
                        const exists = merged.some(local => 
                            local.regNumber === sheetRow.regNumber || 
                            local.email === sheetRow.email
                        );
                        if (!exists && sheetRow.regNumber) {
                            merged.push({
                                timestamp: sheetRow.Timestamp || sheetRow.timestamp || '-',
                                firstName: sheetRow.firstName || sheetRow['First Name'] || '-',
                                lastName: sheetRow.lastName || sheetRow['Last Name'] || '-',
                                fullName: sheetRow.fullName || sheetRow['Full Name'] || 
                                          (sheetRow.firstName + ' ' + sheetRow.lastName) || '-',
                                regNumber: sheetRow.regNumber || sheetRow['Registration Number'] || '-',
                                email: sheetRow.email || sheetRow['Email'] || '-',
                                phone: sheetRow.phone || sheetRow['Phone'] || '-',
                                level: sheetRow.level || sheetRow['Level'] || '-',
                                program: sheetRow.program || sheetRow['Program'] || '-',
                                club: sheetRow.club || sheetRow['Club'] || '-'
                            });
                        }
                    });
                    
                    allData = merged;
                } else {
                    allData = localData;
                }
            } catch (e) {
                console.log('Using local data only:', e);
                allData = localData;
            }
            
            // Ensure all data has proper fields
            allData = allData.map(row => ({
                timestamp: row.timestamp || row.Timestamp || '-',
                firstName: row.firstName || row['First Name'] || '-',
                lastName: row.lastName || row['Last Name'] || '-',
                fullName: row.fullName || row['Full Name'] || 
                          (row.firstName && row.lastName ? row.firstName + ' ' + row.lastName : '-') || '-',
                regNumber: row.regNumber || row['Registration Number'] || '-',
                email: row.email || row['Email'] || '-',
                phone: row.phone || row['Phone'] || '-',
                level: row.level || row['Level'] || '-',
                program: row.program || row['Program'] || '-',
                club: row.club || row['Club'] || '-'
            }));
            
            updateAdminStats();
            renderTable(allData);
        }

        function updateAdminStats() {
            const stats = {
                total: allData.length,
                ai: allData.filter(d => d.club && d.club.includes('AI')).length,
                programming: allData.filter(d => d.club && d.club.includes('Programming')).length,
                web3: allData.filter(d => d.club && d.club.includes('Web3')).length,
                graphics: allData.filter(d => d.club && d.club.includes('Graphics')).length,
                cyber: allData.filter(d => d.club && d.club.includes('Cyber')).length
            };

            const statsContainer = document.getElementById('adminStats');
            statsContainer.innerHTML = `
                <div class="stat-card">
                    <h4>${stats.total}</h4>
                    <p>Total Students</p>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                    <h4>${stats.ai}</h4>
                    <p>AI Club</p>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
                    <h4>${stats.programming}</h4>
                    <p>Programming</p>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
                    <h4>${stats.web3}</h4>
                    <p>Web3</p>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%)">
                    <h4>${stats.graphics}</h4>
                    <p>Graphics</p>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%)">
                    <h4>${stats.cyber}</h4>
                    <p>Cyber Sec</p>
                </div>
            `;
        }

        function renderTable(data) {
            const tbody = document.getElementById('tableBody');
            tbody.innerHTML = '';
            
            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 30px;">No data available</td></tr>';
                return;
            }
            
            data.forEach(row => {
                const tr = document.createElement('tr');
                const clubClass = getClubBadgeClass(row.club);
                
                // Safe data access with fallbacks
                const timestamp = row.timestamp || '-';
                const fullName = row.fullName || 
                                (row.firstName && row.lastName ? row.firstName + ' ' + row.lastName : '-') || 
                                '-';
                const regNumber = row.regNumber || '-';
                const email = row.email || '-';
                const phone = row.phone || '-';
                const level = row.level || '-';
                const program = row.program || '-';
                const club = row.club || '-';
                
                tr.innerHTML = `
                    <td>${timestamp}</td>
                    <td>${fullName}</td>
                    <td>${regNumber}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${level}</td>
                    <td>${program}</td>
                    <td><span class="club-badge ${clubClass}">${club}</span></td>
                `;
                tbody.appendChild(tr);
            });
        }

        function getClubBadgeClass(club) {
            if (!club) return '';
            if (club.includes('AI')) return 'badge-ai';
            if (club.includes('Programming')) return 'badge-programming';
            if (club.includes('Web3')) return 'badge-web3';
            if (club.includes('Graphics')) return 'badge-graphics';
            if (club.includes('Cyber')) return 'badge-cyber';
            return '';
        }

        function filterData() {
            const clubFilter = document.getElementById('filterClub').value;
            const programFilter = document.getElementById('filterProgram').value;
            
            let filtered = allData;
            
            if (clubFilter !== 'all') {
                filtered = filtered.filter(d => d.club && d.club.includes(clubFilter.replace(' Club', '')));
            }
            if (programFilter !== 'all') {
                filtered = filtered.filter(d => d.program && d.program.includes(programFilter));
            }
            
            renderTable(filtered);
        }

        function downloadCSV() {
            const clubFilter = document.getElementById('filterClub').value;
            const programFilter = document.getElementById('filterProgram').value;
            
            let filtered = allData;
            let filename = 'atbu_registrations';
            
            if (clubFilter !== 'all') {
                filtered = filtered.filter(d => d.club && d.club.includes(clubFilter.replace(' Club', '')));
                filename += `_${clubFilter.replace(/\s+/g, '_')}`;
            }
            if (programFilter !== 'all') {
                filtered = filtered.filter(d => d.program && d.program.includes(programFilter));
                filename += `_${programFilter.replace(/\s+/g, '_')}`;
            }
            
            filename += `_${new Date().toISOString().split('T')[0]}.csv`;
            
            // CSV Headers
            const headers = ['Timestamp', 'First Name', 'Last Name', 'Full Name', 'Registration Number', 'Email', 'Phone', 'Level', 'Program', 'Club'];
            
            // CSV Rows with safe data access
            const rows = filtered.map(row => {
                const firstName = row.firstName || row['First Name'] || '';
                const lastName = row.lastName || row['Last Name'] || '';
                const fullName = row.fullName || row['Full Name'] || (firstName + ' ' + lastName) || '';
                
                return [
                    row.timestamp || row.Timestamp || '',
                    firstName,
                    lastName,
                    fullName,
                    row.regNumber || row['Registration Number'] || '',
                    row.email || row['Email'] || '',
                    row.phone || row['Phone'] || '',
                    row.level || row['Level'] || '',
                    row.program || row['Program'] || '',
                    row.club || row['Club'] || ''
                ];
            });
            
            // Combine
            const csvContent = [
                headers.join(','),
                ...rows.map(row => row.map(cell => `"${(cell || '').toString().replace(/"/g, '""')}"`).join(','))
            ].join('\n');
            
            // Download
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Public Stats Update
        function updateStats() {
            const regs = JSON.parse(localStorage.getItem('atbuRegistrations') || '[]');
            
            // Update main stats
            document.getElementById('statTotal').textContent = regs.length + 1247;
            
            // Update detailed stats with safe checking
            document.getElementById('statCS').textContent = regs.filter(r => r.program && r.program.includes('Computer Science')).length + 342;
            document.getElementById('statAI').textContent = regs.filter(r => r.program && r.program.includes('Artificial Intelligence')).length + 156;
            document.getElementById('statCyber').textContent = regs.filter(r => r.program && r.program.includes('Cyber Security')).length + 89;
            document.getElementById('statProgramming').textContent = regs.filter(r => r.club && r.club.includes('Programming')).length + 150;
            document.getElementById('statAIC').textContent = regs.filter(r => r.club && r.club.includes('AI')).length + 85;
        }

        // Mobile Menu
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    document.getElementById('navLinks').classList.remove('active');
                }
            });
        });

        // Initialize
        updateStats();

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
            } else {
                navbar.style.padding = '15px 0';
            }
        });

        // Close modals on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
                closeWhatsApp();
            }
        });

        (function() {
            // Preloader Configuration
            const PRELOADER_CONFIG = {
                minDisplayTime: 3000,    // Minimum time to show preloader (3 seconds)
                fadeOutTime: 500,        // Fade out animation time (0.5 seconds)
                incrementSpeed: 30,     // Speed of percentage counter
                targetPercent: 100       // Target percentage
            };

            let currentPercent = 0;
            const preloader = document.getElementById('atbu-preloader');
            const percentDisplay = document.getElementById('loadingPercent');
            const startTime = Date.now();

            // Update percentage counter
            function updatePercent() {
                if (currentPercent < PRELOADER_CONFIG.targetPercent) {
                    currentPercent++;
                    percentDisplay.textContent = currentPercent + '%';
                    
                    // Variable speed - slower at start and end, faster in middle
                    let delay = PRELOADER_CONFIG.incrementSpeed;
                    if (currentPercent < 20 || currentPercent > 80) {
                        delay = delay * 2;
                    }
                    
                    setTimeout(updatePercent, delay);
                }
            }

            // Hide preloader function
            function hidePreloader() {
                const elapsed = Date.now() - startTime;
                const remaining = PRELOADER_CONFIG.minDisplayTime - elapsed;

                if (remaining > 0) {
                    // Wait if minimum time not reached
                    setTimeout(hidePreloader, remaining);
                    return;
                }

                // Start fade out
                preloader.classList.add('hidden');
                
                // Remove from DOM after animation
                setTimeout(() => {
                    preloader.style.display = 'none';
                    document.body.style.overflow = ''; // Restore scrolling
                }, PRELOADER_CONFIG.fadeOutTime);
            }

            // Initialize
            document.addEventListener('DOMContentLoaded', function() {
                // Prevent scrolling while loading
                document.body.style.overflow = 'hidden';
                
                // Start percentage counter
                updatePercent();
                
                // Wait for everything to load
                if (document.readyState === 'complete') {
                    hidePreloader();
                } else {
                    window.addEventListener('load', hidePreloader);
                }
            });

            // Alternative: Manual hide function (call this if you want to hide programmatically)
            window.hideATBUPreloader = function() {
                hidePreloader();
            };

            // Alternative: Show preloader again (if needed)
            window.showATBUPreloader = function() {
                preloader.style.display = 'flex';
                setTimeout(() => {
                    preloader.classList.remove('hidden');
                    currentPercent = 0;
                    updatePercent();
                }, 10);
            };
        })();