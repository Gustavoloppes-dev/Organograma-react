import './Rodape.css';

const Rodape = () => {
    return(
        <section className='footer'>
            <ul>
                <li> 
                    <a href='facebook.com' target='_blank'>
                        <img src='/imagens/fb.png' alt='Logo do Facebook'/>
                    </a>
                </li>
                <li> 
                    <a href='twitter.com' target='_blank'>
                        <img src='/imagens/tw.png' alt='Logo do Twitter'/>
                    </a>
                </li>
                <li> 
                    <a href='instagram.com' target='_blank'>
                        <img src='/imagens/ig.png' alt='Logo do Instagram'/>
                    </a>
                </li>
            </ul>
            <img src='/imagens/logo.png' alt='Logo do Organo'/>
            <p>Desenvolvido por Gustavo Lopes.</p>
        </section>
    )
}

export default Rodape;
