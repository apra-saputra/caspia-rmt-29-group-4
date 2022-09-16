
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


function getUserInfo(username){ //dari id = 'username'
    for(let i=0;i<users.length;i++){
        let user = users[i];
        if(user.username == username){
            return user;
        }
    }
}

let userlogin = {}

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
            userlogin = getUserInfo(nameuser)
            localStorage.setItem('username',userlogin.username)
            localStorage.setItem('fullname',userlogin.nama)
            localStorage.setItem('id',userlogin.id)
            localStorage.setItem('email',userlogin.email)
            location.replace('index.html')
            return userlogin
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

// const userloginpage2 =  {
//     id: localStorage.getItem('id'),
//     username: localStorage.getItem('username'),
//     nama: localStorage.getItem('fullname'),    
//     email: localStorage.getItem('email')
// }

//message mendapat nilai dari id='message', param user didapat dari function getUserInfo()
let idPost = posts.length;
// function post(userloginpage2,message){
function post(){
    const userloginpage2 =  {
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username'),
    nama: localStorage.getItem('fullname'),    
    email: localStorage.getItem('email')
    }
    let message = document.getElementById('postedtext').value
    idPost++;
    const date = new Date(Date.now());
    let obj = {
        id: idPost,
        nama: userloginpage2.nama,
        username: userloginpage2.username,
        message: message,
        timestamp: date
    }
    posts.push(obj);
    document.getElementById('postedtext').value = ''
    return posts;
}

function editMessage(userloginpage2,message,idMessage){
    for(let i=0;i<posts.length;i++){
        let post = posts[i];
        if(post.id == idMessage && userloginpage2.username == post.username){
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


function sortingTerbaru(){// param data dari arr of obj posts
    let data = posts
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

function sortingTerdahulu(){// param data dari arr of obj posts
    let data = posts
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
const postlist =  document.getElementById('post-list')
const profilecard = document.getElementById('profilecard')
// console.log(document.querySelector('#post-list'))

function render(posts) {
    // put all task to html

    for (let i = 0; i < posts.length; i++) {
        // create div
        const postcard = document.createElement('div')
        postcard.classList.add('post-card')
        // create div
        const hdiv = document.createElement('div')
        hdiv.classList.add('h-div')
        // create img
        const img = document.createElement('img')
        img.src = "img/profile-1.jpg"
        // create div
        const vdiv = document.createElement('div')
        vdiv.classList.add('v-div')
        // create div
        const vdiv2 = document.createElement('div')
        vdiv2.classList.add('v-div')
        
        // create div
        const hdivinfo = document.createElement('div')
        hdivinfo.classList.add('h-div')
        hdivinfo.classList.add('user-info')
        // create fullname
        const fullname = document.createElement('p')
        fullname.innerText = `${posts[i].nama}`;
        // create bar
        const bar = document.createElement('p')
        bar.innerText = `|`;
        // create username
        const username = document.createElement('p')
        username.innerText = `${posts[i].username}`;
        // create bar
        // create timestamp
        const timestamp = document.createElement('p')
        // let date = Date.localstring(posts[i].timestamp)
        timestamp.innerText = `${posts[i].timestamp.toLocaleString()}`;

        // create paragraf
        const parag = document.createElement('p')
        parag.innerText = `${posts[i].message}`;

        //create button
        const btndel = document.createElement('button')
        btndel.classList.add('delete-button')
        // btndel.remove()
        // btndel.addEventListener('click',function deleteMessage(idMessage){
        //     for(let i=0;i<posts.length;i++){
        //         let post = posts[i];
        //         if(post.id == idMessage){  
        //             let index = posts.indexOf(post);
        //             if(index > -1){
        //                 posts.splice(index,1);
        //             }
        //         }
        //     }
        //     location.reload()
        // })
        btndel.innerText = 'Delete'


        hdivinfo.appendChild(fullname)
        hdivinfo.appendChild(bar)
        hdivinfo.appendChild(username)
        hdivinfo.appendChild(bar)
        hdivinfo.appendChild(timestamp)

        vdiv2.appendChild(parag)


        vdiv.appendChild(hdivinfo)
        vdiv.appendChild(vdiv2)
        vdiv.appendChild(btndel)
        hdiv.appendChild(img)
        hdiv.appendChild(vdiv)
        postcard.appendChild(hdiv)
        postlist.appendChild(postcard)

        // // const btndelete = document.getElementsByClassName('delete-button')
        // // btndelete.addEventListener('click', function (){
        // //     console.log('test')
        // })
    }
  }
render(posts)

function renderprofil(){
    const vdiv3 = document.createElement('div')
    vdiv3.classList.add('v-div')
        // create fullname
    const fullname1 = document.createElement('p')
    
    fullname1.innerText = `${localStorage.getItem('fullname')}`;
         // create username
    const username1 = document.createElement('p')
    username1.innerText = `@${localStorage.getItem('username')}`;

    vdiv3.appendChild(fullname1)
    vdiv3.appendChild(username1)
    profilecard.appendChild(vdiv3)
}
renderprofil()

function getpost (){
    for(let i = 0; i <posts.length; i++){
        postlist.removeChild(postlist.lastChild)
    }
    render(post())
}
function sortNewst (){
    for(let i = 0; i <posts.length; i++){
        postlist.removeChild(postlist.lastChild)
    }
    render(sortingTerbaru())
}
function sortOldest (){
    for(let i = 0; i <posts.length; i++){
        postlist.removeChild(postlist.lastChild)
    }
    render(sortingTerdahulu())
}



// const btndel = 
{/* <div class="v-div">
<p>User Name</p>
<p>@username</p>
</div> */}