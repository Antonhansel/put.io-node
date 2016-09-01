import {PutIoHelper} from '../helpers/PutIoHelper';

export class Friends extends PutIoHelper {

    /**
     * 
     * Lists friends.
     */
    public getFriendsList(): Promise<string> {
        return this.requestData('GET', 'friends/list', []);
    }

    /**
     * 
     * Lists incoming friend requests.
     */
    public getFriendRequests(): Promise<string> {
        return this.requestData('GET', 'friends/waiting-requests', []);
    }

    /**
     * 
     * Sends a friend request to the given username.
     * 
     * @param username: friend's username
     */
    public sendFriendRequest(username: string): Promise<string> {
        return this.requestData('POST', `friends/${username}/request`, []);
    }

    /**
     * 
     * Approves a friend request from the given username.
     * 
     * @param username: friend's username
     */
    public approveFriendRequest(username: string): Promise<string> {
        return this.requestData('POST', `friends/${username}/approve`, []);
    }

    /**
     * 
     * Denies a friend request from the given username.
     * 
     * @param username: friend's username
     */
    public denyFriendRequest(username: string): Promise<string> {
        return this.requestData('POST', `friends/${username}/deny`, []);
    }

    /**
     * 
     * Removes friend from friend list. Files shared with all friends will be automatically removed from old friend’s directory.
     * 
     * @param username: friend's username
     */
    public unfriend(username: string): Promise<string> {
        return this.requestData('POST', `friends/${username}/unfriend`, []);
    }
}
