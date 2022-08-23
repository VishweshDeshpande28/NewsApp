import React, { Component, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import MoreInfo from "./MoreInfo";
import firebase from './firebase';
import { QuerySnapshot } from "firebase/firestore";
import {doc} from 'firebase/firestore';
import {collection} from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getArticles} from 'firebase/database';


function News() {
  return (
    <div>
      <h1>Heading</h1>
    </div>
  )
}

export default News;
