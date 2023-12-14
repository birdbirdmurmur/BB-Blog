import React from 'react'

export const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: 'ShoppingCart',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie luctus nisi, vitae rutrum ipsum sagittis eget. Nunc varius bibendum ultricies. Donec finibus dignissim massa eget fringilla. Morbi molestie felis turpis, eget sodales orci imperdiet sodales. Quisque ultricies efficitur placerat. Quisque ornare vulputate nisi. Maecenas dictum nisi non nisi accumsan, vitae tristique libero rhoncus. Fusce vitae dignissim sem, non tincidunt neque.',
            imgUrl: 'https://picsum.photos/300/200?random=1',
        },
        {
            id: 2,
            title: 'TodoList',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie luctus nisi, vitae rutrum ipsum sagittis eget. Nunc varius bibendum ultricies. Donec finibus dignissim massa eget fringilla. Morbi molestie felis turpis, eget sodales orci imperdiet sodales. Quisque ultricies efficitur placerat. Quisque ornare vulputate nisi. Maecenas dictum nisi non nisi accumsan, vitae tristique libero rhoncus. Fusce vitae dignissim sem, non tincidunt neque.',
            imgUrl: 'https://picsum.photos/300/200?random=2',
        },
        // {
        //     id: 3,
        //     title: 'TodoList',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie luctus nisi, vitae rutrum ipsum sagittis eget. Nunc varius bibendum ultricies. Donec finibus dignissim massa eget fringilla. Morbi molestie felis turpis, eget sodales orci imperdiet sodales. Quisque ultricies efficitur placerat. Quisque ornare vulputate nisi. Maecenas dictum nisi non nisi accumsan, vitae tristique libero rhoncus. Fusce vitae dignissim sem, non tincidunt neque.',
        //     imgUrl: 'https://picsum.photos/300/200?random=2',
        // },
        // {
        //     id: 4,
        //     title: 'TodoList',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie luctus nisi, vitae rutrum ipsum sagittis eget. Nunc varius bibendum ultricies. Donec finibus dignissim massa eget fringilla. Morbi molestie felis turpis, eget sodales orci imperdiet sodales. Quisque ultricies efficitur placerat. Quisque ornare vulputate nisi. Maecenas dictum nisi non nisi accumsan, vitae tristique libero rhoncus. Fusce vitae dignissim sem, non tincidunt neque.',
        //     imgUrl: 'https://picsum.photos/300/200?random=2',
        // },
    ]

    return (
        <>
            <section className='projects'>
                <div className='project-cards'>
                    {projectsData.map((project) => (
                        <div className='project-card' key={project.id}>
                            <img src={project.imgUrl} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
