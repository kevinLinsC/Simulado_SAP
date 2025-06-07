import React from 'react'

// Importação bootstrap
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

// Importação do contexto.
import { useContext } from "react";
import { AuthContext } from "../context/UserContext.jsx";

// Importação do useForm para mexer com o formulário.
import { useForm } from "react-hook-form";

import { useState } from 'react';

// Importação das funções de InserirUsuario e verificaEmail do hook.
import { useInserirLivro } from "../../hooks/useApi";

// Importação estilos.
import styles from './RegistrarLivro.module.css'

const RegistrarLivro = () => {
  const { usuarioId } = useContext(AuthContext);

  // Inicialização das funções.
  const { inserirLivro } = useInserirLivro();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [atLivro, setLivro] = useState("Quero ler");

  const onSubmit = async (dados) => {
    const dadosParaSalvar = {
      ...dados,
      usuarioId: usuarioId
    }

    alert("Cadastro efetuado com sucesso.")

    inserirLivro(dadosParaSalvar);
  }

  const onError = (errors) => {
    console.log("Erros: ", errors);
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '94vh'}}>
        <div className={styles.formulario}>
          <h1 className={styles.titulo}>Cadastre um novo livro</h1>
            <Container>
              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                  <Row style={{marginBottom: "20px"}}>
                    <Col>
                      <FloatingLabel
                        controlId='floatingInputTitulo'
                        label="Titulo*"
                      >
                        <Form.Control 
                          type='text'
                          placeholder='Titulo*'
                          {...register("titulo", {
                            required: "O titulo é obrigatório",
                            minLength: {
                              value: 1,
                              message: "O titulo deve conter pelo menos 2 caracteres",
                            },
                            maxLength: {
                              value: 100,
                              message: "O titulo deve conter no máximo 100 caracteres"
                            }
                          })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <Row style={{marginBottom: "20px"}}>
                    <Col>
                        <FloatingLabel
                          controlId='FloatingLabelNomeAutor'
                          label="Nome do autor*"
                        >
                          <Form.Control 
                            type='text'
                            placeholder='Nome do autor*'
                            {...register("nomeAutor", {
                                required: "O nome do autor é obrigatório",
                                minLength: {
                                    value: 1,
                                    message: "O nome do autor deve conter pelo menos 2 caracteres",
                                },
                                maxLength: {
                                    value: 75,
                                    message: "O nome do autor deve conter no máximo 75 caracteres"
                                }
                            })}
                          />
                          {errors.email && <p className="error">{errors.email.message}</p>}
                        </FloatingLabel>
                    </Col>
                  </Row>

                  <Row style={{marginBottom: "20px"}}>
                    <Col>
                        <FloatingLabel
                          controlId='FloatingLabelGenero'
                          label="Gênero*"
                        >
                          <Form.Control 
                            type='text'
                            placeholder='Gênero*'
                            {...register("genero", {
                                required: "O gênero é obrigatório",
                                minLength: {
                                    value: 1,
                                    message: "O gênero deve conter pelo menos 2 caracteres",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "O gênero deve conter no máximo 50 caracteres"
                                }
                            })}
                          />
                          {errors.email && <p className="error">{errors.email.message}</p>}
                        </FloatingLabel>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-status" className={styles.botao} style={{border: '0'}}>
                                {atLivro}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setLivro("Quero ler")}>Quero ler</Dropdown.Item>
                                <Dropdown.Item onClick={() => setLivro("Lendo")}>Lendo</Dropdown.Item>
                                <Dropdown.Item onClick={() => setLivro("Lido")}>Lido</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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

export default RegistrarLivro