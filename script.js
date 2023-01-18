var time = document.getElementById('time')
var interval
var sec = 00
var min = 00
var hr = 00
var CheckStart = false

function StartClick() {
    Watch()
    if (CheckStart == false) {
        interval = setInterval(Watch, 1000)
        CheckStart = true
    }
}

function PauseClick() {
    clearInterval(interval)
    CheckStart = false


}

function StopClick() {
    clearInterval(interval)
    sec = 0
    min = 0
    hr = 0
    time.innerHTML = '00:00:00'
    CheckStart = false

}

function Watch() {
    sec++
    time.innerHTML = TwoDigits(hr) + ':' + TwoDigits(min) + ':' + TwoDigits(sec)
    if (sec >= 60) {
        min++
        sec = 00
        if (min >= 60) {
            hr++
            min = 00
        }
    }
}

function TwoDigits(num) {
    if (num < 10) {
        return ('0' + num)

    } else {
        return (num)
    }

}