import React, { useState } from 'react';

function Productregistration() {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [provider, setProvider] = useState('');

  const state = {
    name,
    sku,
    description,
    price,
    provider,
  };

  const onSubmit = (event) => {
    console.log(state);
  };

  const cleanForm = (event) => {
    setName('');
    setSku('');
    setDescription('');
    setPrice('');
    setProvider('');
  };

  return (
    <div className="card">
      <div className="card-header">Cadastro de Produto</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>SKU *</label>
              <input
                type="text"
                className="form-control"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Description:</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Price *</label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Provider *</label>
              <input
                type="text"
                className="form-control"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <button className="btn btn-success" onClick={onSubmit}>
              Salvar
            </button>
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary" onClick={cleanForm}>
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productregistration;
