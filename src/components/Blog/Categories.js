import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({ Categories, currentSlug }) => {
    return (
        <div className='px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-10'>
            {Categories.map(cat => <Category key={cat} link={`/categories/${cat}`} name={cat}
                active={currentSlug === slug(cat)}
            />)
            }
        </div>
    )
}

export default Categories