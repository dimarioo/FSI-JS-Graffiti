let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
let header1 = document.querySelectorAll('.dog-name')
for(let i = 0; i < header1.length; i++){
	header1[i].style.textAlign = 'left'
}
let footertext = document.querySelector('.footer')
footertext.style.color = 'red'

let dogImages = document.querySelectorAll('.dog-image')

for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.transform = 'rotate(180deg'
}



// Select some elements...