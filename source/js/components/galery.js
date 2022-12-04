import '../vendor/lightbox';
import '../vendor/lg-video';

const myVideos = [...document.querySelectorAll('[data-video]')]

myVideos.map(function(video){
    lightGallery(video), {
        controls: 0,
        showinfo: 0,
        rel: 0
    }
})



