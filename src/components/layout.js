import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import Footer from "./footer"

export default function Layout ({ children }) {
    return ( 
        <main className="layout">
            <div className="header">
                <h3> Mini Projeto Solo JAMstack - Aula 3</h3>
                <nav className="topnav">
                    <Link to = "/"> .: HOME :. </Link>
                    <Link to = "/pagina2"> Dados Externos - IBGE</Link>
                    <Link to = "/pagina3"> Dados Internos - Tipycode </Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <Footer copyrightYear="2023" />
        </main>
    )
}