// Love Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Apply configuration
    function applyConfig() {
        if (window.CONFIG) {
            // Update subtitle
            const subtitle = document.getElementById('subtitle');
            if (subtitle) {
                subtitle.textContent = `${CONFIG.partnerName}, ${CONFIG.messages.subtitle}`;
            }
            
            // Update partner name and description
            const partnerName = document.getElementById('partnerName');
            if (partnerName) {
                partnerName.textContent = `${CONFIG.partnerName} 💕`;
            }
            
            const partnerDescription = document.getElementById('partnerDescription');
            if (partnerDescription) {
                partnerDescription.textContent = CONFIG.characters.partner;
            }
            
            // Update your name and description
            const yourName = document.getElementById('yourName');
            if (yourName) {
                yourName.textContent = `${CONFIG.yourName} 💙`;
            }
            
            const yourDescription = document.getElementById('yourDescription');
            if (yourDescription) {
                yourDescription.textContent = CONFIG.characters.you;
            }
            
            // Update love note
            const loveNoteText = document.getElementById('loveNoteText');
            if (loveNoteText) {
                loveNoteText.textContent = `${CONFIG.partnerName}, ${CONFIG.messages.loveNote}`;
            }
            
            // Update memory descriptions
            const memoryLateNight = document.getElementById('memoryLateNight');
            if (memoryLateNight) {
                memoryLateNight.textContent = CONFIG.memories.lateNight;
            }
            
            const memoryFirstMeeting = document.getElementById('memoryFirstMeeting');
            if (memoryFirstMeeting) {
                memoryFirstMeeting.textContent = CONFIG.memories.firstMeeting;
            }
            
            const memoryCare = document.getElementById('memoryCare');
            if (memoryCare) {
                memoryCare.textContent = CONFIG.memories.care;
            }
            
            // Update special message
            const specialMessageTitle = document.getElementById('specialMessageTitle');
            if (specialMessageTitle) {
                specialMessageTitle.textContent = `To My Dearest ${CONFIG.partnerName}`;
            }
            
            const specialMessage1 = document.getElementById('specialMessage1');
            if (specialMessage1) {
                specialMessage1.textContent = CONFIG.messages.specialMessage;
            }
            
            const specialMessage2 = document.getElementById('specialMessage2');
            if (specialMessage2) {
                specialMessage2.textContent = CONFIG.messages.specialMessage2;
            }
            
            const signature = document.getElementById('signature');
            if (signature) {
                signature.textContent = CONFIG.messages.signature;
            }
        }
    }
    
    // Apply config on load
    applyConfig();
    
    // Create floating hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const heartSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '💌', '💋', '❤️'];
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 6 + 's';
            heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
            heartsContainer.appendChild(heart);
        }
    }

    // Music Control
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🎵';
            isPlaying = false;
        } else {
            bgMusic.play().then(() => {
                musicToggle.textContent = '🔊';
                isPlaying = true;
            }).catch(() => {
                musicToggle.textContent = '❌';
                console.log('Music could not be played');
            });
        }
    });

    // Love Note Toggle
    const loveButton = document.getElementById('loveButton');
    const loveNote = document.getElementById('loveNote');

    loveButton.addEventListener('click', function() {
        loveNote.classList.toggle('visible');
        if (loveNote.classList.contains('visible')) {
            loveButton.textContent = 'Ocultar nota de amor 💝';
            createHeartBurst();
        } else {
            loveButton.textContent = 'Click for a surprise 💝';
        }
    });

    // Create heart burst effect
    function createHeartBurst() {
        const heartsContainer = document.querySelector('.hearts-container');
        const burstHearts = ['💕', '💖', '💗', '💘', '💝', '💞'];
        
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = burstHearts[Math.floor(Math.random() * burstHearts.length)];
            heart.style.left = (Math.random() * 80 + 10) + '%';
            heart.style.top = (Math.random() * 80 + 10) + '%';
            heart.style.animation = 'float 2s ease-out forwards';
            heart.style.fontSize = '25px';
            heart.style.zIndex = '1000';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }
    }

    // Kiss Counter
    let kissCount = 0;
    const kissButton = document.getElementById('kissButton');
    const kissCountDisplay = document.getElementById('kissCount');

    kissButton.addEventListener('click', function() {
        kissCount++;
        kissCountDisplay.textContent = kissCount;
        createKissEffect();
        
        // Add special messages for certain kiss counts
        if (window.CONFIG && window.CONFIG.kissMessages) {
            if (kissCount === 10 && window.CONFIG.kissMessages[10]) {
                showSpecialMessage(window.CONFIG.kissMessages[10]);
            } else if (kissCount === 50 && window.CONFIG.kissMessages[50]) {
                showSpecialMessage(window.CONFIG.kissMessages[50]);
            } else if (kissCount === 100 && window.CONFIG.kissMessages[100]) {
                showSpecialMessage(window.CONFIG.kissMessages[100]);
            }
        }
    });

    // Create kiss effect
    function createKissEffect() {
        const kissEffects = document.querySelector('.kiss-effects');
        const kissSymbols = ['💋', '💕', '💖', '💗', '😘'];
        
        for (let i = 0; i < 5; i++) {
            const kiss = document.createElement('div');
            kiss.textContent = kissSymbols[Math.floor(Math.random() * kissSymbols.length)];
            kiss.style.position = 'absolute';
            kiss.style.left = Math.random() * 100 + '%';
            kiss.style.top = Math.random() * 100 + '%';
            kiss.style.fontSize = '30px';
            kiss.style.animation = 'float 2s ease-out forwards';
            kiss.style.pointerEvents = 'none';
            kiss.style.zIndex = '1000';
            kissEffects.appendChild(kiss);
            
            setTimeout(() => {
                kiss.remove();
            }, 2000);
        }
    }

    // Show special message
    function showSpecialMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.background = 'linear-gradient(135deg, #FF69B4, #FF1493)';
        messageDiv.style.color = 'white';
        messageDiv.style.padding = '1rem 2rem';
        messageDiv.style.borderRadius = '2rem';
        messageDiv.style.fontFamily = 'Great Vibes, cursive';
        messageDiv.style.fontSize = '1.5rem';
        messageDiv.style.fontWeight = '600';
        messageDiv.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.4)';
        messageDiv.style.zIndex = '10000';
        messageDiv.style.animation = 'glow 2s ease-in-out infinite alternate';
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    // Memory Gallery Interactions
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const memoryType = this.dataset.memory;
            createMemoryEffect(memoryType);
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Create memory effects
    function createMemoryEffect(type) {
        if (window.CONFIG && window.CONFIG.memoryMessages) {
            switch(type) {
                case 'late-night':
                    createStars();
                    showMemoryMessage(window.CONFIG.memoryMessages.lateNight || "Those late nights talking with you are my favorite memories 🌙✨");
                    break;
                case 'first-meeting':
                    createSparkles();
                    showMemoryMessage(window.CONFIG.memoryMessages.firstMeeting || "I know the day we meet will be magical and unforgettable 💫💕");
                    break;
                case 'care':
                    createHeartRain();
                    showMemoryMessage(window.CONFIG.memoryMessages.care || "Your caring nature, sweet voice, and adorable cuteness melt my heart 💕😍");
                    break;
            }
        }
    }

    // Create starry night effect
    function createStars() {
        const heartsContainer = document.querySelector('.hearts-container');
        
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.textContent = '✨';
            star.style.position = 'absolute';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.fontSize = '20px';
            star.style.animation = 'float 3s ease-in-out infinite';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.pointerEvents = 'none';
            heartsContainer.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 5000);
        }
    }

    // Create sparkle effect
    function createSparkles() {
        const heartsContainer = document.querySelector('.hearts-container');
        const sparkles = ['✨', '⭐', '💫', '🌟'];
        
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = '25px';
            sparkle.style.animation = 'float 2s ease-out forwards';
            sparkle.style.pointerEvents = 'none';
            heartsContainer.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }
    }

    // Create heart rain effect
    function createHeartRain() {
        const heartsContainer = document.querySelector('.hearts-container');
        const hearts = ['💕', '💖', '💗', '💘', '💝', '💞'];
        
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'absolute';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '-50px';
                heart.style.fontSize = '20px';
                heart.style.animation = 'rainDown 3s linear forwards';
                heart.style.pointerEvents = 'none';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 100);
        }
    }

    // Add rain animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainDown {
            to {
                transform: translateY(calc(100vh + 50px));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Show memory message
    function showMemoryMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '20%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.background = 'rgba(255, 255, 255, 0.95)';
        messageDiv.style.color = '#FF1493';
        messageDiv.style.padding = '1.5rem 2rem';
        messageDiv.style.borderRadius = '1rem';
        messageDiv.style.fontFamily = 'Cormorant Garamond, serif';
        messageDiv.style.fontSize = '1.3rem';
        messageDiv.style.fontWeight = '600';
        messageDiv.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.3)';
        messageDiv.style.zIndex = '10000';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.maxWidth = '90%';
        messageDiv.style.backdropFilter = 'blur(10px)';
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translate(-50%, -50%) scale(0.8)';
            setTimeout(() => {
                messageDiv.remove();
            }, 500);
        }, 3000);
    }

    // Character interactions
    const partnerCharacter = document.getElementById('partner');
    const youCharacter = document.getElementById('you');

    if (partnerCharacter) {
        partnerCharacter.addEventListener('click', function() {
            const message = window.CONFIG && window.CONFIG.characterMessages && window.CONFIG.characterMessages.partner 
                ? `${window.CONFIG.partnerName}, ${window.CONFIG.characterMessages.partner}`
                : "You're the most beautiful person in the world! 💕";
            showSpecialMessage(message);
            createHeartBurst();
        });
    }

    if (youCharacter) {
        youCharacter.addEventListener('click', function() {
            const message = window.CONFIG && window.CONFIG.characterMessages && window.CONFIG.characterMessages.you 
                ? window.CONFIG.characterMessages.you
                : "I'm so lucky to have you in my life! 💖";
            showSpecialMessage(message);
            createSparkles();
        });
    }

    // Initialize
    createHearts();
    
    // Add some initial animations
    setTimeout(() => {
        document.querySelector('.main-title').style.animation = 'glow 2s ease-in-out infinite alternate';
    }, 1000);

    // Auto-create some floating hearts periodically
    setInterval(() => {
        if (Math.random() > 0.7) {
            createHearts();
        }
    }, 10000);

    // Add smooth scrolling to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.scrollMarginTop = '2rem';
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Photo Slider Functionality
    const photoSlider = document.querySelector('.photo-slider');
    if (photoSlider) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.slider-prev');
        const nextBtn = document.querySelector('.slider-next');
        let currentSlide = 0;
        const totalSlides = slides.length;
        let autoPlayInterval;
        let isAutoPlaying = true;
        
        // Initialize slider
        function initSlider() {
            if (slides.length === 0) return;
            
            // Set first slide as active
            slides[0].classList.add('active');
            dots[0].classList.add('active');
            
            // Start auto-play
            startAutoPlay();
        }
        
        // Go to specific slide
        function goToSlide(index) {
            // Remove active class from current slide and dot
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            // Update current slide index
            currentSlide = index;
            
            // Handle wrapping
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            
            // Add active class to new slide and dot
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            // Reset auto-play timer
            if (isAutoPlaying) {
                resetAutoPlay();
            }
        }
        
        // Go to next slide
        function nextSlide() {
            goToSlide(currentSlide + 1);
        }
        
        // Go to previous slide
        function prevSlide() {
            goToSlide(currentSlide - 1);
        }
        
        // Start auto-play
        function startAutoPlay() {
            if (autoPlayInterval) return;
            
            autoPlayInterval = setInterval(() => {
                if (isAutoPlaying) {
                    nextSlide();
                }
            }, 4000); // Change slide every 4 seconds
        }
        
        // Reset auto-play timer
        function resetAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
            startAutoPlay();
        }
        
        // Pause auto-play
        function pauseAutoPlay() {
            isAutoPlaying = false;
        }
        
        // Resume auto-play
        function resumeAutoPlay() {
            isAutoPlaying = true;
        }
        
        // Event listeners for navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                prevSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                nextSlide();
            });
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                if (currentSlide !== index) {
                    goToSlide(index);
                }
            });
        });
        
        // Pause auto-play on hover
        photoSlider.addEventListener('mouseenter', pauseAutoPlay);
        photoSlider.addEventListener('mouseleave', resumeAutoPlay);
        
        // Touch/Swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        photoSlider.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
            pauseAutoPlay();
        }, { passive: true });
        
        photoSlider.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            resumeAutoPlay();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (isElementInViewport(photoSlider)) {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                }
            }
        });
        
        // Helper function to check if element is in viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Add keyboard navigation indicator
        photoSlider.setAttribute('tabindex', '0');
        photoSlider.setAttribute('role', 'region');
        photoSlider.setAttribute('aria-label', 'Photo Slider');
        
        // Initialize the slider
        initSlider();
        
        // Add animation to slides on load
        setTimeout(() => {
            slides.forEach((slide, index) => {
                slide.style.animationDelay = `${index * 0.1}s`;
            });
        }, 100);
    }

    // Romantic Puzzle Functionality
    const puzzleSection = document.querySelector('.puzzle-section');
    if (puzzleSection) {
        const puzzleBoard = document.getElementById('puzzleBoard');
        const startPuzzleBtn = document.getElementById('startPuzzle');
        const resetPuzzleBtn = document.getElementById('resetPuzzle');
        const puzzleTimeDisplay = document.getElementById('puzzleTime');
        const puzzleMovesDisplay = document.getElementById('puzzleMoves');
        const puzzleComplete = document.getElementById('puzzleComplete');
        const finalTimeSpan = document.getElementById('finalTime');
        const finalMovesSpan = document.getElementById('finalMoves');
        
        const puzzleImage = 'img/Nosotros.jpeg';
        const rows = 2;
        const cols = 3;
        let pieces = [];
        let emptyIndex = 5; // Bottom-right corner is empty (position 5)
        let moves = 0;
        let timerInterval = null;
        let seconds = 0;
        let isPuzzleActive = false;
        
        // Initialize puzzle
        function initPuzzle() {
            pieces = [];
            
            // Create ordered pieces: [0, 1, 2, 3, 4, 5(empty)]
            for (let i = 0; i < rows * cols - 1; i++) {
                pieces.push(i);
            }
            pieces.push(rows * cols - 1); // Add empty piece at end
            
            // Shuffle pieces with simple adjacent swaps (guarantees solvable)
            for (let i = 0; i < 20; i++) {
                const randomPos = Math.floor(Math.random() * rows * cols);
                if (isAdjacent(randomPos, emptyIndex)) {
                    // Swap in the pieces array
                    const emptyPosInPieces = pieces.indexOf(rows * cols - 1);
                    [pieces[randomPos], pieces[emptyPosInPieces]] = [pieces[emptyPosInPieces], pieces[randomPos]];
                    emptyIndex = randomPos;
                }
            }
            
            // Make sure it's not already solved
            if (checkWin()) {
                initPuzzle(); // reshuffle
                return;
            }
            
            // Render board
            renderPuzzle();
            
            // Reset counters
            moves = 0;
            seconds = 0;
            puzzleMovesDisplay.textContent = '0';
            puzzleTimeDisplay.textContent = '00:00';
            
            // Update button visibility
            startPuzzleBtn.style.display = 'none';
            resetPuzzleBtn.style.display = 'inline-block';
            
            // Start timer
            startTimer();
            isPuzzleActive = true;
        }
        
        // Render puzzle board
        function renderPuzzle() {
            puzzleBoard.innerHTML = '';
            
            const boardWidth = puzzleBoard.offsetWidth || 450;
            const boardHeight = puzzleBoard.offsetHeight || 300;
            const pieceWidth = boardWidth / cols;
            const pieceHeight = boardHeight / rows;
            
            pieces.forEach((pieceIndex, positionIndex) => {
                const piece = document.createElement('div');
                piece.className = 'puzzle-piece';
                piece.dataset.position = positionIndex;
                
                if (pieceIndex === rows * cols - 1) {
                    piece.classList.add('empty');
                } else {
                    const row = Math.floor(pieceIndex / cols);
                    const col = pieceIndex % cols;
                    
                    piece.style.backgroundImage = `url(${puzzleImage})`;
                    piece.style.backgroundSize = `${boardWidth}px ${boardHeight}px`;
                    piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;
                }
                
                piece.addEventListener('click', () => handlePieceClick(positionIndex));
                puzzleBoard.appendChild(piece);
            });
        }
        
        // Handle piece click
        function handlePieceClick(positionIndex) {
            if (!isPuzzleActive) return;
            
            const emptyPiece = pieces.indexOf(rows * cols - 1);
            
            if (isAdjacent(positionIndex, emptyPiece)) {
                // Swap pieces in the array
                [pieces[positionIndex], pieces[emptyPiece]] = [pieces[emptyPiece], pieces[positionIndex]];
                
                // Update empty index
                emptyIndex = positionIndex;
                
                // Increment moves
                moves++;
                puzzleMovesDisplay.textContent = moves;
                
                // Re-render
                renderPuzzle();
                
                // Check if solved
                if (checkWin()) {
                    handleWin();
                }
            }
        }
        
        // Check if two positions are adjacent
        function isAdjacent(index1, index2) {
            const row1 = Math.floor(index1 / cols);
            const col1 = index1 % cols;
            const row2 = Math.floor(index2 / cols);
            const col2 = index2 % cols;
            
            const rowDiff = Math.abs(row1 - row2);
            const colDiff = Math.abs(col1 - col2);
            
            return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
        }
        
        // Check if puzzle is solved
        function checkWin() {
            for (let i = 0; i < pieces.length; i++) {
                if (pieces[i] !== i) return false;
            }
            return true;
        }
        
        // Handle win
        function handleWin() {
            isPuzzleActive = false;
            clearInterval(timerInterval);
            
            // Show complete image
            puzzleBoard.innerHTML = `<img src="${puzzleImage}" alt="Complete Puzzle" style="width: 100%; height: 100%; object-fit: cover; border-radius: 1rem;">`;
            
            // Show celebration
            finalTimeSpan.textContent = puzzleTimeDisplay.textContent;
            finalMovesSpan.textContent = moves;
            
            setTimeout(() => {
                puzzleComplete.classList.add('show');
                createCelebrationEffects();
            }, 500);
            
            // Create celebration effects
            function createCelebrationEffects() {
                const celebrationSymbols = ['💕', '💖', '💗', '💘', '💝', '💞', '🎉', '✨', '❤️', '💑'];
                
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        const symbol = document.createElement('div');
                        symbol.textContent = celebrationSymbols[Math.floor(Math.random() * celebrationSymbols.length)];
                        symbol.style.position = 'fixed';
                        symbol.style.left = Math.random() * 100 + '%';
                        symbol.style.top = '-50px';
                        symbol.style.fontSize = (Math.random() * 20 + 20) + 'px';
                        symbol.style.animation = 'rainDown 3s linear forwards';
                        symbol.style.pointerEvents = 'none';
                        symbol.style.zIndex = '3000';
                        document.body.appendChild(symbol);
                        
                        setTimeout(() => {
                            symbol.remove();
                        }, 3000);
                    }, i * 100);
                }
            }
            
            // Close celebration
            puzzleComplete.addEventListener('click', function() {
                this.classList.remove('show');
            });
        }
        
        // Start timer
        function startTimer() {
            timerInterval = setInterval(() => {
                seconds++;
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                puzzleTimeDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            }, 1000);
        }
        
        // Event listeners
        startPuzzleBtn.addEventListener('click', initPuzzle);
        
        resetPuzzleBtn.addEventListener('click', function() {
            clearInterval(timerInterval);
            isPuzzleActive = false;
            initPuzzle();
        });
    }
});
