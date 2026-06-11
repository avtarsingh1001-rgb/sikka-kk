// Task poora hone par alert dikhane ka function
function completeTask(taskName) {
    alert("Badhai ho! Aapka '" + taskName + "' task shuru ho gaya hai. Poora hote hi Sikka aapke wallet me add ho jayenge.");
}// Login Modal ko dikhane ke liye
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Login Modal ko band karne ke liye
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// User jab login submit karega tab ke liye action
function handleLogin(event) {
    event.preventDefault(); // page refresh hone se rokega
    alert('Aapka Login Safal Hua!');
    closeLoginModal();
    
    // Login hone ke baad button ka text 'Profile' kar dega
    document.getElementById('loginBtn').innerText = 'Profile';
}// Wallet Modal ko open karne ke liye
function openWalletModal() {
    document.getElementById('walletModal').style.display = 'flex';
}

// Wallet Modal ko close karne ke liye
function closeWalletModal() {
    document.getElementById('walletModal').style.display = 'none';
}

// Withdrawal button par click karne ka action
function handleWithdraw(method) {
    alert(method + ' se nikaasi shuru karne ke liye kripya pehle apne tasks poore karein!');
}



