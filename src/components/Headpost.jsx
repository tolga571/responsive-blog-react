import React from 'react'
import { HeadPost } from '../data/data'
import { Link } from 'react-router-dom'

const Headpost = () => {
    return (
        <article className='head-post'>
            {
                HeadPost.map(({ id, Image, authorId, title, des }, index) => {
                    return (
                        <div key={index} className='container head-post-container'>
                            <div className="post-content">
                                <Link to={`posts/${authorId}`}>
                                    <h1>{title}</h1>
                                </Link>
                                <p>{des}</p>
                            </div>
                            <div className="post-image">
                                <img src={Image} />
                            </div>
                        </div>
                    )
                })
            }

        </article>
    )
}

export default Headpost