
(() => {
    const GetLoginInfo = () => {
        const loginForm = document.getElementById('loginForm');
        const formdata = new FormData(loginForm);
        return {
            email: formdata.get('email'),
            password: formdata.get('password'),
        };
    }

    const SignIn = () => {
        const { email, password } = GetLoginInfo();
        firebase.auth().signInWithEmailAndPassword(email, password)
        
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`sign in failed, ${errorCode} ${errorMessage}`)
        });
    }

    const SignUp = () => {
        const { email, password } = GetLoginInfo();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`sign up failed, ${errorCode} ${errorMessage}`)
        });     
    }

    firebase.auth().onAuthStateChanged(user => {
        if(user) window.location = 'home.html';
    });

    
    const login = document.getElementById('signIn');
    const register = document.getElementById('signUp');
    

    login.onclick = (e) => { SignIn(); return false };
    register.onclick = () => { SignUp() };
    
})();