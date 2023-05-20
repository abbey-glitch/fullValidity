/**
 * check the local storage for existing username and password
 * check the case sensitivity
 * 
 */
//  const vault = [];
 function users(){
    let info = document.querySelector('.text');
    let username = document.getElementById('name').value.trim();
    let password = document.getElementById('pswd').value.trim();
    let dataCount = username.length;
    let passCount = password.length;
    let userData = localStorage.getItem('userData');
    if(dataCount !=0 || passCount !=0){
        let activates, store, entries;
        store = [];
        if(userData == null || userData == undefined && dataCount == 0 || passCount == 0){
            // no name in the store
        }else{
            //there might be name
            userData = localStorage.getItem('userData');
            activates = JSON.parse(userData);
            entries = Object.entries(activates);
            for(const entry in entries){
                if(activates[entry].fname.includes(username) && activates[entry].password.includes(password)){
                    store.push(1);
                    location.href = "../slide.html";
                    alert('login successful')
                    break;
                }
            }
            if(store != 1){
                location.href = './facebook_signup/sign_up.html';
                alert('user not register')
            }
        }
    }else{
        info.innerText ='please fill the required space';
        info.style.color = 'red';
    }
 } 
