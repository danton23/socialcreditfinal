var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/douglas.jpg') {
      myImage.setAttribute ('src','images/douglasbench.jpg');
    } else {
      myImage.setAttribute ('src','images/douglas.jpg');
    }
