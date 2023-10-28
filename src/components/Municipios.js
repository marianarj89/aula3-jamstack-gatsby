import React from "react";
import { useState, useEffect } from "react";

export default function Municipios({ uf, setOpcaoMunicipio }) {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const opt = [{ key: "", value: "Selecione..." }];
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(res => res.json())
            .then(data => {
                data.forEach(mun => {
                    opt.push({ key: mun.id, value: mun.nome });
                });
                setOptions(opt);
            });
    }, [uf]);

    const handleChange = (event) => {
        setOpcaoMunicipio({ key: event.target.value, value: event.target[event.target.selectedIndex].text });
    }

    return (
        <div>
            <select name="municipios" onChange={handleChange}>
                {options.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}