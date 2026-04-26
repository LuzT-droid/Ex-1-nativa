document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.15 // เลื่อนมาเห็น 15% แล้วเริ่มเล่น
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // ถ้าอยากให้เล่นแค่ครั้งเดียวไม่ต้องเล่นซ้ำตอนเลื่อนขึ้น-ลง ให้เอาคอมเมนต์ข้างล่างออก
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // เลือก Class ทั้งหมดที่คุณต้องการให้มี Animation ตอนเลื่อนถึง
    const targets = document.querySelectorAll(
        '.ตกแต่ง1, .ตกแต่ง2, .เกริ่น, .พื้นหลังสรรพคุณ11, .ส11, .ส11ย่อย, .ราคา1, .ซื้อ2, .สรุป, .h3, .ดาว'
    );

    targets.forEach(target => {
        target.classList.add('reveal'); // ใส่ class ซ่อนไว้ก่อน
        observer.observe(target); // สั่งให้จับตาดู
    });
});