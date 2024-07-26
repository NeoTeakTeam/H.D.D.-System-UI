document.getElementById("pw").addEventListener("click", function (event) {
    event.preventDefault();

    // 显示其他两个链接
    ["st", "ct"].forEach((id) => {
        const link = document.getElementById(id);
        link.classList.remove("hid");
    });

    // 动画效果
    // this.style.width = "400px";
    this.offsetWidth;
    this.style.width = "200px";
});
// 勾石UI界面


document.getElementById("ct").addEventListener("click", function (event) {
    event.preventDefault();

    ["ct", "st"].forEach((id) => {
        const link = document.getElementById(id);
        link.classList.add("hid");
    });

    ["pw"].forEach((id) => {
        const link = document.getElementById(id);
        // link.style.width = "200px";
        link.offsetWidth;
        link.style.width = "400px";
    });
});

