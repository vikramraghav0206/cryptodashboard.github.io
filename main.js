const chart = document.querySelector("#chart").getContext('2d');

// creating new chart instance

new Chart(chart,{
    type: 'line',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

        datasets: [
            {
                label : 'BTC',
                data : [29384,33357,43567,29384,33357,43567,29384,33357,43567,29384,33357,43567],
                borderColor: 'red',
                borderWiidth:2
            },
            {
                label : 'ETH',
                data : [39384,43357,33567,39384,43357,23567,39384,43357,23567,19384,43357,33567],
                borderColor: 'blue',
                borderWiidth:2   
            }
        ]
    },
    options:{
        responsive: true
    }
})

// ------------------ THEME CHANGE -------------------

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
})