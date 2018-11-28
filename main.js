const fragment = document.createDocumentFragment();





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
const message6 = message('this worked?.....whoaaaa', 'message');


fragment.appendChild(message1);
fragment.appendChild(message2);
fragment.appendChild(message3);
fragment.appendChild(message4);
fragment.appendChild(message5);
fragment.appendChild(message6);

document.querySelector('#messages').appendChild(fragment);






// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.