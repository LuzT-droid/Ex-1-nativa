function checkout(productName, price) {
    sessionStorage.setItem('productName', productName);
    sessionStorage.setItem('productPrice', price);
    window.location.href = "payment.html"; // เปลี่ยนเป็นชื่อไฟล์หน้าชำระเงินของเตง
}