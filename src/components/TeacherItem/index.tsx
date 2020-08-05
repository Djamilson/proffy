import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/10201661?s=400&u=70408723266c44771a9c4b10948b3b00614dda2a&v=4"
          alt="Foto"
        />
        <div>
          <span>Djamilson</span>
        </div>
      </header>

      <p>
        kjhkjhdkhaf jhdkjhf kajshdkfj hksdjhfkjashdkjfhkjh
        <br />
        <br />
        As pessoas têm a expectativa de experiências digitais cada vez mais
        rápidas e melhores. Isso inclui o mobile. Contudo, a emoção da busca –
        seja por promoções de hotéis para uma viagem de fim de semana ou por um
        novo par de tênis de corrida – com frequência acaba prejudicada por
        sites mobile lentos.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
