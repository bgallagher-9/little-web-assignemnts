var ajaxdata;
var bigImageItems = document.querySelector('#big-image-items').innerHTML;
var thumbnails = document.querySelector('#thumbnails');
var bigImage = document.querySelector('#big-image');
var thumbnailItems = document.querySelector('#thumbnail-items').innerHTML;
var selectImage = document.querySelector('#select-image');
var tNRow = document.querySelector('.tnrow');
var tNImages = document.querySelector('.tnimages');

$.ajax({
  url: '/api/pics'
})
.done(function(data) {
  ajaxData = data;
  // console.log(data);
  var html = '';
  for (var i = 0; i < data.pictures.length; i++) {
    html += Mustache.render(thumbnailItems, {
      index: i,
      thumbnail: data.pictures[i].thumbnail,
    });
  };
  thumbnails.innerHTML = html;
});
thumbnails.addEventListener('click', function(evtname) {
  selectImage.style.display = 'none';
  console.log(evtname);
  var tNImagesBorder = document.querySelector('.tnimages-border');

  if (tNImagesBorder !== null) {
    tNImagesBorder.classList.remove('tnimages-border');
  }
  if (evtname.target.tagName === 'IMG') {
    evtname.target.classList.add('tnimages-border')
  }
  var index = evtname.target.getAttribute('data-index');
  var picThing = ajaxData.pictures[index];
  var html = Mustache.render(bigImageItems, picThing);
  bigImage.innerHTML = html;
});
