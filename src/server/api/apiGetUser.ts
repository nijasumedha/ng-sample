
import {Application,Request,Response} from 'express';
import {AllUserData} from "../../../shared/to/all-user-data";
import {findDbThreadsPerUser} from "../persistence/findDbThreadsPerUser";
import * as _ from 'lodash';
import {dbMessages, dbParticipants} from "../db-data";
import {Message} from "../../../shared/model/message";
import {UserData} from "../../../shared/to/user-data";

export function apiGetUser(app:Application) {

    app.route('/api/user/authentication').get((req: Request, res: Response) => {

        const userName = parseInt(req.headers['username']);

        const threadsPerUser = findDbThreadsPerUser(userName);

        let messages: Message[] = [],
            participantIds: string[] = [];

        threadsPerUser.forEach(thread => {

            const threadMessages: Message[] = _.filter(dbMessages, (message:any) => message.threadId == thread.id);

            messages = messages.concat(threadMessages);

            participantIds  = participantIds.concat(_.keys(thread.participants));

        });

        const participants = _.uniq(participantIds.map(participantId => dbParticipants[participantId]));

        const response: UserData = {
          participants,
        };

        res.status(200).json(response);

    });


}
