form.addEventListener("submit", function (event) {
    // Ngăn chặn tải lại trang khi gửi
    event.preventDefault(); 
    // Chọn giá trị email do người dùng điền
    const email = document.getElementById("email").value;
});

form.addEventListener("submit", function (event) {
    // Ngăn chặn tải lại trang khi gửi
    event.preventDefault(); 

    // Chọn giá trị email do người dùng điền
    const email = document.getElementById("email").value;

    // Kiểm tra email hợp lệ bằng mẫu biểu thức chính quy đơn giản
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Email không chính xác");
      return;
    }

// Nếu mọi thứ đều thành công, hiển thị thông báo thành công   
    alert("Đã gửi thành công");
});
