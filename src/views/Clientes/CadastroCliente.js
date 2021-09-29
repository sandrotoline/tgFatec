import React, { useState } from "react";
import { TimePicker,Upload,Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button as Botao} from "reactstrap";
import {
  Card,
  Input,
  CardBody,
  FormGroup,
  Form,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
const { RangePicker } = TimePicker;
const Icons = (props) => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid style={{background: '#2e6ac9'}}>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow" style={{marginBottom:'62px'}}>
              <CardBody>
              <Form>
                  <h6 className="heading-small mb-4">
                    Estabelecimento
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Identificação
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Horário de Funcionamento
                          </label>
                          <RangePicker className="form-control-alternative" format={'HH:mm'} style={{padding:"10px"}}/>
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Código interno da Prefeitura
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                           
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Situação
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-situcao"
                            type="select"
                          >
                            <option>Em Funcionamento</option>
                            <option>Desativado</option>
                            <option>Em Manutenção</option>
                            <option>Mudou-se</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small mb-4">
                    Endereço
                  </h6>
                  <div className="pl-lg-4">
                    
                    <Row>
                      <Col lg="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            CEP
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-cep"
                            placeholder=""
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Endereço
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Número
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                          
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Cidade
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-cidade"
                           
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="1">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            UF
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-estado"
                            
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small mb-4">Contato</h6>
                    <Row md="3">
                      <Col>
                        <div className="pl-lg-4">
                          <FormGroup>
                            <label>Telefone</label>
                            <Input
                              className="form-control-alternative"
                              type="number"
                            />
                          </FormGroup>
                        </div>
                      </Col>
                      <Col>
                        <div className="pl-lg-4">
                          <FormGroup>
                            <label>Celular</label>
                            <Input
                              className="form-control-alternative"
                              type="number"
                            />
                          </FormGroup>
                        </div>
                      </Col>
                      <Col>
                          <div className="pl-lg-4">
                            <FormGroup>
                            <label>Foto do Estabelecimento</label><br/>
                            <Upload  maxCount={5}  className="form-control-alternative">
                              <Button icon={<UploadOutlined />} className="btn btn-default" Style="height:43px !important">Upload (Max: 5)</Button>
                            </Upload>
                            </FormGroup>
                          </div>
                        </Col>
                  </Row> 
                  <div style={{textAlign:"right"}}>
                    <Botao color="success" type="button">
                      Salvar
                    </Botao>  
                  </div> 
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container >
    </>
  );
};

export default Icons;
