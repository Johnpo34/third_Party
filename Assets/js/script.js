var date = moment().format('dddd, MMMM Do, YYYY');
var currentTime = moment().hours()
var timeBlock = $(".time-block")

$("#currentDay").text(date);

setColor()
// Here is setting different colors to each the past, present, and future
function setColor() {
    timeBlock.each(function() {
        var hour = $(this).attr('id')

        if (currentTime > hour) {
            $(this).addClass('past')
        } else if (currentTime == hour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}
// 
$('.saveBtn').on('click', function() {
    var id = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    console.log(id , task);
    localStorage.setItem(id, task)
    showTask()
})

showTask()
// this is calling on all local storage that is already inputed
function showTask() {
    for (var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $('#' + i).text(currentTask)
    }
}