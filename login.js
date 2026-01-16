user = prompt("Username : ");
pass = prompt("Password : ");

while (user !== "admin" || pass !== "admin") {
    alert("User or password not found, Try ( admin : admin )");
    user = prompt("Username : ");
    pass = prompt("Password : ");
}

document.write(
    '<h3>Status: ✅ Logged in</h3>' +
    '<h1>Welcome admin,</h1>' +
    '<a href="#">View profile</a>' + '<br>' +
    '<a href="#">Settings</a>' + '<br>' +
    '<a href="index.html">Logout</a>'
);
