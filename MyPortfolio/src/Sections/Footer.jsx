//pls work plssssssssss

const Footer = () => {
    return (
      <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Checkout My Resume:</p>
          <p>|</p>
          <p>
            <a 
              href="/assets/Nour-Allah new CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View CV
            </a>
          </p>
        </div>        
        <div className="flex gap-3">
          <a 
            href="https://github.com/NorPeK" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/nour-allah-bek-aa732b277/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <img src="assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2"/>
          </a>
        </div>
        <p className="text-white-500">
          Copyright &copy; 2025 Nour-Allah All Rights Reserved.
        </p>
      </section>
    )
  }
  
  export default Footer;
  //