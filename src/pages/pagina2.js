import * as React from "react"
import {  useEffect } from "react";
import Layout from "../components/layout"
import Ufs from "../components/Ufs"
import Municipios from "../components/Municipios";

const Pagina2 = () => {

  const [opcaoUf, setOpcaoUf] = React.useState({ key: "", value: "" });
  const [opcaoMunicipio, setOpcaoMunicipio] = React.useState({ key: "", value: "", uf: "" });

  useEffect(() => {
    if (opcaoUf.value.length > 0) {
      setOpcaoMunicipio({ ...opcaoMunicipio, uf: opcaoUf.key })
    }
  }, [opcaoUf]);

  return (
    <Layout>
      <h1>DADOS IBGE - Estados x Municípios</h1>
      <div>
        <p>Estados:</p>
        <Ufs setOpcaoUf={setOpcaoUf} />
        <p>Municípios: <b>{opcaoUf.value}</b></p>
        <Municipios uf={opcaoUf.key} setOpcaoMunicipio={setOpcaoMunicipio} />
      </div>
    </Layout>
  )
}
export default Pagina2

export const Head = () => <title>Dados Externos - IBGE</title>