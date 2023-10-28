import React from "react"
import { Link } from "gatsby"
import "./layout.css"

export default function Layout ({ children }) {
    return ( 
        <main className="layout">
            <div className="header">
                <h3> Mini Projeto Solo JAMstack - Aula 3</h3>
                <nav className="topnav">
                    <Link to = "/"> Página Inicial </Link>
                    <Link to = "/pagina2"> Página 2 </Link>
                    <Link to = "/pagina3"> Página 3 </Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <div>
                <h3> Aqui vai o rodapé</h3>
            </div>
        </main>
    )
}