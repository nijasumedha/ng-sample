


import {Participant} from "../../shared/model/participant";
import {Thread} from "../../shared/model/thread";
import {Message} from "../../shared/model/message";


export const dbParticipants: {[key: number]: Participant} = {
    1: {
        id: 1,
        name: 'Saman'
    },
    2: {
        id: 2,
        name: 'Senaka'
    },
    3: {
        id: 3,
        name: 'Gayan'
    },
    4: {
        id: 4,
        name: 'David'
    },
    5: {
        id: 5,
        name: 'Mary'
    }
};


export const dbThreads: {[key: number]: Thread} = {
    1: {
        id: 1,
        name: 'Green Group',
        messageIds: [1, 2, 3, 4, 5],
        participants: {
            1: 0,
            2: 0
        }
    },
    2: {
        id: 2,
        name: 'Parisara Mithuro',
        messageIds: [6, 7, 8, 9, 10],
        participants: {
            1: 0,
            3: 0,
            4: 0
        }

    },
    3: {
        id: 3,
        name: 'Sumithrayo',
        messageIds: [11, 12, 13, 14],
        participants: {
            1: 0,
            3: 0,
            4: 0,
            5: 0
        }
    }
};


export const dbMessages: {[key: number]: Message} = {

    1: {
        id: 1,
        threadId: 1,
        participantId: 1,
        text: 'Do you know what we did last Saturday? we cleaned up Samagi Mawatha',
        timestamp: new Date().getTime(),
        image: 'assets/images/groups/road_clean.jpg'

    },
    2: {
        id: 2,
        threadId: 1,
        participantId: 2,
        text: '100 more... we planted 100 new plants around the reserve to replace...',
        timestamp: new Date().getTime()
    },
    3: {
        id: 3,
        threadId: 1,
        participantId: 1,
        text: 'Helping those who in need...',
        timestamp: new Date().getTime()
    },
    4: {
        id: 4,
        threadId: 1,
        participantId: 2,
        text: 'How we can effectively contribute to add more green',
        timestamp: new Date().getTime()
    },

    5: {
        id: 5,
        threadId: 1,
        participantId: 1,
        text: 'Great idea',
        timestamp: new Date().getTime()
    },

    6: {
        id: 6,
        threadId: 2,
        participantId: 1,
        text: 'how we can get more help!, here are some ideas, anything else? ',
        timestamp: new Date().getTime()
    },
    7: {
        id: 7,
        threadId: 2,
        participantId: 3,
        text: 'Wasn\'t our last meeting addressed this? ',
        timestamp: new Date().getTime()
    },
    8: {
        id: 8,
        threadId: 2,
        participantId: 4,
        text: 'I don\'t think so ',
        timestamp: new Date().getTime()
    },
    9: {
        id: 9,
        threadId: 2,
        participantId: 4,
        text: 'Really ! ',
        timestamp: new Date().getTime()
    },
    10: {
        id: 10,
        threadId: 2,
        participantId: 1,
        text: 'Here is what we discussed',
        timestamp: new Date().getTime()
    },


    11: {
        id: 11,
        threadId: 3,
        participantId: 1,
        text: 'Hello friends we are planning to start a Sumithrayo branch in our city ',
        timestamp: new Date().getTime()
    },
    12: {
        id: 12,
        threadId: 3,
        participantId: 3,
        text: 'What is Sumithrayo? ',
        timestamp: new Date().getTime()
    },
    13: {
        id: 13,
        threadId: 3,
        participantId: 4,
        text: 'How can we contribute? ',
        timestamp: new Date().getTime()
    },
    14: {
        id: 14,
        threadId: 3,
        participantId: 5,
        text: 'Hello friends this is what they do <a href="http://www.srilankasumithrayo.org/what-we-do.html" target="_blank"> Sumithrayo</a>',
        timestamp: new Date().getTime()
    },
    15: {
        id: 15,
        threadId: 3,
        participantId: 1,
        text: 'This is what they do ',
        timestamp: new Date().getTime()
    },
    16: {
        id: 16,
        threadId: 3,
        participantId: 1,
        text: 'Let\'s do it',
        timestamp: new Date().getTime()
    }

};


export const dbMessagesQueuePerUser: {[key: number]: number[]} = {

    1: [],
    2: [],
    3: [],
    4: [],
    5: []

};














