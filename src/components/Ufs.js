import React from 'react'
import { useState, useEffect } from 'react'

export default function Ufs ({ setOpcaoUf }) {
    const [options, setOptions] = useState([]);
    
    useEffect (() => {  
        
        const opt = [{ key: "", value: "Selecione o estado" }];
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(res => res.json())
        .then(data => {
            data.forEach(uf => {
                opt.push({ key: uf.id, value: uf.nome });
            });
            setOptions(opt);
        })
        
    }, []);

    const handleChange = (event) => {
        setOpcaoUf({ key: event.target.value, value: event.target[event.target.selectedIndex].text });
    }

    return (
        <div>
            <select name="uf" onChange={handleChange}>
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