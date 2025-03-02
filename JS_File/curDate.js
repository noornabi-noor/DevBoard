function updateDate() {
    let now = new Date();

    let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    let formattedDate = now.toLocaleDateString('en-US', options); 

    let parts = formattedDate.split(', ');
    
    document.getElementById("dayName").innerText = parts[0] + " ,";  
    document.getElementById("fullDate").innerText = parts[1];       
}

updateDate();
