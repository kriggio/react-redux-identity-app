export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.jwtToken) {
        console.log(user);
        console.log(user.jwtToken);
        return { 'Authorization': 'Bearer ' + user.jwtToken };
    } else {
        return {};
    }
}