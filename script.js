function sayHello() {
    const greetings = [
        "你好呀！欢迎来到我的主页！",
        "嗨！今天过得怎么样？",
        "很高兴见到你！",
        "谢谢你的来访！",
        "一起加油吧！"
    ];
    const random = Math.floor(Math.random() * greetings.length);
    document.getElementById("greeting").textContent = greetings[random];
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
