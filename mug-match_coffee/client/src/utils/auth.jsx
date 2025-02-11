const Auth = {
    login: (token) => {
        localStorage.setItem('id_token', token);
    },

    getToken: () => {
        return localStorage.getItem('id_item');
    },

    isLoggedIN: () => {
        return !!localStorage.getItem
    },

    logout: () => {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default Auth;