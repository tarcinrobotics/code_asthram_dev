// Check if developer tools are open
//function isDevToolsOpen() {
//    let isOpen = false;
//  
//    // Create a span element with a custom size
//    const span = document.createElement('span');
//    Object.defineProperty(span, 'id', {
//      get: () => {
//        isOpen = true;
//      }
//    });
//  
//    // Output a log to the console, which triggers the getter of the span's id property
//    console.log(span);
//  
//    // Return whether the developer tools are open or not
//    return isOpen;
//  }
  
//  // Function to redirect if developer tools are open
//  function redirectToNewPage() {
//    if (isDevToolsOpen()) {
//      window.location.replace('https://tarcin.in');
//    }
//  }
//  
//  // Call the redirection function
//  redirectToNewPage();
//  