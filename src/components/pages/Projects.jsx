import React from 'react'

export const Projects = () => {
    return (
        <>
            <section className='projects'>
                <div className='projectCard'>
                    <img src="https://picsum.photos/300/200?random=1">
                    </img>
                    <div className='info'>
                        <h3>ShoppingCart</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie luctus nisi, vitae rutrum ipsum sagittis eget. Nunc varius bibendum ultricies. Donec finibus dignissim massa eget fringilla. Morbi molestie felis turpis, eget sodales orci imperdiet sodales. Quisque ultricies efficitur placerat. Quisque ornare vulputate nisi. Maecenas dictum nisi non nisi accumsan, vitae tristique libero rhoncus. Fusce vitae dignissim sem, non tincidunt neque.</p>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Axios</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
                <div className='projectCard'>
                    <img src="https://picsum.photos/300/200?random=2">
                    </img>
                    <div className='info'>
                        <h3>TodoList</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie luctus nisi, vitae rutrum ipsum sagittis eget. Nunc varius bibendum ultricies. Donec finibus dignissim massa eget fringilla. Morbi molestie felis turpis, eget sodales orci imperdiet sodales. Quisque ultricies efficitur placerat. Quisque ornare vulputate nisi. Maecenas dictum nisi non nisi accumsan, vitae tristique libero rhoncus. Fusce vitae dignissim sem, non tincidunt neque.</p>
                        <ul>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                </div>
                {/* <div className='projectCard'>TBC...</div> */}
            </section>
        </>
    )
}
