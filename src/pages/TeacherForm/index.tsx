import React, { useCallback, useRef, useState, ChangeEvent } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import warningIcon from '../../assets/images/icons/warning.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';
import { useAuth } from '../../hooks/auth';
import { useLoading } from '../../hooks/loading';
import { useToast } from '../../hooks/toast';
import getValidationErros from '../../utils/getValidationErros';
import { Container, Content, ContainerForm, ScheduleItem } from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { addLoading, removeLoading } = useLoading();
  const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        addLoading({
          loading: true,
          description: 'Aguarde ...',
        });

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val) => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), 'null'], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        /*
      const {
        name,
        email,
        old_password,
        password,
        password_confirmation,
      } = data;

      const formData = {
        name,
        email,
        ...(old_password
          ? {
              old_password,
              password,
              password_confirmation,
            }
          : {}),
      };
      const res = await api.put('/profile', formData);

      updateUser(res.data); */

        // history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Cadastro efetuado',
          description: 'Cadastro efetuado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Falha no cadastro!',
          description: 'Falha ao tentar fazer o cadastro, tente novamente!',
        });
      } finally {
        removeLoading();
      }
    },
    [addToast, addLoading, removeLoading, history, updateUser],
  );

  return (
    <Container>
      <Content>
        <PageHeader
          title="Que incrível que você que dar aulas"
          description="O primeiro passo é preencher esse formulário de inscrição"
        />
        <ContainerForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <header>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados
              </p>
              <Button type="submit">Confirmar mudanças</Button>
            </header>

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
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo horário
                </button>
              </legend>
              {scheduleItems.map((scheduleItem) => {
                return (
                  <ScheduleItem key={scheduleItem.week_day}>
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
                    <Input name="from" label="Das" type="time" />
                    <Input name="to" label="Até" type="time" />
                  </ScheduleItem>
                );
              })}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados
              </p>
            </footer>
          </Form>
        </ContainerForm>
      </Content>
    </Container>
  );
};

export default TeacherForm;
