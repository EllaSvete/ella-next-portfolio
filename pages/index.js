import Head from 'next/head';
import Image from 'next/image';
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";


export default function Home () {
  return (
    <ContainerBlock
      title="Ella Svete - Developer, Craftsperson, Musician"
      description="Ella Svete's Portfolio"
    >
      <Hero/>
    </ContainerBlock>
  );
}

