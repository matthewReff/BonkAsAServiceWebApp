class RapSheet {
    user: ServerScopedUser
    rapsheet: Map<String, number>

    constructor(user: ServerScopedUser, rapsheet: Map<String, number>) {
        this.user = user
        this.rapsheet = rapsheet
    }
}

class ServerScopedUser {
    userId: String;
    serverId: String;

    constructor(userId: String, serverId: String) {
        this.userId = userId
        this.serverId = serverId
    }
}

export { RapSheet, ServerScopedUser }