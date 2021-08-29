import * as A from './styledA';
import Loading from '../../componentes/loading/Loading';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Api } from '../../api/Api';


export default function AtualizarUm(props){

    const state = props.location.state;
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const [ nome, setNome ] = useState(state.nome);
    const [ series, setSeries ] = useState(state.series);
    const [ reps, setReps ] = useState(state.reps);

    const item = {
        nome : nome,
        series : series,
        reps : reps
    }

    const submitHandler = async event => {
        setLoading(true);
        event.preventDefault();

        const request = await Api.buildApiPutRequest(Api.atualizarUrl(state._id), item).catch(e => {
            console.error('Erro ao tentar atualizar o item ao banco: ', e);
        })

        const result = await request.json();
        const id = result._id; 
        
        history.push(`/ver/${id}`, item); 
    }

    return(
        <>
            {loading ===true ? <Loading/> :
                <>
                    <h1>Adicione um exercício</h1>
            <A.Criar>
            <A.Form onSubmit={submitHandler}>
                <A.Label htmlFor="nome">Nome do exercício</A.Label>
                <A.Select onChange={e => setNome(e.target.value)} value ={item.nome} required>
                    <A.Option></A.Option>
                    <A.Option>Supino</A.Option>
                    <A.Option>Crucifixo</A.Option>
                    <A.Option>Cross Over</A.Option>
                    <A.Option>Pull Over</A.Option>
                    <A.Option>Remada curvada</A.Option>
                    <A.Option>Remada lateral</A.Option>
                    <A.Option>Flexora</A.Option>
                    <A.Option>Agachamento</A.Option>
                    <A.Option>Afundo</A.Option>
                </A.Select>

                <A.Label htmlFor="series">Números de séries:</A.Label>
                <A.Input type="number" min="1" onChange ={ e => setSeries(e.target.value)} value ={item.series} required/>

                <A.Label>Repetições:</A.Label>
                <A.Input type="number" min="1" onChange ={ e => setReps(e.target.value)} value ={item.reps} required/>

                <A.Input type='submit' value ='Adicionar'></A.Input>
            </A.Form> 
        </A.Criar>
                </>
            }
        </>
    )
}