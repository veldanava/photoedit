// MAIN SCRIPT JAVASCRIPT

let upload_img_box = document.querySelector('.upload_img_box');
let selectedImage = document.querySelector('#selectedImage');
let choose_image = document.querySelector('.choose_image');

let image_holder = document.querySelector('.image_holder');
let image = document.querySelector('#image');

let slider = document.querySelectorAll('.slider');
let show_value = document.querySelectorAll('.show_value');

let list_options = document.querySelectorAll('ul li');

let options = document.querySelector('.options');
let option = document.querySelectorAll('.option');

let clearAll = document.querySelector('#clearAll');
let remove_img_btn = document.querySelector('#remove_img_btn');


let canvas = document.querySelector('#image_canvas');
const context = canvas.getContext('2d');

let File_Name;
let Edited = false;


/*kontrol pemilihan gambar*/
upload_img_box.addEventListener("click", function () {
   selectedImage.click();
});


/*pilih gambar function*/
selectedImage.addEventListener("change", function () {
   const file = this.files[0];

   if (file) {
      const reader = new FileReader();
      File_Name = file.name;

      choose_image.style.display = "none";
      image_holder.style.display = "block";

      reader.addEventListener("load", function () {
         image.setAttribute("src", this.result);
      });

      reader.readAsDataURL(file);
      remove_img_btn.style.display = "block";
   }

   if (Edited == false) {
      Edited = true;
   }

})


/*function slider coy*/
for (let i = 0; i <= slider.length - 1; i++) {
   slider[i].addEventListener('input', editImage);
}

function editImage() {
   let bright = document.querySelector('#brightness');
   let blur = document.querySelector('#blur');
   let grey = document.querySelector('#greyScale');
   let hue = document.querySelector('#hue');
   let saturation = document.querySelector('#saturation');


   let brightValShow = document.querySelector('#brightVal');
   let blurValShow = document.querySelector('#blurVal');
   let greyValShow = document.querySelector('#greyVal');
   let hueValShow = document.querySelector('#hueVal');
   let saturationValShow = document.querySelector('#saturationVal');

   let brightVal = bright.value;
   let greyVal = grey.value;
   let blurVal = blur.value;
   let hueVal = hue.value;
   let satuVal = saturation.value;

   brightValShow.innerHTML = brightVal;
   blurValShow.innerHTML = blurVal;
   greyValShow.innerHTML = greyVal;
   hueValShow.innerHTML = hueVal;
   saturationValShow.innerHTML = satuVal;

   image.style.filter = 'grayscale(' + greyVal + '%) hue-rotate(' + hueVal + 'deg) brightness(' + brightVal + '%) blur(' + blurVal + 'px) saturate(' + satuVal + ')';
   context.filter = 'grayscale(' + greyVal + '%) hue-rotate(' + hueVal + 'deg) brightness(' + brightVal + '%) blur(' + blurVal + 'px) saturate(' + satuVal + ')';

   clearAll.style.transform = 'translateY(0px)';
}


/*kendali opsi*/
list_options.forEach((list_option, index) => {
   list_option.addEventListener('click', function () {


      if (image.getAttribute('src') == "") {
         alert("Choose Image First");
      } else {

         options.style.transform = 'translateY(0px)';

         if (Edited == true) {
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;

            for (let i = 0; i <= 4; i++) {

               if (index != i) {
                  list_options[i].classList.remove("active_option");
                  option[i].classList.remove("active_controller");

               } else {
                  this.classList.add("active_option");
                  option[i].classList.add("active_controller");
               }
            }

         } else {
            alert("Edit Your Image First");
         }

      }

   })
})


/*function download*/
function Download_btn() {

   if (image.getAttribute('src') != "") {

      if (Edited == true) {
         context.drawImage(image, 0, 0, canvas.width, canvas.height);
         var jpegUrl = canvas.toDataURL("image/jpg");

         const link = document.createElement("a");
         document.body.appendChild(link);

         link.setAttribute("href", jpegUrl);
         link.setAttribute("download", File_Name);
         link.click();
         document.body.removeChild(link);

      }
   }
}


/*clear*/
clearAll.addEventListener("click", function () {
   clearAllRangeValue();
})

function clearAllRangeValue() {
   image.style.filter = 'none';
   context.filter = 'none';

   for (let i = 0; i <= slider.length - 1; i++) {
      if (i == 0) {
         slider[i].value = '100';
      } else {
         slider[i].value = '0';
      }
   }

   editImage();
   clearAll.style.transform = 'translateY(150px)';
}

/*remove*/
remove_img_btn.addEventListener("click", function () {
   image.src = "";
   this.style.display = "none";
   choose_image.style.display = "block";
   image_holder.style.display = "none";
   options.style.transform = 'translateY(80px)';
   clearAllRangeValue();
})

// typedjs
var typed = new Typed('#logo', {
   /**
    * @property {array} strings strings to be typed
    * @property {string} stringsElement ID of element containing string children
    */
   strings: [
     'Halo, Selamat datang di Web saya...',
      'Silahkan Nikmati Fitur-Fitur Yang Sudah Disediakan...',
      'Framework yang dipakai tailwindcss, bootstrap, typed.js',
   ],
   stringsElement: null,
 
   /**
    * @property {number} typeSpeed type speed in milliseconds
    */
   typeSpeed: 50,
 
   /**
    * @property {number} startDelay time before typing starts in milliseconds
    */
   startDelay: 150,
 
   /**
    * @property {number} backSpeed backspacing speed in milliseconds
    */
   backSpeed: 100,
 
   /**
    * @property {boolean} smartBackspace only backspace what doesn't match the previous string
    */
   smartBackspace: true,
 
   /**
    * @property {boolean} shuffle shuffle the strings
    */
   shuffle: false,
 
   /**
    * @property {number} backDelay time before backspacing in milliseconds
    */
   backDelay: 999,
 
   /**
    * @property {boolean} fadeOut Fade out instead of backspace
    * @property {string} fadeOutClass css class for fade animation
    * @property {boolean} fadeOutDelay Fade out delay in milliseconds
    */
   fadeOut: true,
   fadeOutClass: 'typed-fade-out',
   fadeOutDelay: 500,
 
   /**
    * @property {boolean} loop loop strings
    * @property {number} loopCount amount of loops
    */
   loop: true,
   loopCount: Infinity,
 
  
 
   /**
    * @property {string} attr attribute for typing
    * Ex: input placeholder, value, or just HTML text
    */
   attr: null,
 
   /**
    * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
    */
   bindInputFocusEvents: false,
 
   /**
    * @property {string} contentType 'html' or 'null' for plaintext
    */
   contentType: 'html',
 
   /**
    * Before it begins typing
    * @param {Typed} self
    */
   onBegin: (self) => {},
 
   /**
    * All typing is complete
    * @param {Typed} self
    */
   onComplete: (self) => {},
 
   /**
    * Before each string is typed
    * @param {number} arrayPos
    * @param {Typed} self
    */
   preStringTyped: (arrayPos, self) => {},
 
   /**
    * After each string is typed
    * @param {number} arrayPos
    * @param {Typed} self
    */
   onStringTyped: (arrayPos, self) => {},
 
   /**
    * During looping, after last string is typed
    * @param {Typed} self
    */
   onLastStringBackspaced: (self) => {},
 
   /**
    * Typing has been stopped
    * @param {number} arrayPos
    * @param {Typed} self
    */
   onTypingPaused: (arrayPos, self) => {},
 
   /**
    * Typing has been started after being stopped
    * @param {number} arrayPos
    * @param {Typed} self
    */
   onTypingResumed: (arrayPos, self) => {},
 
   /**
    * After reset
    * @param {Typed} self
    */
   onReset: (self) => {},
 
   /**
    * After stop
    * @param {number} arrayPos
    * @param {Typed} self
    */
   onStop: (arrayPos, self) => {},
 
   /**
    * After start
    * @param {number} arrayPos
    * @param {Typed} self
    */
   onStart: (arrayPos, self) => {},
 
   /**
    * After destroy
    * @param {Typed} self
    */
   onDestroy: (self) => {}
 });
