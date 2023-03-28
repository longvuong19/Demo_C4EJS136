function subscribe() {
    // Lấy giá trị của ô input email
    let email = document.getElementById("email").value;

    // Kiểm tra định dạng email sử dụng biểu thức chính quy
    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = emailCheck.test(email);

    // Lấy danh sách các email đã đăng ký từ local storage
    let emails = JSON.parse(localStorage.getItem("emails")) || [];

    // Kiểm tra email đã tồn tại trong danh sách hay chưa
    let isDuplicate = emails.includes(email);

    // Nếu email hợp lệ và không bị trùng lặp, lưu vào local storage
    if ( isValid && !isDuplicate ) {
        // Thêm email mới vào danh sách
        emails.push(email);
        // Lưu danh sách mới vào local storage
        localStorage.setItem("emails", JSON.stringify(emails));

        let resultElement = document.getElementById("result");
        alert('Email của bạn đã được ghi nhận. Xin cảm ơn.');
    } else if ( !isValid ) {
        let resultElement = document.getElementById("result");
        alert('Email không hợp lệ. Xin thử lại.');
    } else {
        let resultElement = document.getElementById("result");
        alert('Email đã tồn tại. Xin thử lại.');
    };
    event.preventDefault();
};