document.addEventListener("click", function(e) {
    var t = document.querySelectorAll(".hover-text")
      , c = e.target
      , a = !1;
    t.forEach(function(e) {
        e.contains(c) && (a = !0),
        e.classList.remove("active")
    }),
    a || t.forEach(function(e) {
        e.classList.remove("active")
    })
});

