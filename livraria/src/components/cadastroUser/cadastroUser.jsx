import React from 'react'

// Importação bootstrap
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

// Importação do useForm para mexer com o formulário.
import { useForm } from "react-hook-form";

// Importação das funções de InserirUsuario e verificaEmail do hook.
import { useInserirUsuario } from "../../hooks/useApi";

// Importação estilos.
import styles from './cadastroUser.module.css'


// Contexto de autenticação
import { useContext } from "react";
import { AuthContext } from "../context/UserContext.jsx";

const cadastroUser = () => {

  // Inicialização das funções.
  const { inserirUsuario } = useInserirUsuario();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (dados) => {
    alert("Cadastro efetuado com sucesso.");

    const resp = await inserirUsuario(dados);
    
    localStorage.setItem("id", resp.id)
  }

  const onError = (errors) => {
    console.log("Erros: ", errors);
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '94vh'}}>
        <div className={styles.formulario}>
          <h1 className={styles.titulo}>Cadastre um novo usuário</h1>
            <Container>
              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                  <Row style={{marginBottom: "20px"}}>
                    <Col>
                      <FloatingLabel
                        controlId='floatingInputNome'
                        label="Nome*"
                      >
                        <Form.Control 
                          type='text'
                          placeholder='Nome*'
                          {...register("nome", {
                            required: "O nome é obrigatório",
                            pattern: {
                              value: /^[A-Za-zÀ-ÿ\s]+$/,
                              message: "Nome inválido",
                            },
                            minLength: {
                              value: 2,
                              message: "O nome deve conter pelo menos 2 caracteres",
                            },
                            maxLength: {
                              value: 75,
                              message: "O nome deve conter no máximo 75 caracteres"
                            }
                          })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                        <FloatingLabel
                          controlId='FloatingLabelEmail'
                          label="E-mail"
                        >
                          <Form.Control 
                            type='text'
                            placeholder='E-mail'
                            {...register("email", {
                              required: "O e-mail é obrigatório",
                              maxLength: {
                                value: 100,
                                message: "O e-mail não pode conter mais do que 100 caracteres."
                              },
                              pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "Email inválido",
                              },
                              validate: (value) => value.includes('@') || "E-mail inválido"
                            })}
                          />
                          {errors.email && <p className="error">{errors.email.message}</p>}
                        </FloatingLabel>
                    </Col>
                  </Row>

                  <Container className={styles.caixaBotao}>
                    <Button className={styles.botao} type="submit">Cadastrar</Button>
                  </Container>
              </Form>
            </Container>
        </div>
    </div>
  )
}

export default cadastroUser