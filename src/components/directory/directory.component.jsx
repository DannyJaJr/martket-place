import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    title: 'React',
                    imageUrl: 'https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png',
                    id: 1
                },
                {
                    title: 'JavaScript',
                    imageUrl: 'https://www.tutorialrepublic.com/lib/images/javascript-illustration.png',
                    id: 2
                },
                {
                    title: 'Java',
                    imgaUrl: 'https://storage.ning.com/topology/rest/1.0/file/get/8667507462?profile=RESIZE_710x',
                    id: 3
                },
                {
                    title: 'Python',
                    imageUrl: 'https://venturebeat.com/wp-content/uploads/2018/09/python3.jpg?fit=2017%2C1201&strip=all',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'AWS',
                    imageUrl: 'https://dunhamconnect.com/wp-content/uploads/aws-migration-1200x675.jpg',
                    size: 'large',
                    id: 5
                }
            ]

        };
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title}  imageUrl={imageUrl} size={size} /> 
                    ))
                }
            </div>
        )
    }
}

export default Directory;
