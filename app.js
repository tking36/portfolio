
//Carousel////Carousel////Carousel////Carousel//

$(() => {

  let currentImgIndex = 0;
  let numOfImages = $('.carousel-images').children().length - 1



$('.next').on('click', () => {
 $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

 if(currentImgIndex < numOfImages) {
  currentImgIndex ++
 } else {
  currentImgIndex = 0
 }

 $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
})


$('.previous').on('click', () => {
$('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

if(currentImgIndex > 0) {
  currentImgIndex --
} else {
  currentImgIndex = numOfImages
}

$('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

})

});

//Carousel////Carousel////Carousel////Carousel//

//Showing Divs//

$(() => {


  $('#bio').hide()
  $('#resume').hide()
  $('#projects').hide()


const show = () => {
  $('#greetingdiv').show()
  $('#bio').hide()
  $('#resume').hide()
  $('#projects').hide()
  $('#me').show()
}

const show2 = () => {
  $('#bio').show()
  $('#greetingdiv').hide()
  $('#resume').hide()
  $('#projects').hide()
    $('#me').show()

}
const show3 = () => {
  $('#resume').show()
  $('#bio').hide()
  $('#greetingdiv').hide()
  $('#projects').hide()
  $('#me').hide()

}
const show4 = () => {
  $('#projects').show()
  $('#bio').hide()
  $('#resume').hide()
  $('#greetingdiv').hide()
    $('#me').hide()



}

$('#h').on('click',show)
$('#b').on('click',show2)
$('#r').on('click',show3)
$('#p').on('click',show4)
})

//Showing Divs//

//Night/Day Mode//

$(() => {

let $body = $('body')

const darkMode = () => {
  $body.css('background', 'black')
}

const lightMode = () => {
  $body.css('background', '#476f9a')
}

$('#day').on('click',lightMode)

$('#night').on('click',darkMode)

})

//Night/Day Mode//
