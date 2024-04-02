const select = (elem) => {
    return document.querySelector(elem);
}
let curr = 0;
const data = [
    {
        name: "Sagor",
        age:"23",
        hobby:['Coding','Singing','Gaming'],
        location: 'Mymensingh, Bangladesh',
        profilePic: "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/325349319_943532819962442_1099436999829031684_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8NW3HSm2cFMGQZxBgKJyTVZLfYDEyoG1Vkt9gMTKgbQ4vPd2LoylhIgzXPUMe5YQCt5q-YNvq3fM6Wg0QqcYX&_nc_ohc=4n1J3PBv0YAAX8YgELM&_nc_oc=AdhIGIcQNqRpfm0TbZMq3cxfHCE1iEDrkvhnTl2s9chi_NmCJpYoSleZDeGXoVO3NOk&_nc_ht=scontent.fdac31-1.fna&oh=00_AfBOOdlzYZ1ZKJL1sicMBHdmDBtRW2mAHfvMhSK_C_rsfg&oe=66122151",
        frontPic: "./images/SagorFront.jpg",
        details: "I am Kala Sagor, I favourite food is Gorur Mangso and senti. I love to fight With Rulin all the time. Whenever i heard name of Ramisha, i can't control my laugh."
    },
    {
        name: "Sabiha",
        age:"22",
        hobby:['Cooking','Gaming','Singing'],
        location: 'Dhaka, Bangladesh',
        profilePic: "https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/324577406_697218081899131_4788190355046105527_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGOSyscou8bXFSErZ2pY07JA20DGq5af5QDbQMarlp_lPrThLyvO4qxkedQONEohrciwMeejc3VQ4UFvBR_vtTe&_nc_ohc=W3dEqR9Klb4AX_dHFMb&_nc_ht=scontent.fdac31-2.fna&oh=00_AfCuNTgDoebREUUey01epXfaXaWriNfKdSQtPzmCpdzhsw&oe=6611FE2D",
        frontPic: "https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/120136356_785331412040456_5186732111913680095_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJvx8tLGBp4WMbDRGFKy1TfKYxsUJPX7Z8pjGxQk9ftn7_j4gxkuPD9JQZJt2usBQmh5mgusnLN9Ud_G5aEUi6&_nc_ohc=i0EJ5ptSxUgAX_O2Xk6&_nc_ht=scontent.fdac31-1.fna&oh=00_AfCiqrDqE1XJYgxEI--aTabu578xc339jzqB0pvbFu1RAg&oe=6633B5C2",
        details: "I am Gandu Sabiha, I love to cook food and Gaming all the time. I cook food and eat alone without giving others. When i get offended, i always said bal, Muri kha."
    },
    {
        name: "Rulin",
        age:"24",
        hobby:['Cooking','Coding','Porn'],
        location: 'Jamalpur, Bangladesh',
        profilePic: "./images/rulinProfile.jpg",
        frontPic: "https://scontent.fdac31-2.fna.fbcdn.net/v/t1.15752-9/433988910_1858069498010416_3470871550335650212_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFslr38CY8xaT6nAPh95emL1ZcwgkCipIHVlzCCQKKkgXmEEhPudHCtXHwd4lBiYiP6IFOlTXuZz9Hp1714JirE&_nc_ohc=auoHK_lmyf0AX-PbtAp&_nc_ht=scontent.fdac31-2.fna&oh=03_AdVlFIr09X90NDY8RQWQ3XDoNVTO6HO7bZd4R7pl2yJfgg&oe=6633BB3A",
        details: "I am Papa Rulin(fake Papa), I love to eat Murgi. My favourite hobby is to tease Sagor. When i get offended, i always choose Sagor to mock. alwasy Watch Porn, when parent aren't in home"
    },
    {
        name: "Nadia",
        age:"23",
        hobby:['Sad Status','beating Hridoy'],
        location: 'Comilla, Bangladesh',
        profilePic: "https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/285382880_1197911020968907_8920168829986614945_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHbQj9pfqCisVam0DhfnH1r_NlY3gtwVT382VjeC3BVPQXL2LxtKGS0lLlv7vQrUxe5PP5TQOa7cCQPAVNMWU8-&_nc_ohc=QSCGkg9J62MAX_dDN1r&_nc_ht=scontent.fdac31-2.fna&oh=00_AfDTtfiXsUfQL2nM9J3hDko_xYNTkKv1KPSHFK4Fz5RAgw&oe=66121AD8",
        frontPic: "https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/277006348_1153143388779004_2913392346091895079_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGP4_y_5yJ7Bugm1IVR--aQvNbRmp935Vu81tGan3flW4tvSEWEa4xhm-LW62vn1MCRRiqpaEbmxKtN-poDe4Qp&_nc_ohc=HUxWXtIVJx0AX-0aWF2&_nc_ht=scontent.fdac31-2.fna&oh=00_AfDV6VRk4RqvHgti8xCtaS3fY_8KuFjysQAFTGz5IDR5Zw&oe=6611FE01",
        details: "I am Nadia Akhter Choity, I love to beat Hridoy all the time. Try my best to beat Ruma in the Exam. when i get offended, i punch people with my strong hands like a hulk."
    },
    {
        name: "Sumaiya",
        age:"30",
        hobby:['Sad Status','Cooking','Senti'],
        location: 'Mymensingh, Bangladesh',
        profilePic: "https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/340635527_2184650488402070_4982939829345079703_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGPy74XH1WUw9De9eR1poLSR-N8c6z37jxH43xzrPfuPPz5UCzQyzuI5r2K6g68-yf0JrUAqy2o9QibvQRkHBrS&_nc_ohc=kfA1h2BB8ioAX-pDtzY&_nc_ht=scontent.fdac31-2.fna&oh=00_AfBzFe5XRrF0wuelUvpolN3xw_teIQH7A0bAwwDRdVwYjg&oe=66121708",
        frontPic: "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/350096969_833581668099599_5220542274775283675_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEa3fs5sg230Kbe5A5NQhEnDp-XehSQLAgOn5d6FJAsCBWYOnocCXnm_MJty7AZf3Ef2u3w5ZddwoDKDsHUx5V5&_nc_ohc=XcQlgsQ2Qy0AX_KU5Hz&_nc_ht=scontent.fdac31-1.fna&oh=00_AfAm3mg_n_4TeCKMyTuqUpmg2Qx5oSNwhhV0IMFx3ZIUtA&oe=661202A5",
        details: "I am Sumaiya Sumu(kawwa), I love to cook foods. i am good at sound polution. when i get offended, i do nothing just stop talking with poeple and sad status."
    },
    {
        name: "Faiyaz",
        age:"23",
        hobby:['Business','gaming','Benson'],
        location: 'Dhaka, Bangladesh',
        profilePic: "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/318843087_533697298672509_6112193521388448544_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPotDpwE1zC_oUyTY4NHaS29xjHkjWmnPb3GMeSNaac3tojtx4L713VTJJuVpJ6yGaF6aoEKoE5oWG_yGiE_5z&_nc_ohc=ePokUt1cnLEAX_Mazy0&_nc_ht=scontent.fdac31-1.fna&oh=00_AfA23glSzstZrtfhApCAowE4h3AhLFK9lLIGa95B2IS0hg&oe=66123233",
        frontPic: "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/387059768_700674218641482_7259492883791815383_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFnr8VmBGp3YQhuhEPkxjRuuOgwIwkyv6646DAjCTK_v8ALVtaTfxxh7RwiGuR37CFers5_Gj_umNfwBnLgWTH&_nc_ohc=qab-UgGtvRcAX8KolIO&_nc_ht=scontent.fdac31-1.fna&oh=00_AfC5-twW4PwbO0PxJC8dXC-OTgvqOVOm8_fvGRWIepYGug&oe=66120D64",
        details: "I am Faiyaz The Business, I love to eat Benson and keep my busines good. When get offended i smoke biri, when i am tired i smoke biri, when i am in sleep i smoke biri.."
    },

]
let animating = false;

const frontanimation = () => {
    const tl = gsap.timeline({
        onComplete: ()=>{
            animating = false;
        }
    });

    tl.from('.textAnimation',{
        y:"100%",
        opacity:0,
        duration: .8,
        stagger:.1
    })
}
const frontImg = select('.frontImg');
frontImg.src = data[curr].frontPic;
select('.incomingImg').src = data[curr+1].frontPic;
const setValue = () => {
    const hobbies = select('.hobby');
    hobbies.innerHTML = '';
    const userName = select('.name');
    userName.innerHTML = data[curr].name;
    const age = select('.age');
    age.innerHTML = data[curr].age;
    const location = select('.location');
    location.innerHTML = data[curr].location;
    const details = select('.details');
    details.innerHTML = data[curr].details;
    const profileImg = select('.profileImg');
    profileImg.src = data[curr].profilePic;
    
    for(const hobbyValue of data[curr].hobby){
        const h1HobbyTag = document.createElement('h1');
        h1HobbyTag.classList.add("text-white","font-mono",'text-sm',"py-1","px-2","bg-white/30","rounded-md");
        h1HobbyTag.innerHTML = hobbyValue;
        hobbies.appendChild(h1HobbyTag);
        // hobbies = `
        //                         <h2 class="text-white font-mono text-sm py-1 px-2 bg-white/50 rounded-md">${value}</h2>
        //                     `
    }
    frontanimation();
}
setValue();


const handleClick = () => {
    if(animating) return;
    animating = true;
    if(curr === data.length-1){
        curr = 0;
    }
    else{
        curr++;
    }
    
    
    const tp = gsap.timeline({
        onComplete: ()=>{
            const frontImg = select('.frontImg');
            frontImg.src = data[curr].frontPic;
            const front = select('.front');
            frontImg.classList.add("z-[1]");
            frontImg.style.opacity = "1";
            front
        }
    });

    tp.to('.front',{
        scale:2,
        opacity:0,
        duration: .8
    },"a")
    tp.from('.incoming',{
        scale:2,
        opacity:0.5,
        duration: 1.1
    },"a")
    setValue();
    select('.incomingImg').src = data[curr].frontPic;
}