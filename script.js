function login(answer) {
  if (answer === 'A Worm 🐛') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('message').style.display = 'block';
    showMessageSequence();
  } else {
    alert("Try again, you silly!");
  }
}

function showMessageSequence() {
  const messages = [
    "Ogni thinks you're cute",
    "and cool",
    "and smart",
    "and pretty",
    "and he loves that wholesome smile of yours",
    "And Ogni was wondering...",
    "If you'd go out with him!"
  ];

  let i = 0;
  const delays = [2000, 2000, 2000, 2000, 4000, 2000, 2000]; // Custom delay for each message
  const messageText = document.getElementById('messageText');

  function showNextMessage() {
    if (i < messages.length) {
      messageText.textContent = messages[i];
      i++;
      setTimeout(showNextMessage, delays[i - 1]);
    } else {
      setTimeout(showPoemButton, delays[delays.length - 1]);
    }
  }

  showNextMessage();
}

function showPoemButton() {
  const button = document.createElement('button');
  button.textContent = "Here's a poem for you";
  button.onclick = showPoemPage;
  document.getElementById('message').appendChild(button);
}

function showPoemPage() {
  document.getElementById('message').style.display = 'none';
  document.getElementById('poemPage').style.display = 'block';
}

function showYes() {
  document.getElementById('poemPage').style.display = 'none';
  document.getElementById('finalMessage').style.display = 'block';
}

function showNo() {
  alert("Wait... let's try that again 😅");
}
