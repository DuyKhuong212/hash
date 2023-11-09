// Hàm để mã hóa chuỗi sử dụng AES
function encryptText() {
  const text = document.getElementById('text').value;
  const encrypted = CryptoJS.AES.encrypt(text, '').toString();
  document.getElementById('encryptedText').textContent = encrypted;
  document.getElementById('text').value = '';
  openModal(encrypted);
}

// Hàm để giải mã chuỗi
function decryptText() {
  const encryptedText = document.getElementById('text').value;
  const bytes = CryptoJS.AES.decrypt(encryptedText, '');
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  document.getElementById('text').value = decrypted;
  document.getElementById('text').value = '';
  openModal(decrypted);
}

// Hàm để mở modal
function openModal(text) {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modalText');
  modal.style.display = 'block';
  if (text.length > 20) {
    modalText.innerHTML = text.slice(0, 20) + '<br>' + text.slice(20);
    return;
  }
  
  modalText.textContent = text;
}

// Hàm để đóng modal
function closeModal() {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modalText');
  modal.style.display = 'none';
  modalText.textContent = '';
}

// Gắn sự kiện click cho nút mã hóa, giải mã, và đóng modal
document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText);
document.getElementById('closeModal').addEventListener('click', closeModal);
