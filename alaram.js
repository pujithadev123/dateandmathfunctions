function alaramRing(){
    let prsntTime= new Date()
    let alarmTime= new Date()
    alarmTime.setHours(16)
    alarmTime.setMinutes(20)
    alarmTime.setSeconds(0)

    let timDiff=alarmTime-prsntTime
    console.log(timDiff)

    setTimeout(()=>{
        alert("your alaram is ringing ")
    },timDiff)

    console.log("your alaram will ring at 8:20")

}
alaramRing()