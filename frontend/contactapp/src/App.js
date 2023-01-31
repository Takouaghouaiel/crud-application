import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import React, { useState ,useEffect,handleShow,show,handleClose} from 'react';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux';
import { listercontacts ,ajoutercontacts, supprimercontact,modifiercontact} from './action/contact.actions';


function App() {
  const dispatch = useDispatch();
  const contacts =useSelector(state=> state.contact.contacts.contactlist)
  useEffect(()=>{
    dispatch(listercontacts())
  },[])

  const [id, setId] = useState('');
  const [nom, setNom] = useState('');
  const [numero, setNumero] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Edit, setEdit] = useState(false);

  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = (id) =>{

    contacts.forEach( c => {
        if (c._id = id){
          setId(c.id)
          setNom(c.nom)
          setNumero(c.numero)
          console.log(c);
        }
    })
    console.log(id)

    setEdit(true);
  } 

// function delete contact 
  const deletecontact = async()=> {

   await dispatch(supprimercontact(id))
   await dispatch(listercontacts())
  }

  // function update contact 
  const updatecontact = async(id)=> {

    console.log(nom);
    console.log(numero);
  
    const data = {
      nom,
      numero
    }

    await dispatch(modifiercontact(id,data))
    await dispatch(listercontacts())
    // close modal
    handleCloseEdit()
    // reset form 
    setNom('')
    setNumero('')
    setId('')
  }

// function add contact 
  const addcontact = async() => {

    // console.log(nom);
    // console.log(numero);

    const data = {
      nom,
      numero
    }
    await dispatch(ajoutercontacts(data))
    await dispatch(listercontacts())
    // close modal
    handleClose()
    // reset form 
    setNom('')
    setNumero('')
  }
  // zedna async w les await bch les actions yestanew baath'hom when you add a contact yamlk lister contact direct 
  
  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Contact Application</Navbar.Brand>
      </Container>
    </Navbar>

    {/* table */}
    <div className="p-4">
    <Button variant="secondary" onClick={handleShow}>Ajouter</Button>{' '}
    <h1>La liste des contacts</h1>
    { 
        contacts && contacts.length >0 ? 
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Numero</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map( (contact,index)=>
          <tr key={index}>
          <td>{index +1}</td>
          <td>{contact.nom}</td>
          <td>{contact.numero}</td>
          <td>
          <Button variant="success" className='me-0.1' onClick={ ()=>handleShowEdit(contact._id)}>Modifier</Button>{' '}
          <Button variant="danger" onClick={()=> deletecontact(contact._id)}>Supprimer</Button>{' '} 
          </td>
        </tr>)
       
        }  
      
      </tbody>
    </Table>
    
    : <Alert variant='info'>Aucun contact trouvée...
      </Alert>
    }
     </div>
    {/* POPUP ADD */}
<>
<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton >
    <Modal.Title>Ajouter Contact</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Nom</Form.Label>
  <Form.Control type="text" value={nom} onChange={(e)=>{ setNom(e.target.value)}} placeholder="Donner le nom du contact" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Numéro</Form.Label>
  <Form.Control type="text" value={numero} onChange={(e)=>{ setNumero(e.target.value)}} placeholder="Donner le numero du contact" />
</Form.Group>
</Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={addcontact}>
      Enregister
    </Button>
    <Button variant="secondary" onClick={handleClose}>
      Annuler
    </Button>
  </Modal.Footer>
</Modal>
</>
{/* POPUP EDIT */}
<>
<Modal show={Edit} onHide={handleCloseEdit}>
  <Modal.Header closeButton >
    <Modal.Title>Modifier Contact</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Nom</Form.Label>
  <Form.Control type="text" value={nom} onChange={(e)=>{ setNom(e.target.value)}} placeholder="Donner le nom du contact" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Numéro</Form.Label>
  <Form.Control type="text" onChange={(e)=>{ setNumero(e.target.value)}} placeholder="Donner le numero du contact" />
</Form.Group>
</Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={updatecontact}>
      Enregister Modification
    </Button>
    <Button variant="secondary" onClick={handleCloseEdit}>
      Annuler
    </Button>
  </Modal.Footer>
</Modal>
</>

   </div> 
  
  );
}
export default  App;