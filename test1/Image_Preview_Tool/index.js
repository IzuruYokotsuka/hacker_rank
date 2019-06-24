document.addEventListener('DOMContentLoaded', function () {
  var dropArea = document.getElementById('dropArea');
  var output = document.getElementById('output');
  
  function organizeFiles(files) {
    var length = files.length, i = 0, file;
    
    for (; i < length; i++) {
      file = files[i];
      if (!file || file.type.indexOf('image/') < 0) {
        continue;
      }
      outputImage(file);
    }
  }
  
  function outputImage(blob) {
    var image = new Image();
    var blobURL = URL.createObjectURL(blob);
    image.src = blobURL;
    
    image.addEventListener('load', function () {
      URL.revokeObjectURL(blobURL);
      output.appendChild(image);
    });
  }
  
  dropArea.addEventListener('dragover', function (ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'copy';
    dropArea.classList.add('dragover');
  });
  
  dropArea.addEventListener('dragleave', function () {
    dropArea.classList.remove('dragover');
  });
  
  dropArea.addEventListener('drop', function (ev) {
    ev.preventDefault();
    dropArea.classList.remove('dragover');
    output.textContent = '';
    organizeFiles(ev.dataTransfer.files);
  });
  
  dropArea.addEventListener('click', function () {
    fileInput.click();
  });
  
  fileInput.addEventListener('change', function (ev) {
    output.textContent = '';
    organizeFiles(ev.target.files);
    fileInput.value = '';
  });
});