function toggleModal() {
    var modal = document.getElementById("toggle");
    modal.style.display = modal.style.display === "none" || modal.style.display === "" ? "block" : "none";
  }
  
  export { toggleModal };
  
  
  function logout() {
    document.getElementById('btn_logout').addEventListener('click', function() {
      window.location.href = 'logout.html';
    });
  }
  
export { logout};

