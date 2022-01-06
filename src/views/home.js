import React from 'react';

function Home() {
  const url = '#';
  return (
    <div className="jumbotron">
      <h1 className="display-3">Bem Vindo!</h1>
      <p className="lead">
        Este é o seu sitema! Utilize a barra de navegação para acessar as
        páginas.
      </p>
      <hr className="my-4" />
      <p className="lead">
        <a className="btn btn-primary btn-lg" href={url} role="button">
          Cadastrar
        </a>
      </p>
    </div>
  );
}

export default Home;
