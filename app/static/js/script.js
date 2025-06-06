const MAX_FILE_SIZE = 2 * 1024 * 1024;
// Attach event listeners to each input on page load
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.image-input');
  inputs.forEach(input => {
    input.addEventListener('change', () => validateFile(input));
  });
});

function validateFile(input) {
  const file = input.files[0];
  if (file && file.size > MAX_FILE_SIZE) {
    alert(`${file.name} exceeds the 2MB limit.`);
    input.value = ''; // Clear the file input
  }
}

async function handleUpload(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const inputs = form.querySelectorAll('.image-input');

  // Validate file sizes
  for (let input of inputs) {
    const file = input.files[0];
    if (file && file.size > MAX_FILE_SIZE) {
      alert(`${file.name} exceeds the 2MB limit.`);
      return false;
    }
  }

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData
    });

    const result = await response.json();

    if (response.ok) {
      alert('Upload successful!');
      console.log(result);
      await fetchAndDisplayImages(); // ✅ fetch images and update UI
    } else {
      alert(result.error || 'Upload failed');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred during upload.');
  }

  return false;
}

async function fetchAndDisplayImages() {
  try {
    const res = await fetch('/images');
    const data = await res.json();

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous

    data.images.forEach(img => {
      const imgEl = document.createElement('img');
      imgEl.src = img.image_url;
      imgEl.alt = img.file_name;
      imgEl.style.width = '200px';
      imgEl.style.margin = '10px';
      gallery.appendChild(imgEl);
    });
  } catch (err) {
    console.error('Failed to load gallery:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.image-input');
  inputs.forEach(input => {
    input.addEventListener('change', () => validateFile(input));
  });

  fetchAndDisplayImages(); // ✅ Load gallery on page load
});
