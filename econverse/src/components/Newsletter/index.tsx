import Button from '../Button';
import Input from '../Input';
import './Newsletter.scss';

function Newsletter() {
  return (
    <section className='newsletter'>
      <div>
        <h1>Inscreva-se na nossa newsletter</h1>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>      
      </div>
      <form>
        <div className='info'>
          <Input type='text' placeholder='Digite seu nome'/>
          <Input type='text' placeholder='Digite seu e-mail'/>
          <Button type='news'>INSCREVER</Button>
        </div>
        <div className='check'>
          <Input type='checkbox'/>
          <p>Aceito os termos e condições</p>
        </div>
      </form>
    </section>
  )
}

export default Newsletter;