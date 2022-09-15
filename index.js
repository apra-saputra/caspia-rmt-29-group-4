const users = [
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

const posts = [
    {
        id:1,
        nama: 'Balijan Marbun',
        username: 'balibun',
        message: 'This is SPARTAAAA!!!!!',
        timestamp : '15/9/2022 16.10.56'
    },
    {
        id:2,
        nama: 'Balijan Marbun',
        username: 'balibun',
        message: 'Bawah jelek',
        timestamp : '15/9/2022 16.10.57'
    },
    {
        id:3,
        nama: 'Irma Lailasari',
        username: 'irmalaari',
        message: 'Manusia hanyalah alat - K*y*t*k* *y*n*k*j*',
        timestamp : '15/9/2022 16.13.56'
    },
    {
        id:4,
        nama:'Gamani Ramadan',
        username: 'gamandan',
        message: '**** ****** ****** kalian semua ******',
        timestamp: '15/9/2022 16.15.56'
    },
    {
        id:5,
        nama:'Gamani Ramadan',
        username: 'gamandan',
        message: 'Maju kalian semua ****** anak *****, HAHA!!!',
        timestamp: '15/9/2022 16.25.56'
    },
    {
        id:6,
        nama: 'Anastasia Permata',
        username: 'anastata',
        message: 'Kok pada toxic semua ya disini? :wajah bingung:',
        timestamp: '15/9/2022 16.26.59'
    }
]

function login(username, password){
    for(let i=0;i<users.length;i++){
        let user = users[i]
        if(user.username == username && user.password == password){
            return true;
        }
    }
    return false; 
}

function getUserInfo(username){
    for(let i=0;i<users.length;i++){
        let user = users[i];
        if(user.username == username){
            return user;
        }
    }

}

let idPost = posts.length;
function post(user,message){
    idPost++;
    const date = new Date(Date.now());
    let obj = {
        id: idPost,
        nama: user.nama,
        username: user.username,
        message: message,
        timestamp: date.toLocaleString()
    }
    posts.push(obj);
    return posts;
}

function editMessage(user,message,idMessage){
    for(let i=0;i<posts.length;i++){
        let post = posts[i];
        if(post.id == idMessage){
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
    console.log(posts);
}

let username = 'anastata';
let userLogin = getUserInfo(username);
let deletePost = deleteMessage(1);
// console.log(posts);