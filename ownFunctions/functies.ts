function countDown(){

    let dateToday = Date.now();
  
    console.log(dateToday);
    
    let date2 = new Date("june 6, 2020 20:21").getTime();
    console.log(date2);
    
    let difference = date2 - dateToday;
    console.log(difference);
    let differenceInSeconds = Math.floor(difference/1000);
    console.log(differenceInSeconds);
    
    
    let days = Math.floor(((differenceInSeconds/60)/60)/24);
    console.log(days);
    let hours = Math.floor(((differenceInSeconds/60)/60) - (days * 24));
    console.log(hours);
    let minutes = Math.floor((((differenceInSeconds/60)) - ((days * 24) * 60))-(hours *60));
    console.log(minutes);
    
    let secondsMinus = (days*24*60*60) + (hours*60*60) + (minutes*60);
    let seconds = differenceInSeconds - secondsMinus;
    console.log(seconds);
    let dayString: string = days.toString();
    console.log("Days: " , days, " Hours: ", hours, " Minutes: ", minutes, " Seconds: " , seconds);
  
    let countDownString: string =  days  + " days " +  hours  + " hours " +  minutes  + " minutes " +  seconds +  " seconds";
    return countDownString;
  }
  
  countDown();
  