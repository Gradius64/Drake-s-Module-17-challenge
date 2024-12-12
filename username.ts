class User {
    username: string;
  
    constructor(username: string) {
      this.validateUsername(username);
      this.username = username;
    }

    private validateUsername(username: string): void {
        if (!username || username.length < 3) {
          throw new Error("Username must be at least 3 characters long.");
        
        }
    }
}
