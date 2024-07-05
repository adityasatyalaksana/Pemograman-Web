//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

// javascript.js

$(document).ready(function() {
    $('#bookingForm').submit(function(e) {
      e.preventDefault();
      
      // Simpan data dari form
      var name = $('#name').val();
      var email = $('#email').val();
      var phone = $('#phone').val();
      var date = $('#date').val();
      var message = $('#message').val();
      
      // Kirim data ke email, atau lakukan validasi sesuai kebutuhan
      
      // Tampilkan pesan konfirmasi
      alert('Booking request sent!\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nDate: ' + date + '\nMessage: ' + message);
      
      // Reset form
      $('#bookingForm')[0].reset();
    });
  });
  
  // Ambil semua elemen gambar
const images = document.querySelectorAll('.image-container img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');

// Iterasi semua gambar dan tambahkan event listener untuk munculkan modal
images.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.getAttribute('data-title');
  });
});

// Cari tombol close untuk menutup modal
const closeBtn = document.getElementsByClassName('close')[0];

// Ketika pengguna klik close button, tutup modal
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});
