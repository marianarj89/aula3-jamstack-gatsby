import React from "react";
import * as footerStyles from "./footer.module.css";

export default function Footer(props) {
    return (
        <p className={footerStyles.footer}>
            {props.copyrightYear} Lab Aula 3 - Gatsby JAMstack </p>
    )
}