window.addEventListener('load', () =>{
    const refresh = document.getElementById("refresh");
    let table = document.getElementById("data");
    var table1 = document.getElementById("table1");
    var store = 0;
    localStorage.setItem("value", store)

    function fetchData(){
        fetch("https://api.coronavirus.data.gov.uk/v1/data").then(response => {
            return response.json();
        }).then(data => {
            localStorage.setItem("data", JSON.stringify(data))
            const j = Number(localStorage.getItem("value"))
            for(let i=0;i<30;i++){
                var row = table1.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                
                cell1.innerHTML = data.data[i+j].date
                cell2.innerHTML = data.data[i+j].areaName                
                cell3.innerHTML = data.data[i+j].confirmed                
                cell4.innerHTML = data.data[i+j].death               
                store = i+j
                localStorage.setItem("value", store+1);
            }
        });
    }

    // function retrieveData(){
    //     var val = Number(localStorage.getItem("value")) +1
    //     var data = JSON.parse(localStorage.getItem("data"))
    //     for(let j=0;j<30;j++){
    //         var row = table1.insertRow(-1);
    //         var cell1 = row.insertCell(0);
    //         var cell2 = row.insertCell(1);
    //         var cell3 = row.insertCell(2);
    //         var cell4 = row.insertCell(3);
            
    //         cell1.innerHTML = data.data[val+j].date
    //         cell2.innerHTML = data.data[val+j].areaName                
    //         cell3.innerHTML = data.data[val+j].confirmed                
    //         cell4.innerHTML = data.data[val+j].death               
    //         localStorage.setItem("value", val+j);
    //     }
    // }

    refresh.addEventListener('click', () => {
        table.innerHTML = '';
        fetchData();
        // if(localStorage.getItem("value") == 0){
        //     fetchData();
        // }
        // else{
        //     retrieveData();  
        // };
    })
})