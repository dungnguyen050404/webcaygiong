document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.aspect-ratio-169 img');
    var dots = document.querySelectorAll('.dot'); // Chọn tất cả các dot
    var dotContainer = document.querySelector('.dot-container');
    var currentImageIndex = 0;

    function showImage(index) {
        // Ẩn hình ảnh hiện tại và loại bỏ hiệu ứng của dot hiện tại
        images[currentImageIndex].style.opacity = 0;
        dots[currentImageIndex].classList.remove('active');

        // Hiển thị hình ảnh mới và thêm hiệu ứng cho dot mới
        currentImageIndex = index;
        images[currentImageIndex].style.opacity = 1;
        dots[currentImageIndex].classList.add('active');

        // Cập nhật vị trí của dotcontainer
        updateDotContainerPosition();
    }

    function updateDotContainerPosition() {
        var slideHeight = images[currentImageIndex].clientHeight; // Lấy chiều cao của slide hiện tại
        dotContainer.style.top = (slideHeight - dotContainer.offsetHeight) + "px"; // Đặt vị trí mới cho dotcontainer
    }

    function showNextImage() {
        showImage((currentImageIndex + 1) % images.length);
    }

    function showPreviousImage() {
        showImage((currentImageIndex - 1 + images.length) % images.length);
    }

    var interval = setInterval(showNextImage, 5000);

    document.querySelector('.aspect-ratio-169').addEventListener('mouseenter', function() {
        clearInterval(interval);
    });

    document.querySelector('.aspect-ratio-169').addEventListener('mouseleave', function() {
        interval = setInterval(showNextImage, 5000);
    });

    // Lắng nghe sự kiện thay đổi kích thước của cửa sổ trình duyệt
    window.addEventListener('resize', function() {
        // Cập nhật vị trí của dotcontainer khi kích thước của slide thay đổi
        updateDotContainerPosition();
    });

    // Lặp qua mỗi dot và thêm sự kiện click cho từng dot
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            showImage(index);
        });
    });
});
