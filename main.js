
const p= document.querySelectorAll(".info p");
p.forEach((item)=>
{let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatumneque repellat aperiam corporislaborum non consequuntur expedita? Assumenda, blanditiis?"
    let words = text.split(/\s+/);

    // Initializing an empty array to hold the segmented paragraphs
    let segmentedParagraphs = [];
    
    // Looping through the words and grouping them into segments of 7 words each
    for (let i = 0; i < words.length; i += 7) {
        // Creating a substring from the current index up to 7 words ahead
        let segment = words.slice(i, i + 7).join(' ');
        
        // Pushing each segment into the segmentedParagraphs array
        segmentedParagraphs.push(`<p>${segment}</p>`);
    }
    
    // Joining the segmented paragraphs into a single string
    let finalString = segmentedParagraphs.join('');
item .innerHTML = finalString
})

$('.openNavBtn').on('click', function(){
   $('.sideNav').fadeIn(1000)

})

$('.closebtn').on('click', function(event){
    event.stopPropagation()
    $('.sideNav').fadeOut(1000)
  
 })

$('.singer-title').on('click', function(e)
{
  $(e.target).parent().addClass('active');
  $(e.target).parent().siblings().removeClass('active');
  $(e.target).parent().siblings().children("div").fadeOut(500)
  $('.active').children("div").toggle(500)
})

/**date countdown */

const finalDate = new Date('2025-12-31T23:59:59');

function getRemainingTime(finalDate){
    const total = Date.parse(finalDate) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
function updateTime(){
let t = getRemainingTime(finalDate)
$('.clock').children("#day").html(t.days)
$('.clock').children("#hour").html(t.hours)
$('.clock').children("#minute").html(t.minutes)
$('.clock').children("#second").html(t.seconds)

}
updateTime();
const timeinterval = setInterval(updateTime, 1000);

$("#about").on("input", function(){
  console.log(this)
  let numLetters = $(this).val().length;
 let remaining = 100 - numLetters

 console.log($('#about').val().length)
 console.log(remaining)
 if (numLetters > 100 || remaining < 0)
 {
  Swal.fire(
    '100 letters only!',
    'max letters reached.',
    'danger'
)
   }
 else{
  
  $('#chars').html(remaining)
 }
 
})