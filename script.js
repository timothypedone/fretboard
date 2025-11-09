document.addEventListener("DOMContentLoaded", function() {

    // --- REUSABLE SLIDER FUNCTION ---
    function createSlider(imageUrls, imageId, prevId, nextId) {
        
        // 1. Setup Variables for THIS specific slider
        const images = imageUrls;
        let currentImageIndex = 0;

        // 2. Get the HTML Elements for THIS specific slider
        const sliderImage = document.getElementById(imageId);
        const prevBtn = document.getElementById(prevId);
        const nextBtn = document.getElementById(nextId);

        // Fail-safe check
        if (!sliderImage || !prevBtn || !nextBtn) {
            console.error(`Slider creation failed: Could not find all elements for IDs: ${imageId}, ${prevId}, ${nextId}`);
            return;
        }

        // 3. Helper function
        function showImage(index) {
            sliderImage.src = images[index];
        }

        // 4. Next Button Listener
        nextBtn.addEventListener("click", function() {
            currentImageIndex++;
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0; // Loop back
            }
            showImage(currentImageIndex);
        });

        // 5. Previous Button Listener
        prevBtn.addEventListener("click", function() {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1; // Loop to last
            }
            showImage(currentImageIndex);
        });
        
        // 6. Initialize (Show the first image)
        showImage(currentImageIndex);
    }

    // --- SLIDER 1 (Use your original image paths) ---
    const slider1Images = [
        "./images/C Octave - C.png", 
        "./images/C Octave - A.png",
        "./images/C Octave - G.png", 
        "./images/C Octave - E.png",
        "./images/C Octave - D.png", 
        "./images/C Octave - C-high.png", 
        "./images/C Octave - A-high.png",
        "./images/C Octave - G-high.png",
        "./images/C Octave - E-high.png"
    ];
    // Call the function using the original IDs
    createSlider(slider1Images, "slider-image", "prev-btn", "next-btn");


    // --- SLIDER 2 (Define your new image paths and new IDs) ---
    const slider2Images = [
        "./images/C Scale - 5.png",
        "./images/C Scale - 3.png", 
        "./images/C Scale - 1 & 6.png", 
        "./images/C Scale - 4.png", 
        "./images/C Scale - 2.png"        
    ];
    // Call the function using the new, unique IDs
    createSlider(slider2Images, "slider-image-2", "prev-btn-2", "next-btn-2");

    // --- SLIDER 3 (Define your new image paths and new IDs) ---
    const slider3Images = [
        "./images/C 2 Down.png",
        "./images/C 2 Right.png", 
        "./images/C 3 Left.png", 
        "./images/C 3 Down.png", 
        "./images/C 3 Right.png",
        "./images/C 4 Left.png",
        "./images/C 4 Down.png",
        "./images/C 4 Right.png", 
        "./images/C 5 Left.png", 
        "./images/C 5 Down.png", 
        "./images/C 5 Right.png",
        "./images/C 6 Left.png", 
        "./images/C 6 Down.png", 
        "./images/C 6 Right.png"      
    ];
    // Call the function using the new, unique IDs
    createSlider(slider3Images, "slider-image-3", "prev-btn-3", "next-btn-3");

  // --- SLIDER 4 (Define your new image paths and new IDs) ---
    const slider4Images = [
        "./images/C 6 Major Left.png",
        "./images/C 6 Major Down.png", 
        "./images/C 6 Major Right.png"     
    ];
    // Call the function using the new, unique IDs
    createSlider(slider4Images, "slider-image-4", "prev-btn-4", "next-btn-4");

});