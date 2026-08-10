// ==========================================
// 1. التبديل بين الشاشات (Navigation Logic)
// ==========================================

/**
 * دالة للتبديل بين التبويبات (اللوبي، الألعاب المخصصة، المتجر، الحيوانات)
 * @param {string} tabId - معرف القسم المراد عرضه
 * @param {HTMLElement} clickedButton - زر الملاحة الذي تم الضغط عليه
 */
function switchTab(tabId, clickedButton) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // إلغاء تفعيل جميع أزرار الملاحة
    const buttons = document.querySelectorAll('.nav-buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // إظهار القسم المطلوب
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // تفعيل الزر المضغوط
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// ==========================================
// 2. الأحداث والتفاعلات (Event Listeners)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // التفاعل مع بطاقات الألعاب والمتجر عند الضغط عليها
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // جلب اسم العنصر أو اللعبة من داخل البطاقة
            const title = card.childNodes[0].textContent.trim() || card.innerText.split('\n')[0];
            
            // تحقق من القسم الحالي لمعرفة نوع البطاقة المضغوطة
            const activeSection = document.querySelector('.view-section.active');
            
            if (activeSection) {
                const sectionId = activeSection.id;

                if (sectionId === 'lobby' || sectionId === 'custom') {
                    console.log(`جارٍ دخول اللعبة: ${title}`);
                    alert(`🎮 جاري الاتصال بغرفة: ${title}`);
                } else if (sectionId === 'shop') {
                    console.log(`شراء عنصر من المتجر: ${title}`);
                    alert(`🛒 هل ترغب في شراء: ${title}؟`);
                } else if (sectionId === 'pets') {
                    console.log(`فتح بيضة أو حيوان: ${title}`);
                    alert(`🐾 تم اختيار: ${title}`);
                }
            }
        });
    });

});
