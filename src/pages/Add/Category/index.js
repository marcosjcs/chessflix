import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Default from '../../Default';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function AddCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(initialValues);

  function setValue(chave, valor) {
    setCategory({
      ...category,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function handleNewCategory(e) {
    e.preventDefault();

    setCategories([...categories, category]);
    setCategory(initialValues);
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
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((categoria) => (
          <li key={categoria}>{categoria.title}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </Default>
  );
}
