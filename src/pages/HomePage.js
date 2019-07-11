import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        author: "Jan Kowalski",
        title: "Czym jest teoria strun ?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolores officiis nisi voluptatem pariatur a nemo aperiam quod? Quae, est quas quasi cum nulla deserunt? Exercitationem voluptates doloremque quasi itaque!"
    },
    {
        id: 2,
        author: "Paweł Nowak",
        title: "Czym jest paradoks fermiego ?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolores officiis nisi voluptatem pariatur a nemo aperiam quod? Quae, est quas quasi cum nulla deserunt? Exercitationem voluptates doloremque quasi itaque!"
    },
    {
        id: 3,
        author: "Jan Nowak",
        title: "Ciemna materia i ciemna energia ?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolores officiis nisi voluptatem pariatur a nemo aperiam quod? Quae, est quas quasi cum nulla deserunt? Exercitationem voluptates doloremque quasi itaque!"
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;