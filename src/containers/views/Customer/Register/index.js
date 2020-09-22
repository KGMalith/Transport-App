import React from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './RegisterStyle.css';
import { ReactTitle } from 'react-meta-tags';
import UserForm from '../../../../components/Register/UserForm';

export default (props) => (

    <div>
        <ReactTitle title="Register" />
        <p className="registerPara">Welcome! Please complete following steps to apply smart card.</p>

        <UserForm/>
    </div>
)