export const getCredentials = (email: string, password: string, isRegistration: true) => {
    if (isRegistration) {
        function register() {
            console.log("registering");
        }

        return register;
    }
    const login = async () => {
        console.log("logging in");
    }
    return login;
}