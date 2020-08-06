import React from 'react';

import warningIcon from '../../assets/images/icons/warning.svg';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';

import './styles.css';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você que dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />

          <Input name="avatar" label="Avatar" />

          <Input name="whatsapp" label="whatsApp" />

          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Artes', label: 'Artes' },
              { value: 'Artes', label: 'Artes' },
              { value: 'Artes', label: 'Artes' },
              { value: 'Artes', label: 'Artes' },
              { value: 'Artes', label: 'Artes' },
            ]}
          />

          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horário disponíveis
            <button type="button">+ Novo horário</button>
          </legend>
          <div className="schedule-item">
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes', label: 'Artes' },
                { value: 'Artes', label: 'Artes' },
              ]}
            />
          </div>
          <Input name="from" label="Das" type="time" />
          <Input name="to" label="Até" type="time" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
