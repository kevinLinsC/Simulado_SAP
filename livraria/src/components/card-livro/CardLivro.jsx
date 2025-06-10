import Button from 'react-bootstrap/Button'
import { useDeletaLivro } from "../../hooks/useApi"

const CardLivro = () => {
    const { deletarLivro } = useDeletaLivro();

    const handleDelete = async () => {
        const deletado = await deletarLivro(props.id);
        alert("Livro deletado com sucesso");
        window.location.reload();
    }

  return (
    <div>
        <Card border="primary" style={{width: '18rem'}}>
            <Card.Body>
                <Card.Text>
                    <b>Título:</b>{props.titulo}
                </Card.Text>

                <Card.Text>
                    <b>Autor:</b>{props.autor}
                </Card.Text>

                <Card.Text>
                    <b>Gênero:</b>{props.genero}
                </Card.Text>

                <Card.Text>
                    <b>Dono:</b>{props.usuario}
                </Card.Text>

                <Button
                    size='lg'
                    variant='primary'
                    type='button'
                    href={`/Editar-livro/${props.id}`}
                    className='me-3'
                >
                    Editar
                </Button>

                <Button
                    size='lg'
                    variant='danger'
                    type='button'
                    onClick={handleDelete}
                >
                    Deletar
                </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default CardLivro