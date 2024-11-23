let a= Date()
console.log(a)


let b=new Date()
console.log(b)
console.log(b.getFullYear())
console.log(b.getMonth())
console.log(b.getDate())
console.log(b.getDay())
console.log(b.getHours())
console.log(b.getMinutes())
console.log(b.getSeconds())
console.log(b.getMilliseconds())
console.log(b.getTime())

let c=new Date()
console.log(c.setFullYear(2025))
console.log(c.setSeconds(28))
console.log(c.toDateString())
console.log(c.toTimeString())


let d=new Date()
console.log(d.toLocaleDateString())
console.log(d.toLocaleTimeString())



console.log(Math.round(4.6))
console.log(Math.round(4.49))

console.log(Math.floor(423.59))
console.log(Math.floor(-4.49))
console.log(Math.floor(-2.7))


console.log(Math.ceil(4.1))
console.log(Math.ceil(-0.18))
console.log(Math.ceil(1.3))

console.log(Math.max(1,2,3,0,-9,0))
console.log(Math.min(1,2,3,0,-9,0))

console.log(Math.abs(-7))
console.log(Math.abs(6))

console.log(Math.sqrt(169))
console.log(Math.pow(5,2))

let t="bunny"
function f(){
    // console.log("hii+${how are you+all")
    console.log(`hii how are you  ${t}`)
}
f()


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



