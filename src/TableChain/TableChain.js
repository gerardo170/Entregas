import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container } from "reactstrap";


function TableChain(props){
<Container>
<br />
<Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Usuario</Button>
<br />
<br />

<Table>
  <thead>
    <tr>
      <th>Cedula</th>
      <th>Fecha</th>
      <th>Cliente</th>
      <th>Empresa_Envio</th>
      <th>Tracking</th>
      <th>Currier</th>
      <th>Via</th>
      <th>Cantidad_Pieza</th>
      <th>Peso</th>
      <th>Costo_Envio</th>
      <th>Status</th>
      <th>Acciones</th></tr></thead>
  <tbody>
    {this.state.data.map((elemento) => (
      <tr>
        <td>{elemento.Cedula}</td>
        <td>{elemento.Fecha}</td>
        <td>{elemento.Cliente}</td>
        <td>{elemento.Empresa_Envio}</td>
        <td>{elemento.Tracking}</td>
        <td>{elemento.Currier}</td>
        <td>{elemento.Via}</td>
        <td>{elemento.Cantidad_Pieza}</td>
        <td>{elemento.Peso}</td>
        <td>{elemento.Costo_Envio}</td>
        <td>{elemento.Status}</td>
        <td><Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>
        {"  "}
        <td><Button color="danger">Eliminar</Button></td>
        </td>
      </tr>
    ))}

  </tbody>

</Table>

</Container>
}


export { TableChain };