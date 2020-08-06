import React from 'react';

import PageHeader from '../../components/PageHeader';
import './styles.css';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Química', label: 'Química' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Artes', label: 'Artes' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '5', label: 'Sábado' },
            ]}
          />

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
