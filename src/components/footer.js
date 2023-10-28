import React from "react"
import * as footerStyles from "./footer.module.css"

export default function Footer(props) {
    return (
        <p className={footerStyles.footer}>
            © {props.copyrightYear} Mini Laboratório Gastby - Aula 3 | Mariana Sá Ribas
        </p>
    )
}