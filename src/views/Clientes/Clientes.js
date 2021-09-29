import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { TimePicker,Upload,Button } from 'antd';
import MaterialTable from 'material-table'
import {
  Container
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
const { RangePicker } = TimePicker;



const Icons = (props) => {
const history = useHistory();

return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7 pb-8" fluid style={{background: '#2e6ac9'}}>
      <MaterialTable
         localization={{
            pagination: {
                labelDisplayedRows: '{from}-{to} de {count}'
            },
            toolbar: {
                nRowsSelected: '{0} linha(s) selecionadas'
            },
            header: {
                actions: 'Ações'
            },
            body: {
                emptyDataSourceMessage: 'Nenhum dado encontrado',
                filterRow: {
                    filterTooltip: 'Filtro',
                    filterPlaceHolder:'Pesquisar'
                }
            }
        }}
      title="Registros"
      columns={[
        { title: 'Nome', field: 'name' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül Baran', birthYear: 2017, birthCity: 34 },
      ]}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        }
      }}        
      actions={[
        {
          icon: 'edit',
          tooltip: 'Editar',
          onClick: (event, rowData) =>  history.push("/admin/DadosClientes")
        },
        {
          icon: 'delete',
          tooltip: 'Deletar',
        //   onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
         }
      ]}
    />
       
      </Container >
    </>
  );
};

export default Icons;
