const IMG_MAN1 = require('../assets/images/person/man.png');
const IMG_MAN2 = require('../assets/images/person/man2.png');
const IMG_MAN3 = require('../assets/images/person/man3.png');
const IMG_WOMAN = require('../assets/images/person/woman.png');
const IMG_WOMAN2 = require('../assets/images/person/woman2.png');
const IMG_WOMAN3 = require('../assets/images/person/woman3.png');

const CHATS = [
  {
    recipient: 'Ma Puth',
    image: IMG_MAN1,
    lastChat: 'Materi 2 susah bro :(',
    lastChatTime: '2 min',
    unread: 0,
  },
  {
    recipient: 'Mfdsix',
    image: IMG_MAN2,
    lastChat: 'Materi design kapan diupdate gan?',
    lastChatTime: '6 min',
    unread: 2,
  },
  {
    recipient: 'Ai Noor',
    image: IMG_WOMAN,
    lastChat: 'Assalamualaikum ukhti :)',
    lastChatTime: '2 day',
    unread: 5,
  },
  {
    recipient: 'Reef Ann',
    image: IMG_WOMAN2,
    lastChat: 'How are you miss ?',
    lastChatTime: 'a week',
    unread: 0,
  },
  {
    recipient: 'Mfdsix (fake account)',
    image: IMG_MAN3,
    lastChat: 'Hehe iya sih.',
    lastChatTime: 'a month',
    unread: 0,
  },
  {
    recipient: 'Ai Noor (fake account)',
    image: IMG_WOMAN3,
    lastChat: 'Ckckckck....',
    lastChatTime: 'inactive',
    unread: 2,
  },
];
const CHAT = [
  {
    isSender: false,
    chat: 'hallo',
  },
  {
    isSender: true,
    chat: 'hallo,',
  },
  {
    isSender: false,
    chat: [
      {
        text: 'mas mau nanya materi 2',
      },
      {
        text: 'itukan bla bla bla bla. nah itu gimana ya ?',
      },
    ],
  },
  {
    isSender: true,
    chat: [
      {
        text: 'oh yang itu ya',
      },
      {
        text: 'jadi gini, blibli bliblib blibliblib. dapet gak?',
      },
    ],
  },
  {
    isSender: false,
    chat: 'oh ok mas, tengsyu',
  },
  {
    isSender: true,
    chat: '👍',
  },
];

export {CHAT};

export default CHATS;
