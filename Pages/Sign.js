    // استخدام localStorage لتخزين بيانات المستخدمين
    var usersData = JSON.parse(localStorage.getItem('usersData')) || [];




    function validateForm() {

        var firstName = document.getElementById('first_name').value;
        var lastName = document.getElementById('last_name').value;
        var email = document.getElementById('email-1').value;
        var password = document.getElementById('password-1').value;

        // إنشاء كائن يحمل معلومات المستخدم
        var userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        // إضافة معلومات المستخدم إلى القائمة
        usersData.push(userData);

        // تحديث localStorage بالبيانات الجديدة
        localStorage.setItem('usersData', JSON.stringify(usersData));

        // يمكنك طباعة usersData في وحدة التحكم لرؤية البيانات المخزنة
        console.log(usersData);
        window.location.href = "Login.html";
        // قم بمنع إرسال النموذج (لا يرسل إلا إذا تم التحقق من البيانات)
        return false;
    }





    function validateForm1() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
    
        // استرجاع البيانات من localStorage
        var usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    
        // البحث عن البريد الإلكتروني وكلمة المرور في البيانات المحفوظة
        var foundUser = usersData.find(function(user) {
            return user.email === email && user.password === password;
        });
    
        // فحص ما إذا كان المستخدم موجودًا في البيانات
        if (foundUser) {
            // إذا كان موجودًا، قم بتحويل المستخدم إلى الصفحة الرئيسية
            alert("تم تسجيل الدخول بنجاح");
            localStorage.setItem('isRegistered', 'true');
            window.location.href = "../index.html";
            return false; // يجب إرجاع false لمنع إرسال النموذج
        } else {
            // إذا لم يكن موجودًا، عرض رسالة خطأ
            alert("خطأ: بريد إلكتروني أو كلمة مرور غير صحيحة.");
            return false;
        }
    }
    
    


