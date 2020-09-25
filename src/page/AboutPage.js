import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Amit Kumar. I'm a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React.</p>

            
            </Content>
        </div>
    );

}

export default AboutPage;