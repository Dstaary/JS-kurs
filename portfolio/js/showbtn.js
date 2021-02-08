function showBtnFn() {
    let heightGallery = document.getElementById('gallery').offsetHeight;
    const showBtn = document.getElementById('showbtn');

    if(heightGallery >= 800) {
        showBtn.classList.add('btn-show');
    } else {
        showBtn.classList.remove('btn-show');
    }
}