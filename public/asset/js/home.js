(()=>{
    const wrapper = document.querySelector('.wrapper')


    firebase.auth().onAuthStateChanged(user => {
        if(user) {} else { window.location = 'index.html'; }
    });
    document.querySelector('.show-list').onclick = () => {
        wrapper.classList.add('list-mode');
    }
    document.querySelector('.hide-list').onclick = () => {
        wrapper.classList.remove('list-mode');
    }
})()