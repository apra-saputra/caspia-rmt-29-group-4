
let users = [
    {
        id:1,
        username: 'gamandan',
        password: 'akuCintaKamu',
        nama: 'Gamani Ramadan',
        address: 'Jl. Supono No. 546, Cirebon 45852, Kalimantan Tenggara',
        email: 'luhung17@yahoo.com'
    },
    {
        id:2,
        username: 'anastata',
        password: 'akuCintaKamu',
        nama: 'Anastasia Permata',
        address: 'Ki. Hasanuddin No. 371, Ternate 39366, Kepulauan Riau',
        email: 'martana.yulianti@marbun.web.id'
    },
    {
        id:3,
        username: 'balibun',
        password: 'akuCintaKamu',
        nama: 'Balijan Marbun',
        address: 'Ds. Baja No. 552, Gorontalo 25091, Maluku Utara',
        email: 'jaya.puspita@namaga.go.id' 
    },
    {
        id:4,
        username: 'riniari',
        password: 'akuCintaKamu',
        nama: 'Rini Mandasari',
        address: 'Dk. Bakhita No. 865, Prabumulih 33535, Kalimantan Selatan',
        email: 'ilsa.dabukke@yahoo.com' 
    },
    {
        id:5,
        username: 'irmalaari',
        password: 'akuCintaKamu',
        nama: 'Irma Lailasari',
        address: 'Ds. Bazuka Raya No. 491, Manado 35631, Jambi', 
        email: 'sabar.susanti@gmail.co.id'
    }
]

// function selectImg(obj) {
//     obj.username
//     var myImage = new Image(300, 300);
//     myImage.src = 'gambar.jpg';
//     x = document.getElementById("gambar");
//     x.appendChild(myImage);	
// }

function login(){
    let nameuser = document.getElementById('username').value
    let passcode = document.getElementById('password').value
    
    for(let i=0;i<users.length;i++){
        let user = users[i]
        if(!nameuser){
            alert(`invalid, masukan username dan passsword`)
            break;
        }else if(user.password !== passcode){
            alert('password salah')
            location.reload()
            break;
        }else if(user.username == nameuser && user.password == passcode){
            location.replace('index.html')
        }
    }
}

const backToLogin = () =>{
    location.replace('login.html')
}
// login(username, password)
// console.log(login(username,password));

const posts = [
    {
        id:1,
        nama: 'Balijan Marbun',
        username: 'balibun',
        message: 'This is SPARTAAAA!!!!!',
        timestamp : new Date("October 13, 2014 11:13:00")
    },
    {
        id:2,
        nama: 'Balijan Marbun',
        username: 'balibun',
        message: 'Bawah jelek',
        timestamp : new Date("October 14, 2014 11:13:00")
    },
    {
        id:3,
        nama: 'Irma Lailasari',
        username: 'irmalaari',
        message: 'Manusia hanyalah alat - K*y*t*k* *y*n*k*j*',
        timestamp : new Date("October 13, 2021 5:10:20")
    },
    {
        id:4,
        nama:'Gamani Ramadan',
        username: 'gamandan',
        message: '**** ****** ****** kalian semua ******',
        timestamp: new Date("September 11, 2015 9:13:10")
    },
    {
        id:5,
        nama:'Gamani Ramadan',
        username: 'gamandan',
        message: 'Maju kalian semua ****** anak *****, HAHA!!!',
        timestamp: new Date("September 12, 2015 9:13:10")
    },
    {
        id:6,
        nama: 'Anastasia Permata',
        username: 'anastata',
        message: 'Kok pada toxic semua ya disini? :wajah bingung:',
        timestamp: new Date("November 12, 2015 9:13:10")
    }
]

// const username = document.getElementById('username').value
function getUserInfo(username){ //dari id = 'username'
// function getUserInfo(){
    for(let i=0;i<users.length;i++){
        let user = users[i];
        if(user.username == username){
            return user;
        }
    }
}


//message mendapat nilai dari id='message', param user didapat dari function getUserInfo()
let idPost = posts.length;
function post(user,message){
    idPost++;
    const date = new Date(Date.now());
    let obj = {
        id: idPost,
        nama: user.nama,
        username: user.username,
        message: message,
        timestamp: date
    }
    posts.push(obj);
    return posts;
}

function editMessage(user,message,idMessage){
    for(let i=0;i<posts.length;i++){
        let post = posts[i];
        if(post.id == idMessage && user.username == post.username){
            post.message = message;
        }
    }
}

function deleteMessage(idMessage){
    for(let i=0;i<posts.length;i++){
        let post = posts[i];
        if(post.id == idMessage){  
            let index = posts.indexOf(post);
            if(index > -1){
                posts.splice(index,1);
            }
        }
    }
    // console.log(posts);
}

// console.log(login('irmalaari','akuCintaKamu'));
// let username = 'anastata';
// let userLogin = getUserInfo(username);
// let deletePost = deleteMessage(1);
// console.log(posts);


function sortingTerbaru(data){// param data dari arr of obj posts
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data.length-1; j++){
            let temp = data[j]
            if (Number(data[j].timestamp) < Number(data[j+1].timestamp)){
                data[j] = data[j+1]
                data[j+1] = temp
            }
        }
    }
    return data
}

// console.log(sortingTerbaru(posts))

function sortingTerdahulu(data){// param data dari arr of obj posts
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data.length-1; j++){
            let temp = data[j]
            if (Number(data[j].timestamp) > Number(data[j+1].timestamp)){
                data[j] = data[j+1]
                data[j+1] = temp
            }
        }
    }
    return data
}

// console.log(sortingTerdahulu(posts))

/*
ini test case
let contohUser = getUserInfo('gamandan')
post(contohUser,'wakwaw toxix bangeet')
console.log(post(contohUser,'ini apa sih'))
*/

// function generatePost(arr){

// }


//selector
// const postlist = document.querySelector('.postlist')

function render() {
    const postlist =  document.getElementById('.postlist')
    // put all task to html
    for (let i = 0; i < posts.length; i++) {
        // create div
        const postcard = document.createElement('div')
        postcard.classList.add('post-card')
        // create div
        const hdiv = document.createElement('div')
        hdiv.classList.add('h-div')
        // create img

        // create paragraf
        const parag = document.createElement('p')
        parag.innerText = `${posts[i].message}`
        
        hdiv.appendChild(parag)
        postcard.appendChild(hdiv)
        postlist.appendChild(postcard)
    }
  }
//   render()