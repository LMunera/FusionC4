import React from 'react';
import type {NextPage} from 'next';

import Link from 'next/link';
import  Head  from 'next/head';



const Home: NextPage = () => {
  return (
    <div className='bg-green-400'>
      <Head>
        <title>Home | Gestion de proyectos  </title>
      </Head>
      <p>Pagina de Index</p>
      <Link href = '/admin/usuarios'>
        <a className= 'cursor-pointer'>ir al usuario</a>
      </Link>
      <h1 className="text-5xl font-bold underline">
     Hola Como estas
    </h1>

    <div>
    <i className = 'fas fa-home'/>
 
   </div>

   Hola Julio Prietog
    </div>
  )
}

export default Home
