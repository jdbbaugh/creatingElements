let messageBoard = document.getElementById('messages');





const message = (text, style) => {
    const sectionElement = document.createElement('section');
    sectionElement.textContent = text;
    sectionElement.classList.add(style);
    return sectionElement;
}

const message1 = message('....only 12 people died', 'message');
const message2 = message('but they came back to life', 'message');
const message3 = message('I mean they all laugh about it now', 'message');
const message4 = message('kinda', 'message');
const message5 = message('Except that one family...they are still quite pissed', 'message');


messageBoard.appendChild(message1);
messageBoard.appendChild(message2);
messageBoard.appendChild(message3);
messageBoard.appendChild(message4);
messageBoard.appendChild(message5);






// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.