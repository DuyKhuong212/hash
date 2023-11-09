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
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
function openModal(text) {
  modal.style.display = 'block';
  modalText.textContent = text;
}

modalText.addEventListener('click', function () {
  // Tạo một vùng chọn (range) cho nội dung modalText
  const range = document.createRange();
  range.selectNodeContents(modalText);

  // Lựa chọn nội dung trong vùng chọn
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  // Sao chép nội dung đã chọn
  document.execCommand('copy');

  // Bỏ chọn sau khi sao chép
  selection.removeAllRanges();

  // Thông báo cho người dùng nếu nội dung đã được sao chép
  alert('Nội dung đã được sao chép!');
  return;
});

// Hàm để đóng modal
function closeModal() {
  modal.style.display = 'none';
  modalText.textContent = '';
}

// Hàm để cập nhật kích thước modalText dựa trên kích thước hiện tại của màn hình
function updateModalTextSize() {
  const modalText = document.getElementById('modalText');
  const screenWidth = window.innerWidth;

  // Điều chỉnh kích thước tùy thuộc vào kích thước màn hình
  if (screenWidth < 768) {
    modalText.style.fontSize = '14px'; // Điều chỉnh kích thước phù hợp
  } else {
    modalText.style.fontSize = '16px'; // Điều chỉnh kích thước phù hợp cho màn hình lớn hơn
  }
}

// Thêm sự kiện resize để theo dõi thay đổi kích thước màn hình
window.addEventListener('resize', updateModalTextSize);

// Gọi hàm để cài đặt kích thước ban đầu
updateModalTextSize();

// Gắn sự kiện click cho nút mã hóa, giải mã, và đóng modal
document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText);
document.getElementById('closeModal').addEventListener('click', closeModal);
