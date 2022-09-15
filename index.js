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

// const date = new Date(Date.now());
// console.log(typeofdate.toLocaleString());

function login(username, password){
    for(let i=0;i<users.length;i++){
        let user = users[i]
        if(user.username == username && user.password == password){
            return true;
        }
    }
    return false;
}

console.log(login('irmalaari','akuCintaKamu'));