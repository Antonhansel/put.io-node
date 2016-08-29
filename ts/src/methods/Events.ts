import {PutIoHelper} from '../helpers/PutIoHelper';

export class Events extends PutIoHelper {

    /**
     * 
     * Returns List of dashboard events. Includes download and share events.
     * First event entry indicates a completed transfer, second entry indicates a shared file from the friend ‘johndoe’.
     */
    public getEventsList(): string {
        return 'OK';
    }

    /**
     * 
     * Clear all dashboard events. User’s home screen (dashboard) which uses same data will also be cleared at Put.io website.
     */
    public deleteEvents(): string {
        return 'OK';
    }
}
