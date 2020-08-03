import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Default from '../../Default';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default function AddCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  function handleNewCategory(e) {
    e.preventDefault();

    setCategories([...categories, values]);
    clearForm();
  }

  useEffect(() => {
    
    const URL = window.location.href.includes('localhost') 
          ? 'http://localhost:8080/categories' 
          : 'https://chessflix.herokuapp.com/categories'; 
    fetch(URL)
      .then(async (response) =>{
      if(response.ok) {
        const data = await response.json();
        setCategories(data);
        return; 
      }
      throw new Error('Não foi possível carregar os dados.');
      })
    
  }, []);

  return (
    <Default>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={handleNewCategory}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </Default>
  );
}
