import React from 'react'
import { client } from '../utils/client';
import Main from './components/main';

export const revalidate = 60;

async function index() {
  const homeData = await client.fetch('*[_type == "home"][0]');
  console.log(homeData)
  const uiData = await client.fetch('*[_type == "uiComponents"][0]');
  console.log(uiData)

  return (
    <Main homeData={homeData} uiData={uiData}/>
  )
}

export default index