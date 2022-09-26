import React from 'react';

function Item(props) {
  
  <Modal isOpen={this.state.modalInsertar}>

  <ModalHeader>
    <div><h3>Insertar registro</h3></div>
  </ModalHeader>

  <ModalBody>

  <FormGroup>
      <label>
        ID:
      </label>

      <input
        className="form-control"
        readOnly
        type="text"
        value={this.state.data.length+1}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Fecha:
      </label>

      <input
        className="form-control"
        name='Fecha'
        type="date"
      />
    </FormGroup>

    <FormGroup>
      <label>
        Cliente:
      </label>

      <input
        className="form-control"
        name='Cliente'
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Empresa Envio:
      </label>

      <input
        className="form-control"
        name='Empresa Envio'
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Tracking:
      </label>

      <input
        className="form-control"
        name='Tracking'
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Currier:
      </label>

      <input
        className="form-control"
        name='Currier'
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Via:
      </label>

      <input
        className="form-control"
        name='Via'
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Cantidad Pieza:
      </label>

      <input
        className="form-control"
        name='Cantidad Pieza'
        type="Number"
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Peso:
      </label>

      <input
        className="form-control"
        name='Peso'
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Costo Envio:
      </label>

      <input
        className="form-control"
        name='Costo Envio'
        type="Number"
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup>
      <label>
        Status:
      </label>

      <input
        className="form-control"
        name='Status'
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>
  </ModalBody>

  <ModalFooter>
    <button color='primary' onClick={()=>this.insertar()}>
      Insertar
    </button>
    <button color="danger" onClick={()=>this.ocultarModalInsertar()}>
      cancelar
    </button>
  </ModalFooter>
</Modal>
}

export { Item };