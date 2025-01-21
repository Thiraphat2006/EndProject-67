import { React, useEffect } from 'react'
import Navbar from '../Component/Navbar/Nav'
import Aboutcomponent from '../Component/about/Aboutcomponent'
import Ontop from '../Component/Scrolltotop/Scrolltotop'
function About() {
    useEffect(() => {
        document.body.style.backgroundColor = '#f6eceb'
        return () => {
            document.body.style.backgroundColor = 'white'
        }
    }, [])
    return (
        <>
            <Navbar />
            <Aboutcomponent />
            <Ontop/>
        </>
    )
}

export default About