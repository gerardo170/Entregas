import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";

function InsertChain(props){
    <>
<Modal isOpen={this.state.modalInsertar}>

<ModalHeader>
  <div><h3>Insertar registro</h3></div>
</ModalHeader>

<ModalBody>

<FormGroup>
    <label>
      Fecha:
    </label>

    <input
      className="form-control"
      name='Fecha'
      type="date"
      onChange={this.handleChange}
    />
  </FormGroup>

<FormGroup>
    <label>
      Cedula:
    </label>

    <input
      className="form-control"
      name='Cedula'
      type="text"
      onChange={this.handleChange}
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
    <label>Empresa_Envio:</label>
    <select name="Empresa_Envio" className="form-select" aria-label="Default select example" onChange={this.handleChange}>
      <option selected value="Seleccione">
      Seleccione
      </option>

      <option value="Fedex">
      Fedex
      </option>
      <input name="Empresa_Envio" type="select" />
    </select>
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
    <label>Currier:</label>
    <select name="Currier" className="form-select" aria-label="Default select example" onChange={this.handleChange}>
    <option selected value="Seleccione">
      Seleccione
      </option>
      <option value="Opcion 1">Opcion 1</option>
      <input name="Currier" type="select" />
    </select>
  </FormGroup>


  <FormGroup>
    <label>Via:</label>
    <select name="Via" className="form-select" aria-label="Default select example" onChange={this.handleChange}>
    <option selected value="Seleccione">
      Seleccione
      </option>
      <option value="Maritima">Maritima</option>
      <option value="Aerea">Aerea</option>
      <input name="Via" type="select" />
    </select>
  </FormGroup>

  <FormGroup>
    <label>
      Cantidad_Pieza
    </label>

    <input
      className="form-control"
      name='Cantidad_Pieza'
      type="Number" min={0}
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
      type="Number" min={0}
      onChange={this.handleChange}
    />
  </FormGroup>

  <FormGroup>
    <label>
      Costo_Envio:
    </label>

    <input
      className="form-control"
      name='Costo_Envio'
      type="Number" min={0}
      onChange={this.handleChange}
    />
  </FormGroup>

  <FormGroup>
    <label>Status:</label>
    <select name="Status" className="form-select" aria-label="Default select example" onChange={this.handleChange}>
    <option selected value="Seleccione">
      Seleccione
      </option>
      <option value="Sin Entregar">
       Sin Entregar
      </option>
      <option value="Entregado">
       Entregado
      </option>
      <input name="Status" type="select" />
    </select>
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

<Modal isOpen={this.state.modalEditar}>
<ModalHeader>
  <div><h3>Editar registro</h3></div>
</ModalHeader>

<ModalBody>

<FormGroup>
    <label>
      Fecha:
    </label>
    <input className="form-control" name='Fecha' type="date" value={this.state.form.Fecha} />
  </FormGroup>

<FormGroup>
    <label>Cedula:</label>
    <input className="form-control" name='Cedula' type="text" value={this.state.form.Cedula} />
  </FormGroup>

  <FormGroup>
    <label> Cliente: </label>
    <input className="form-control" name='Cliente' type="text" value={this.state.form.Cliente} />
  </FormGroup>
  
  <FormGroup>
    <label>Empresa_Envio:</label>
    <select name="Empresa_Envio" className="form-select" aria-label="Default select example" value={this.state.form.Empresa_Envio}>
      <option selected value="Seleccione">Seleccione</option>
      <option value="Fedex">Fedex</option>
      <input name="Empresa_Envio" type="select" />
    </select>
  </FormGroup>
  
  <FormGroup>
    <label> Tracking: </label>
    <input className="form-control" name='Tracking' type="text" value={this.state.form.Tracking} />
  </FormGroup>

  <FormGroup>
    <label>Currier:</label>
    <select name="Currier" className="form-select" aria-label="Default select example" value={this.state.form.Currier}>
    <option selected value="Seleccione">Seleccione</option>
      <option value="Opcion 1">Opcion 1</option>
      <input name="Currier" type="select" />
    </select>
  </FormGroup>

  <FormGroup>
    <label>Via:</label>
    <select name="Via" className="form-select" aria-label="Default select example" value={this.state.form.Via}>
    <option selected value="Seleccione"> Seleccione </option>
      <option value="Maritima">Maritima</option>
      <option value="Aerea">Aerea</option>
      <input name="Via" type="select" />
    </select>
  </FormGroup>

  <FormGroup>
    <label> Cantidad_Pieza: </label>
    <input className="form-control" name='Cantidad_Pieza' type="Number" min={0} value={this.state.form.Cantidad_Pieza} />
  </FormGroup>

  <FormGroup>
    <label> Peso: </label>

    <input className="form-control" name='Peso' type="Number" min={0} value={this.state.form.Peso} />
  </FormGroup>

  <FormGroup>
    <label> Costo_Envio: </label>

    <input className="form-control" name='Costo_Envio' type="Number" min={0}  value={this.state.form.Costo_Envio} />
  </FormGroup>

  <FormGroup>
    <label>Status:</label>
    <select name="Status" className="form-select" aria-label="Default select example" value={this.state.form.Status}>
    <option selected value="Seleccione">  Seleccione  </option>
      <option value="Sin Entregar">   Sin Entregar  </option>
      <option value="Entregado">   Entregado  </option>
      <input name="Status" type="select" />
    </select>
  </FormGroup>

</ModalBody>

<ModalFooter>
  <button color="primary" onClick={()=>this.editar(this.state.form)}>  Editar </button>
  <button color="danger" onClick={()=>this.ocultarModalEditar()}> cancelar </button>
</ModalFooter>
</Modal>
</>
}

export { InsertChain};