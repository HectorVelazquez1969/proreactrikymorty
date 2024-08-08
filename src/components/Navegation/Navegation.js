import  './Navegation.css';
export default function Navegation ({hoja} ) { 

  return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1 className="navbar-brand" >Ricky Morty</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
    
             <li className={hoja === "Characters" ? "nav-link active": "nav-link" }  aria-current="page">Characters
            </li>
      
            <li className={hoja === "Contact" ? "nav-link active": "nav-link"} >Contact
      </li>
   
    </ul>
  </div>
</div>
</nav>


    )
}


