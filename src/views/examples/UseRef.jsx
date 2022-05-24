import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';


const UseRef = (props) => {

    const [value1, setValue1] = useState("");
    const count = useRef(0);

    useEffect(function () {
        count.current += 1;
    }, [value1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio #01" />

            <div>
                <span className="text">Valor: </span>
                <span className="text">{value1}[</span>
                <span className="text red">{count.current}</span>
                <span className="text">] </span>
            </div>
            <div>
                <input type="text"
                    className="input"
                    value={value1}
                    onChange={e => setValue1(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
