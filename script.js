fetch('gallery.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxDownload = document.getElementById('lightboxDownload');
    const closeBtn = document.getElementById('closeBtn');

    images.forEach((src, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = src;
      img.alt = `Photo ${index + 1}`;
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
        lightboxDownload.href = src;
        lightboxDownload.download = `photo${index + 1}.jpg`;
      });

      const downloadLink = document.createElement('a');
      downloadLink.href = src;
      downloadLink.download = `photo${index + 1}.jpg`;
      downloadLink.className = 'download-btn';
      downloadLink.innerText = 'Download';

      item.appendChild(img);
      item.appendChild(downloadLink);
      gallery.appendChild(item);
    });

    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    });
  });
