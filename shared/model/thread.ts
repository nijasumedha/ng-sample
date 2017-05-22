

export interface Thread {

    id:number;
    name:string;
    messageIds: number[];
    participants: {[key:number]: number}

}
