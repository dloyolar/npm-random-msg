const messages = [
  'Diego',
  'Ana',
  'Nicolay',
  'Vasily',
  'Damon',
  'Yesica',
  'Tamara',
  'Oscar',
  'Rodrigo',
  'Carolina',
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
