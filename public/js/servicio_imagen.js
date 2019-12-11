$(function () {
  let imagenUrl = '';

  //ConfiguracionCloudinary
  //with credentials available on
  // your cloudinary account dashboard
  $.cloudinary.config({ cloud_name: 'adastra', api_key: '824274447559917' });

  //Upload button
  let uploadButton = $('#btnSeleccionarImagen');

  //Upload button event
  uploadButton.on('click', function (e) {
    //Initiate upload
    cloudinary.openUploadWidget({ cloud_name: 'adastra', upload_preset: 'bydp1axd', tags: ['cgal'] },
      function (error, result) {
        if (error) console.log(error);
        //if no Error, log img data to console
        let id = result[0].public_id;

        imagenUrl = 'https://res.cloudinary.com/adastra/image/upload/' + id;
        document.querySelector('#portada').src = imagenUrl;
      });
  });
})

function processImage(id) {
  let options = {
    client_hints: true,
  };
  return $.cloudinary.url(id, options);
};

