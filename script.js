let isSignup = false;

function showPage(page) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('staff').style.display = 'none';
  document.getElementById(page).style.display = 'block';
}

function openModal() {
  document.getElementById('authModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('authModal').style.display = 'none';
}

function toggleAuth() {
  isSignup = !isSignup;
  document.getElementById('modalTitle').innerText = isSignup ? 'Sign Up' : 'Login';
}

function handleAuth() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please fill all fields');
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (isSignup) {
    if (users.find(u => u.username === username)) {
      alert('Username already exists!');
      return;
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful! You can now log in.');
    toggleAuth();
  } else {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      alert('Welcome ' + username + '!');
      closeModal();
    } else {
      alert('Invalid credentials.');
    }
  }
}

// Staff Data
const staffData = [
  { name: 'Alice Johnson', role: 'Station Manager' },
  { name: 'Bob Smith', role: 'DJ' },
  { name: 'Charlie Lee', role: 'Producer' }
];

const staffList = document.getElementById('staffList');
staffData.forEach(member => {
  const card = document.createElement('div');
  card.className = 'staff-card';
  card.innerHTML = `<h4>${member.name}</h4><p>${member.role}</p>`;
  staffList.appendChild(card);
});
