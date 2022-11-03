// $(() => {
//
// $('div').on('click', function() {
//     $(this).toggleClass('show-description');
// })
//
// })





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



$(() => {


  $('#bio').hide()
  $('#resume').hide()
  $('#projects').hide()


const show = () => {
  $('#greeting').toggle()
  $('#bio').hide()
  $('#resume').hide()
  $('#projects').hide()
}

const show2 = () => {
  $('#bio').toggle()
  $('#greeting').hide()
  $('#resume').hide()
  $('#projects').hide()
}
const show3 = () => {
  $('#resume').toggle()
  $('#bio').hide()
  $('#greeting').hide()
  $('#projects').hide()
}
const show4 = () => {
  $('#projects').toggle()
  $('#bio').hide()
  $('#resume').hide()
  $('#greeting').hide()
}

$('#h').on('click',show)
$('#b').on('click',show2)
$('#r').on('click',show3)
$('#p').on('click',show4)


})
