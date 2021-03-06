import {Route, Switch } from 'react-router-dom';
import * as C from './styledC';
import LerTodos from '../../paginas/criar/lertodos/LerTodos';
import Criar from '../../paginas/criar/Criar';
import LerUm from '../../paginas/lerUm/LerUm';
import DeletarTudo from '../../paginas/deletarTds/deletarTudo';
import DeletarUm from '../../paginas/deletarUm/DeletarUm';
import AtualizarUm from '../../paginas/atualizar/AtualizarUm';
import Sobre from '../../paginas/sobre/Sobre';


export default function Container(){
    return(
        <>
        <C.Container>
            <C.Lateral>
                <p>Anúncio</p>
                <C.Img src='http://www.naturaltechsuplementos.com.br/img/sorteio-instagram-1.jpeg'></C.Img>
            </C.Lateral>
            <C.Central>
                <Switch>
                    <Route exact={true} path="/" component={LerTodos}/>
                    <Route path="/criar" component={Criar}/>
                    <Route path="/ver/:id" component={LerUm}/>
                    <Route path="/deletartodos" component={DeletarTudo}/>
                    <Route path="/deletar/:id" component={DeletarUm}/>
                    <Route path="/atualizar/:id" component={AtualizarUm}/>
                    <Route path="/sobre" component={Sobre}/>
                </Switch>
            </C.Central>
        </C.Container>
        </>
    )
}