console.log('script connected!');

let interviewList = [];
let rejectedList = [];


const filterSection = document.getElementById('fiter-section');

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

const allFilterbtn = document.getElementById('all-filter-btn');
const interviewFilterbtn =document.getElementById('interview-filter-btn');
const rejectedFilterbtn = document.getElementById('rejected-filter-btn');

const allCardContainer = document.getElementById('card-conatiner');
// console.log(allCardContainer.children.length);

const mainContainer = document.querySelector('main');


// this function shows the count of each filter
function countFilter(){
    total.innerText = allCardContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}

countFilter();




// this functions shows the cards interview filter
function renderInterview(){
    filterSection.innerHTML = '';

    for(inter of interviewList){

        let div = document.createElement('div');
        div.className = 'card border border-base-200 shadow bg-base-100 p-4 flex justify-between flex-row';

        div.innerHTML =`<div class="left space-y-6">
                    <p class="companyName text-2xl font-bold text-[#002C5C] mb-1">${inter.companyName}</p>
                    <p class="position text-[#64748B] mb-1">${inter.position}</p>
                    <p class="location text-[#64748B] mb-2">${inter.location}</p>
                    <p class="state border border-base-200 rounded w-[120px] py-2 text-center bg-base-200 text-[#002C5C] mb-2">${inter.state}</p>
                    <p class="description text-[#002C5C]">${inter.description}</p>

                    <div>
                        <button class="interview-btn btn border-green-500 text-green-600">Interview</button>
                        <button class="rejected-btn btn border-red-500 text-red-600">Rejected</button>
                    </div>

                </div>

                <div class="right">
                    <button class="delete-btn btn"><i class="fa-solid fa-trash-can"></i></button>

                </div>
        
        `;

        filterSection.appendChild(div);

    }
}


// this functions shows the cards rejected filter
function renderReject(){
    filterSection.innerHTML = '';

    for(rej of rejectedList){

        let div = document.createElement('div');
        div.className = 'card border border-base-200 shadow bg-base-100 p-4 flex justify-between flex-row';

        div.innerHTML =`<div class="left space-y-6">
                    <p class="companyName text-2xl font-bold text-[#002C5C] mb-1">${rej.companyName}</p>
                    <p class="position text-[#64748B] mb-1">${rej.position}</p>
                    <p class="location text-[#64748B] mb-2">${rej.location}</p>
                    <p class="state border border-base-200 rounded w-[120px] py-2 text-center bg-base-200 text-[#002C5C] mb-2">${rej.state}</p>
                    <p class="description text-[#002C5C]">${rej.description}</p>

                    <div>
                        <button class="interview-btn btn border-green-500 text-green-600">Interview</button>
                        <button class="rejected-btn btn border-red-500 text-red-600">Rejected</button>
                    </div>

                </div>

                <div class="right">
                    <button class="delete-btn btn"><i class="fa-solid fa-trash-can"></i></button>

                </div>
        
        `;

        filterSection.appendChild(div);

    }
}



// toggling function
function filterToggle(id){

    // adding coloring to the selected filter
    allFilterbtn.classList.add('bg-base-100', 'text-[#64748B]');
    interviewFilterbtn.classList.add('bg-base-100', 'text-[#64748B]');
    rejectedFilterbtn.classList.add('bg-base-100', 'text-[#64748B]');


    allFilterbtn.classList.remove('btn-primary', 'text-white');
    interviewFilterbtn.classList.remove('btn-primary', 'text-white');
    rejectedFilterbtn.classList.remove('btn-primary', 'text-white');

    let selected = document.getElementById(id);
    selected.classList.remove('bg-base-100', 'text-[#64748B]');
    selected.classList.add('btn-primary', 'text-white');


    
}


// for card buttons

mainContainer.addEventListener('click', function(event){


    if(event.target.classList.contains('interview-btn')){
        const parenNode = event.target.parentNode.parentNode;
        console.log('interview button clicked');

        // adding cardinfo to the interviewlist 
        const companyName = document.querySelector('.companyName').innerText;
        const position = document.querySelector('.position').innerText;
        const location = document.querySelector('.location').innerText;
        const state = document.querySelector('.state').innerText;
        const description = document.querySelector('.description').innerText;

        parenNode.querySelector('.state').innerText = 'Interview';

        const cardInfo ={
            companyName,
            position,
            location,
            state : 'Interview',
            description
        };

        const cardExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if(!cardExist){
            interviewList.push(cardInfo);
        }

        countFilter();

    }

    else if(event.target.classList.contains('rejected-btn')){

    const parenNode = event.target.parentNode.parentNode;
        console.log('rejected button clicked');

        // adding cardinfo to the interviewlist 
        const companyName = document.querySelector('.companyName').innerText;
        const position = document.querySelector('.position').innerText;
        const location = document.querySelector('.location').innerText;
        const state = document.querySelector('.state').innerText;
        const description = document.querySelector('.description').innerText;

        parenNode.querySelector('.state').innerText = 'Rejected';

        const cardInfo ={
            companyName,
            position,
            location,
            state : 'Rejected',
            description
        };

        const cardExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if(!cardExist){
            rejectedList.push(cardInfo);
        }

        countFilter();

    }
    


});
